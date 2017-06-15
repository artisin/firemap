
/**
 * Gets perpendicular vector
 */
const vectorProduct = function (a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
};

/**
 * Creates an convex hull polygon - ie, the outter bounds around the points
 * @param  {arr} points -> points to form polygon around
 * @return {arr}        -> the polygon points
 */
const getConvexHullPolygon = function (points) {
  return new Promise(function (done) {
    const lower = [];
    const upper = [];

    for (let i = 0; i < points.length; i += 1) {
      while (lower.length >= 2 && vectorProduct(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
        lower.pop();
      }
      lower.push(points[i]);
    }
    for (let i = points.length - 1; i >= 0; i -= 1) {
      while (upper.length >= 2 && vectorProduct(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
        upper.pop();
      }
      upper.push(points[i]);
    }

    upper.pop();
    lower.pop();
    const polygon = lower.concat(upper);
    done(polygon);
  });
};

module.exports = getConvexHullPolygon;
