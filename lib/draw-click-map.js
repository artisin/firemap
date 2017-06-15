//requestIdleCallback Polyfill
require('ric');

/**
 * Generates canvus starts
 * @param  {num} arms        -> number of arms on star
 * @param  {num} x           -> position x
 * @param  {num} y           -> position y
 * @param  {num} outerRadius -> outter radius
 * @param  {num} innerRadius -> innter radius
 * @param  {dom} context     -> canvus element
 * @param  {str} colour      -> color fill
 */
const drawStar = function (arms, x, y, outerRadius, innerRadius, context, colour) {
  const angle = (Math.PI / arms);
  context.fillStyle = colour;
  context.beginPath();
  for (let i = 0; i < 2 * arms; i++) {
    const r = (i & 1) ? innerRadius : outerRadius;
    const pointX = x + Math.cos(i * angle) * r;
    const pointY = y + Math.sin(i * angle) * r;

    if (!i) {
      context.moveTo(pointX, pointY);
    } else {
      context.lineTo(pointX, pointY);
    }
  }
  context.closePath();
  context.fill();
};


/**
 * Creates and draws the heat map
 * @param  {ojb} options.ctx         -> canvuas context
 * @param  {arr} options.clickPoints -> data points to create clicks from [{}...]
 */
const drawClicks = function ({
  ctx, clickPoints
}) {
  const self    = this;
  const clickColor = self.clickColor || 'rgba(231, 76, 60, 0.75)';
  const clickSize = self.clickSize || 20;

  return new Promise(function (done) {
    window.requestUserIdle(function () {
      /**
       * Draw coordinate points
       */
      let point = null;
      for (let i = 0; i < clickPoints.length; i += 1) {
        point = clickPoints[i];
        //draw start
        drawStar(8, point.x, point.y, clickSize, clickSize / 2, ctx, clickColor);
      }

      //->
      done(true);
    }, {timeout: 2000});
  });

};

module.exports = drawClicks;
