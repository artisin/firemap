const lodashThrottle       = require('lodash.throttle');
const detectIt             = require('detect-it');
const getConvexHullPolygon = require('./get-convex-hull-polygon.js');
const drawHeatMap          = require('./draw-heat-map.js');
const drawClickMap         = require('./draw-click-map.js');


class FireMap {
  /**
   * @param  {arr} dataPoints       -> user data points for mouse
   * @param  {arr} clickPoints      -> user data points for clicks
   * @param  {num} area             -> sampling area which clusters all points
   *                                   within its area into a single cluster
   *                                   default is 5 so 5px by 5px sample area
   * @param  {dom} canvas           -> canvas dom element to draw map on
   * @param  {bln} cleanEdges       -> cleans edges of polygon to remove rough
   *                                   edges to make it look pretty, only used
   *                                   if corners is false
   * @param  {str} clickColor       -> color of the click point data stars
   * @param  {num} clickSize        -> size of the click point data stars
   * @param  {num}  corners         -> creats pseudo data points for cornor of the
   *                                   window so heatmap spans the entire screen
   * @param  {num} height           -> height of canvas || screen height
   * @param  {num} hue              -> color hue for map default is 0.5 green,
   *                                   0.8 violet, 3.5 rgbiv and no non-point color
   * @param  {num} interval         -> interpolation interval of unknown points,
   *                                   the lower the number the more points
   *                                   calculates which producesed a better map
   * @param  {num} limit            -> search neighborhood limit, higher num
   *                                   smoother blend of map colors
   *                                   but it also increase computation time
   * @param  {num} maxValue         -> max value for color default is 100
   *                                   so any value above 100 is going to be the
   *                                   same color
   * @param  {bln} mesh             -> to create a mesh-like map rather then
   *                                   a solid map
   * @param  {num} opacity          -> opacity of canvus fill
   * @param  {bln} points           -> to draw data marker point coordinates
   * @param  {num} pointSize        -> font-size of points
   * @param  {obj} styles           -> custom CSS canvas styles
   * @param  {fnk} subscribe        -> a subscribe function that is invoked on
   *                                   the mouse tracking & click event,
   *                                   passes the event and binded to this
   * @param  {num} threshold        -> point values has to be higher than threshold
   * @param  {num} throttle         -> mouse tracker throttle
   * @param  {num} width            -> width of canvas || screen width
   */
  constructor({
    //user data points
    dataPoints = [], clickPoints = [], subscribe,
    //cavus setting
    canvas, width, height, area = 10, maxValue = 100, styles = {},
    //map appearance settings
    hue = 0.5, opacity = 0.8, cleanEdges = true,
    //mouse event setting
    throttle = 100, threshold = 110,
    //draw setting
    corners = true, limit = 100, interval = 8, mesh = false, points = false, pointSize = 13,
    //click setting
    clickTrack = false, clickSize, clickColor
  } = {}) {
    const self = this;
    self.error = false;

    /**
     * Error gate
     */
    canvas = canvas
             || document.getElementsByTagName('canvas')
             && document.getElementsByTagName('canvas')[0];
    if (!canvas) {
      self.error = true;
      console.error('Fatal Fire Map Error: Canvas element not found, cannot proceed.');
      return false;
    }
    /**
     * User data
     */
    self.dataPoints  = dataPoints;
    self.clickPoints = clickPoints;

    /**
     * Tracking Vars/setup
     */
    self.area = area;
    self.throttle = throttle;
    self.threshold = threshold;
    const getDocSize = function(axis = 'Width') {
      const D = document;
      return Math.max(
        D.body[`scroll${axis}`], D.documentElement[`scroll${axis}`],
        D.body[`offset${axis}`], D.documentElement[`offset${axis}`],
        D.body[`client${axis}`], D.documentElement[`client${axis}`]
      );
    };
    self.width = width ? width : getDocSize('Width');
    self.height = height ? height : getDocSize('Height');
    //used in mouse track
    self._time = false;
    self._temp = [];
    //create location matrix, add one for safty
    self.data = [];
    self.data.length = Math.round((self.width + self.area) / self.area) + 1;
    const ySize = Math.round((self.height + self.area) / self.area) + 1;
    for (let i = self.data.length - 1; i >= 0; i--) {
      self.data[i] = [];
      self.data[i].length = ySize;
    }
    //checks for clickTracking and creates need be
    self.clickTrack = clickTrack;
    if (self.clickTrack) {
      self.clickData = [];
      self.clickData.length = Math.round((self.width + self.area) / self.area) + 1;
      for (let i = self.clickData.length - 1; i >= 0; i--) {
        self.clickData[i] = [];
        self.clickData[i].length = ySize;
      }
    }

    /**
     * HeatMap
     */
    self.drawHeatMap = drawHeatMap.bind(self);
    self.drawClickMap = drawClickMap.bind(self);
    self.maxValue = maxValue;
    self.hue = hue;
    self.cleanEdges = cleanEdges;
    self.opacity = opacity;
    self.ctx = null;
    //set canvus to take up entire screen
    canvas.width = self.width;
    canvas.height = self.height;
    self.canvas = canvas;
    self.points = [];
    self.polygon = [];
    self.limits = {
      xMin: 0,
      xMax: 0,
      yMin: 0,
      yMax: 0
    };
    self.size = {
      height: canvas.height,
      width: canvas.width
    };
    //set canvus style props
    styles = Object.assign({
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: opacity
    }, styles);
    Object.keys(styles).forEach(function (key) {
      canvas.style[key] = styles[key];
    });

    /**
     * Draw
     */
    self.corners   = corners;
    self.limit     = limit;
    self.interval  = interval;
    self.mesh      = mesh;
    self.points    = points;
    self.pointSize = pointSize;
    //clicks
    self.clickSize = clickSize;
    self.clickColor = clickColor;

    //used for realtime tracking
    if (typeof subscribe === 'function') {
      self.subscribe = subscribe.bind(self);
    }
    self.dataPointCount = false;
  }



  /**
   * Draws the heatzmap based on data points
   * @param  {arr} options.dataPoints -> user data points for mouse
   * @param  {arr} options.clickPoint -> user data points for clicks
   * @param  {num} options.clickSize  -> size of the click point data stars
   * @param  {str} options.clickColor -> color of the click point data stars
   * @param  {fnk} options.cb         -> Callback function invoked upon completion
   *                                     and binded to instance with the first arg
   *                                     being the canvas context (ctx)
   * @param  {num} options.hue        -> color hue for map default is 0.5 green,
   *                                     0.8 violet, 3.5 rgbiv and no non-point color
   * @param  {num} options. interval  -> interpolation interval of unknown points,
   *                                     the lower the number the more points
   *                                     calculates which producesed a better
   * @param  {num} options.limit      -> search neighborhood limit, higher num
   *                                     smoother blend of map colors
   * @param  {bln} options.mesh       -> to create a mesh-like map rather then
   *                                    a solid map
   * @param  {num} options.opacity    -> opacity of canvus fill
   * @param  {bln} options.points     -> to draw data marker point coordinates
   * @param  {num} options.pointSize  -> font-size of points
   * @param  {num} options.threshold  -> point values has to be higher than threshold
   */
  draw ({
    dataPoints, clickPoints, limit, interval,
    mesh, points, pointSize, threshold, hue, opacity, clickSize, clickColor,
    cb = false
  } = {}) {
    const self = this;
    dataPoints  = dataPoints  !== undefined ? dataPoints : self.dataPoints;
    clickPoints = clickPoints !== undefined ? clickPoints : self.clickPoints;
    limit       = limit       !== undefined ? limit : self.limit;
    interval    = interval    !== undefined ? interval : self.interval;
    mesh        = mesh        !== undefined ? mesh : self.mesh;
    points      = points      !== undefined ? points : self.points;
    pointSize   = pointSize   !== undefined ? pointSize : self.pointSize;
    //self vars
    self.threshold  = threshold  !== undefined ? threshold : self.threshold;
    self.hue        = hue        !== undefined ? hue : self.hue;
    self.opacity    = opacity    !== undefined ? opacity : self.opacity;
    self.clickSize  = clickSize  !== undefined ? clickSize : self.clickSize;
    self.clickColor = clickColor !== undefined ? clickColor : self.clickColor;
    let ctx;
    /**
     * Wrapper so that we don't trip up the main thread. draw-heat-map also
     * is wrapped via requestUserIdle to only execue on idle
     */
    const run = async function run () {
      //cannot't clean with real time
      const cleanEdges = dataPoints ? self.cleanEdges : false;
      ctx        = self.canvas.getContext('2d');
      dataPoints       = dataPoints.length ? dataPoints : await self.getData();
      if (dataPoints.length) {
        const polygon    = await getConvexHullPolygon(dataPoints);
        await self.drawHeatMap({
          ctx, limit, interval, dataPoints, polygon, cleanEdges, mesh, points, pointSize
        });
      }
      //clickpoints
      clickPoints = clickPoints === true
                  ? await self.getData(self.clickData || [], true)
                  : clickPoints;
      if (clickPoints.length) {
        await self.drawClickMap({ctx, clickPoints});
      }
      return true;
    };
    run().then(function () {
      console.log('Draw Complete');
      if (cb) {
        cb.apply(self, [ctx]);
      }
    });
  }


  /**
   * Formats the data matricks are removes undefined data
   * @param  {arr} source -> Source data
   * @return {prm}         -> promise([{x, y, value} ...])
   */
  getData (source = null, click = false) {
    const self = this;
    return new Promise(function (done) {
      source = source || self.data;
      const data = [];
      let value  = null;
      for (let x = source.length - 1; x >= 0; x--) {
        for (let y = source[x].length - 1; y >= 0; y--) {
          value = source[x][y];
          if (value) {
            data.push({
              x: x * self.area,
              y: y * self.area,
              value: !click ? value / 10 : value
            });
          }
        }
      }
      done(data);
    });
  }


  /**
   * Client init to start tracking mouse movements
   */
  init(subscribe = null) {
    const self = this;
    if (!self.error) {
      //subscribe set up
      self.subscribe = subscribe && typeof subscribe === 'function'
                     ? subscribe.bind(self)
                     : self.subscribe;
      const sub = (event, type) => self.subscribe && self.subscribe(event, type);
      //mouse movement
      self._trackAndLogMouse = self._trackAndLogMouse.bind(self);
      document.addEventListener('mousemove',
        lodashThrottle(function (event) {
          self._trackAndLogMouse(event);
          sub(event, 'mousemove');
        }, self.throttle),
        detectIt.passiveEvents ? {passive: true} : false
      );

      //click
      if (self.clickTrack) {
        self._logClicks = self._logClicks.bind(self);
        document.addEventListener('pointerdown',
          lodashThrottle(function (event) {
            self._logClicks(event);
            sub(event, 'pointerdown');
          }, 75),
          detectIt.passiveEvents ? {passive: true} : false
        );
      }

      //used so that tracker resets otherwise you get edge outliers
      document.addEventListener('pointerdown', function () {
        self._time = new Date();
      }, detectIt.passiveEvents ? {passive: true} : false);
    }
    //places data points at corners of canvus
    if (self.corners) {
      const val = 1;
      const x = self.data.length - 1;
      const y = self.data[0].length - 1;
      self.data[0][0] = val;
      self.data[0][y] = val;
      self.data[x][0] = val;
      self.data[x][y] = val;
    }
  }


  _setCoordinates(x, y, mouse = true) {
    const self = this;
    const posX = Math.round(x / self.area);
    const posY = Math.round(y / self.area);
    //mouse loging
    if (mouse) {
      if (!self._time || !self._temp.length) {
        self._time = new Date();
        self._temp = [posX, posY];
      }else {
        const newTime = new Date();
        const time = newTime - self._time;
        //set current data
        const temp = self._temp;
        //set data, and error check
        if (self.data[temp[0]]) {
          const data = self.data[temp[0]][temp[1]];
          self.data[temp[0]][temp[1]] = !data ? time : (data + time);
        }
        //store new time + temp
        self._time = newTime;
        self._temp = [posX, posY];
      }
      //for real time update
      if (self.dataPointCount) {
        self.dataPointCount.count += 1;
      }
    }else {
      //click track
      const data = self.clickData[posX][posY];
      self.clickData[posX][posY] = !data ? 1 : (data + 1);
    }
  }


  /**
   * Tracks mouse events set movements to _setCoordinates
   */
  _trackAndLogMouse(event) {
    const self = this;
    event = event || window.event;
    if (event.pageX === null && event.clientX !== null) {
      const eventDoc = (event.target && event.target.ownerDocument) || document;
      const doc      = eventDoc.documentElement;
      const body     = eventDoc.body;

      event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
                    (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                    (doc && doc.clientTop  || body && body.clientTop  || 0);
    }
    self._setCoordinates(event.pageX, event.pageY);
  }


  /**
   * Tracks clicks
   */
  _logClicks(event) {
    const self = this;
    event = event || window.event;
    if (event.pageX === null && event.clientX !== null) {
      const eventDoc = (event.target && event.target.ownerDocument) || document;
      const doc      = eventDoc.documentElement;
      const body     = eventDoc.body;

      event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
                    (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                    (doc && doc.clientTop  || body && body.clientTop  || 0);
    }
    self._setCoordinates(event.pageX, event.pageY, false);
  }


  /**
   * Updates heatmap in real time
   * @param  {num} interval -> update heatmap every x data points
   */
  realTime (drawInterval = 10) {
    const self = this;
    const dataPointCount = {count: 0};
    const proxy = new Proxy(dataPointCount, {
      set: function (target, property, value) {
        target[property] = value;
        if (value % drawInterval === 0) {
          self.draw();
        }
        return true;
      }
    });
    self.dataPointCount = proxy;
  }
}


export default FireMap;
