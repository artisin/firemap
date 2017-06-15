const getPointValue = require('./get-point-value');
const getColor      = require('./get-color.js');
//requestIdleCallback Polyfill
require('ric');

/**
 * sorts based on i axis
 * @param  {arr} dataPoints -> dataPoints to min/max
 * @param  {str} i          -> x | y
 * @return {obj}            -> min/max
 */
const getMinMax = function (dataPoints, i = 'x') {
  dataPoints.sort(function (a, b) {
    return a[i] === b[i] ? a.x - b.x : a[i] - b[i];
  });
  return {
    min: dataPoints[0][i],
    max: dataPoints[dataPoints.length - 1][i]
  };
};


/**
 * Creates and draws the heat map
 * @param  {ojb} options.ctx        -> canvuas context
 * @param  {num} options.limit      -> neighborhood limit
 * @param  {num} options.interval   -> interpolation interval
 * @param  {arr} options.dataPoints -> data points to create map from [{}...]
 * @param  {arr} options.polygon    -> the surounding convex polygon around dataPoints
 * @param  {bln} options.cleanEdges -> to remove rough edges
 * @param  {bln} options.mesh       -> to create mesh-like map
 * @param  {bln} options.points     -> to draw coordinates for dataPoints
 * @param  {num} options.pointSize  -> size of coordinates points
 */
const drawHeatMap = function ({
  ctx, limit, interval, dataPoints, polygon, cleanEdges, mesh, points, pointSize
}) {
  const self    = this;
  const size    = self.size;
  const hue     = self.hue;
  const max     = self.maxValue;
  const opacity = self.opacity;
  const thresh  = self.threshold;
  const corners = self.corners;
  const radius  = mesh ? interval * 1.5 : 1;
  return new Promise(function (done) {
    window.requestUserIdle(function () {
      //set up
      limit = limit > dataPoints.length ? dataPoints.length : limit + 1;
      const xMinMax = getMinMax(dataPoints, 'x');
      const yMinMax = getMinMax(dataPoints, 'y');
      const xMin = xMinMax.min;
      const yMin = yMinMax.min;
      const xMax = xMinMax.max;
      const yMax = yMinMax.max;
      const dbl = 2 * interval;
      let col = [];
      let val = 0.0;
      let x = 0;
      let y = 0;
      let color = '';
      let gradient = null;
      //clear pervious canvus before redraw
      ctx.clearRect(0, 0, size.width, size.height);

      //draw heatmap
      for (x = xMin; x < xMax; x += interval) {
        for (y = yMin; y < yMax; y += interval) {
          //get indv points value
          val = getPointValue(limit, polygon, dataPoints, {x, y});
          if (val !== -255) {
            ctx.beginPath();
            //get corresponding color to val
            col = getColor({val, hue, max});
            color = `rgba(${col[0]}, ${col[1]}, ${col[2]},`;
            gradient = ctx.createRadialGradient(x, y, radius, x, y, interval);
            gradient.addColorStop(0, color + opacity + ')');
            gradient.addColorStop(1, color + ' 0)');
            ctx.fillStyle = '#ffffff';
            ctx.lineJoin = 'round';
            ctx.fillStyle = gradient;
            ctx.fillRect(x - interval, y - interval, dbl, dbl);
            ctx.fill();
            ctx.closePath();
          }
        }
      }


      /**
       * Clean hard edges
       */
      if (!corners && (cleanEdges && polygon.length > 1)) {
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = '#ffffff';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        for (let i = 1; i < polygon.length; i++) {
          ctx.lineTo(polygon[i].x, polygon[i].y);
        }
        ctx.lineTo(polygon[0].x, polygon[0].y);
        ctx.closePath();
        ctx.fill();
      }


      /**
       * Draw coordinate points
       */
      if (points) {
        const PI2 = 2 * Math.PI;
        let point = null;
        for (let i = 0; i < dataPoints.length; i += 1) {
          point = dataPoints[i];
          if (point.value > thresh) {
            //get corresponding color to val
            color = getColor({val: point.value, hue, max});
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize, 0, PI2, false);
            ctx.fill();
            ctx.lineWidth = pointSize / 4;
            ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8)`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize, 0, PI2, false);
            ctx.stroke();
            ctx.textAlign = 'center';
            ctx.font = `${pointSize - 2}px monospace`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#474f50';
            ctx.fillText(Math.round(point.value), point.x, point.y);
          }
        }
      }

      //->
      done(true);
    }, {timeout: 2000});
  });

};

module.exports = drawHeatMap;
