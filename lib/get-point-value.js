/**
 * Gets the inverse distance weight of the point
 * @param  {num} limit     -> limit points
 * @param  {arr} polygon   -> the convex hull polygon
 * @param  {arr} points    -> all points
 * @param  {num} options.x -> point in quesion
 * @param  {num} options.y -> point in question
 * @return {num}           -> value
 */
const getPointValue = function (limit, polygon, points, {x, y}) {
  let insidePolygon = false;
  let xa = 0;
  let xb = 0;
  let ya = 0;
  let yb = 0;
  let intersect = false;
  let p = polygon.length - 1;
  //find out if point inside the polygon
  for (let i = 0; i < polygon.length; i++) {
    xa = polygon[i].x;
    ya = polygon[i].y;
    xb = polygon[p].x;
    yb = polygon[p].y;
    intersect = ((ya > y) !== (yb > y)) && (x < (xb - xa) * (y - ya) / (yb - ya) + xa);
    insidePolygon = !intersect ? insidePolygon : !insidePolygon;
    p = i;
  }

  if (insidePolygon) {
    const arr = [];
    const pwr = 2;
    let dist = 0.0;
    let inv = 0.0;

    //square distances
    for (let i = 0; i < points.length; i++) {
      const distX = x - points[i].x;
      const distY = y - points[i].y;
      dist = distX * distX + distY * distY;
      if (dist === 0) {
        return points[i].value;
      }
      arr[i] = [dist, i];
    }

    arr.sort(function (a, b) {
      return a[0] - b[0];
    });

    //calc
    let b = 0.0;
    let ptr = 0;
    let t = 0.0;
    for (let i = 0; i < limit; i++) {
      ptr = arr[i];
      inv = 1 / Math.pow(ptr[0], pwr);
      t += inv * points[ptr[1]].value;
      b += inv;
    }
    return t / b;
  }

  return -255;
};

module.exports = getPointValue;
