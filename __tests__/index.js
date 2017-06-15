require("regenerator-runtime/runtime");
const JSDOM = require('jsdom');
// const cunt = require('canvas-prebuilt')
// const cheerio = require('cheerio')
// const $ = cheerio.load('<canvus id="test"></canvus>')

const dom = new JSDOM.JSDOM(`<body>
  <canvas id="test"></canvas>
  <canvas id="cunt"></canvas>

</body>`);
window = dom.window;
document = window.document;

const fucker = dom.window.document.getElementById('test');
// console.log(fucker.toDataURL())

const FireMap = require('firemap').default;
// import {FireMap} from 'firemap'
// import test from 'firemap';

console.log(FireMap)

// // console.log(fucker.toDataURL())
// const testData = {
//   dataPoints: [{"x":1920,"y":995,"value":11.1},{"x":1920,"y":0,"value":11.1},{"x":1445,"y":180,"value":42.3},{"x":1440,"y":180,"value":10},{"x":1440,"y":175,"value":239},{"x":1375,"y":195,"value":10},{"x":1320,"y":210,"value":10.4},{"x":1300,"y":165,"value":10.1},{"x":1125,"y":360,"value":10.2},{"x":900,"y":135,"value":10.2},{"x":855,"y":125,"value":10},{"x":805,"y":105,"value":10},{"x":785,"y":655,"value":10.1},{"x":670,"y":90,"value":11.7},{"x":660,"y":80,"value":10.2},{"x":655,"y":80,"value":11.7},{"x":650,"y":80,"value":39.1},{"x":645,"y":75,"value":10},{"x":610,"y":380,"value":240.7},{"x":605,"y":545,"value":10.1},{"x":595,"y":765,"value":10},{"x":595,"y":755,"value":10},{"x":595,"y":725,"value":10.2},{"x":590,"y":795,"value":320.8},{"x":590,"y":785,"value":10.7},{"x":590,"y":780,"value":10},{"x":590,"y":775,"value":31.5},{"x":590,"y":770,"value":10.6},{"x":570,"y":385,"value":10.2},{"x":440,"y":410,"value":10},{"x":40,"y":525,"value":10},{"x":0,"y":995,"value":11.1},{"x":0,"y":0,"value":11.1}],
//   clickPoints: [{"x":650,"y":80,"value":1},{"x":590,"y":795,"value":1}]
// };

// // const cunt = FireMap(Object.assign(testData))

// // console.log(fucker.toDataURL())


// // console.log(fucker.toDataURL())
// const cunt = new FireMap(Object.assign({canvas: dom.window.document.getElementById('cunt')}, testData))
// // console.log(fucker.toDataURL())


// cunt.draw({
//   cb: function (ctx) {
//     console.log(dom.window.document.getElementById('cunt').toDataURL())
//     // console.log(ctx.get)
//     // console.log('cunt')
//     // const shit = dom.window.document.getElementById('cunt ');
//     // // console.log(fucker.toDataURL())
//     // console.log(shit.toDataURL())
//     // console.log('dsdsdsdsd')
//     // console.log(this.canvas.toDataURL())
//   }
// });


// // $.html()

// debugger