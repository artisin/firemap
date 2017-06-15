# FireMap

[![npm](https://img.shields.io/npm/l/firemap.svg)](https://github.com/artisin/firemap/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/firemap.svg)](https://www.npmjs.com/package/firemap)
[![David](https://img.shields.io/david/artisin/firemap.svg)](https://github.com/artisin/firemap/blob/master/package.json)

FireMap is a refinement on the typical "heatmap" to help better visualize mouse position data through Inverse Distance Weighting. I created a companion website to display various FireMap example outputs along with some additional detail you can check out here: [https://firemap.netlify.com/](https://firemap.netlify.com/)

Compared to [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/?utm_source=gh) and other heatmap libraries there are two major differences. FireMap uses a standardized GIS algorithm compared to heatmap.js and others that use a density equation of some sort? This was the primary reason for creating FireMap since I thought it would be advantageous to employ a deterministic algorithm. Secondly, due to the calculation intensive nature of FireMap it's not intended to be used in real-time, although, it does have said capability.

# Install

You can install FireMap either through npm:

```bash
   npm install --save-dev firemap
```

Alternatively, you can manually download FireMap through the Github repository here: [github.com/artisin/firemap/dist/](https://github.com/artisin/firemap/dist)


# Initialize

The FireMap class instance is exported through: `export default`;

__ECMAScript 6 Module Syntax__
```js
import FireMap from 'firemap';
```

__CommonJS Syntax__
```js
const FireMap = require('firemap').default;
```

__Create a New Instance__

FireMap is a Class, and as such, you must initialize it. The FireMap `constructor` accepts an option object argument to set the initial/default options.

```js
// option-less
const firemap = new FireMap();

// options
const firemap = new FireMap({
  // if no canvas element is passed it defauls to the
  // first getElementsByTagName('canvas')
  canvas: document.getElementById('my-canvas-element'),
  // changes sampling DOM area
  area: 10
});
```

## Data Structure

Typically you'll use FireMap in a post-event fashion using tracking data you've collected. However, you can draw a semi-real-time heatmap using the `realTime` method. There are two data types, `dataPoints` (mousemove) and `clickPoints` (pointerdown) that are either passed to the initial Class `constructor` or the `draw` method.

__`dataPoints` → Mouse Position Data__

```js
firemap.draw({
  dataPoints: [{ x: 10, y: 15, value: 5}, ...]
})
```

__`clickPoints` → Mouse Click Data__

```js
firemap.draw({
  clickPoints: [{ x: 20, y: 150}, ...]
})
```

__Both__

```js
firemap.draw({
  dataPoints: [{ x: 10, y: 15, value: 5}, ...],
  clickPoints: [{ x: 20, y: 150}, ...]
})
```


## Class Methods

### Class Instance → `constructor(options = {})`

Creates a `FireMap` instance — many of these options can also be passed to the `draw` method.

+ `options.dataPoints`  = {arr} → user data points for mouse (mousemove) 
+ `options.clickPoints` = {arr} → user data points for clicks (pointerdown)
+ `options.area`        = {num} → sampling area that clusters all points within its area into a single cluster default is 10 so 10px by 10px sample area
+ `options.canvas`      = {dom} → canvas dom element to draw map on
+ `options.cleanEdges`  = {bln} → cleans edges of polygon to remove rough edges to make it look pretty, only used if corners is false
+ `options.clickColor`  = {str} → color of the click point data stars
+ `options.clickSize`   = {num} → size of the click point data stars
+ `options.corners`    = {num}  → creates pseudo data points for corner of the window so heatmap spans the entire screen
+ `options.height`      = {num} → height of canvas || screen height
+ `options.hue`         = {num} → color hue for map default is 0.5 green, 0.8 violet, 3.5 rgbiv and no non-point color
+ `options.interval`    = {num} → interpolation interval of unknown points, the lower the number the more points calculated - computation time increase by O(n2) where n is the number of data points
+ `options.limit`       = {num} → search neighborhood limit, higher number the smoother blend of map colors - has a minor increase in computation time
+ `options.maxValue`    = {num} → used for color, and the default is 100, so any value above 100 is going to be the same color
+ `options.mesh`        = {bln} → to create a mesh-like map rather then a solid map
+ `options.opacity`     = {num} → opacity of canvus fill
+ `options.points`      = {bln} → to draw data marker point coordinates
+ `options.pointSize`   = {num} → font-size of points in px
+ `options.styles`      = {obj} → custom CSS canvas styles
+ `options.subscribe`   = {fnc} → a subscribe function that is invoked on the mouse tracking & click event, passes the event and binded to this
+ `options.threshold`   = {num} → point label value threshold, if a values does not meet threshold no point label will be generated
+ `options.throttle`    = {num} → mouse tracker throttle
+ `options.width`       = {num} → width of canvas, defaults to current screen width

### Draws/create Map → `draw(options = {})`

Draws/creates a heatmap for the canvas element using either passed in `dataPoints` or real-time data points through the invocation of the `draw` method or automatically through the `realTime` method.

__IMPORTANT__: In all likelihood you don’t want data sets of over 1000+ data points because the computation time is O(n2) where n is the number of data points. With 1000-1500 points with an `interval` of `8` it takes 20-40 seconds to compute 1000-1500 data points and if you want a high quality render with an `interval` of `4` there will be two times as many calculations. If you are using FireMap to gather data points you can reduce data points by increasing the `area` (recommended) or increasing the `throttle`.

__Options__
These options can also be passed into the initial `constructor`. 

+ `options.dataPoints` = {arr} → user data points for mouse (mousemove) 
+ `options.clickPoints`= {arr} → user data points for clicks (pointerdown)
+ `options.clickSize`  = {num} → size of the click point data stars
+ `options.clickColor` = {str} → color of the click point data stars
+ `options.cb`         = {fnc} → Callback function invoked upon completion and binded to instance with the first arg being the canvas context (ctx)
+ `options.hue`        = {num} → color hue for map default is 0.5 green, 0.8 violet, 3.5 rgbiv and no non-point color
+ `options.interval`   = {num} → interpolation interval of unknown points, the lower the number the more points calculated - computation time increase by O(n2) where n is the number of data poi
+ `options.limit`      = {num} → search neighborhood limit, higher num smoother blend of map colors
+ `options.mesh`       = {bln} → to create a mesh-like map rather then a solid map
+ `options.opacity`    = {num} → opacity of canvus fill
+ `options.points`     = {bln} → to draw data marker point coordinates
+ `options.pointSize`  = {num} → font-size of points
+ `options.threshold`  = {num} → point values has to be higher than threshold


### Get/Format Data → `getData()`

The `getData` method converts the raw tracking data matrix into valid/formatted tracking data to be used by the `draw` method. However, you'll first need to initialize the tracking feature through the `init` method in order to generate said data to be formatted. The data is returned in an array that consists of objects `{x: <num>, y: <num>, value: <num>}`.


### Initialize Mouse & Click Tracking → `init(subscribe = fnc)`

To use FireMaps built-in mouse position and click logging feature you need to invoke the `init` method. There're two primary ways to "log" this data to send to your server. You can dump the data via the `getData` method either on a leave event or poll event. Or you can subscribe to the raw event data through the `subscribe` function. If you choose the latter, you can pass a `subscribe` function to the `init` method or declare it via the `option` object in the class constructor. The `subscribe` function is binded to the instance so that you can access the internals through `this`. Additionally, the `subscribe` function is passed two arguments, the first is the raw event and the second is the type of event which will be a string of `'mousemove'` or `'pointerdown'`.


### Real Time Drawing → `realTime(drawInterval = 10)`

FireMap can also draw in real-time, but unlike [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/?utm_source=gh), FireMap is not intended to draw in real time. The `drawInterval` determines how often the map should re-draw and the default is set at `10`, so that it re-draws every `10` new data points.

