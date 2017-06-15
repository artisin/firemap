/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 */
const hslToRgb =  function (h, s, l) {
  let r, g, b;

  if(s === 0) {
    // achromatic
    r = g = b = l;
  }else{
    const hue2rgb = function (p, q, t) {
      if(t < 0) { t += 1; }
      if(t > 1) { t -= 1; }
      if(t < 1 / 6) { return p + (q - p) * 6 * t; }
      if(t < 1 / 2) { return q; }
      if(t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/**
 * Gets color based on constrants
 */
const getColor = function ({hue, max, val}) {
  // 0   -> orange
  // 0.5 -> green
  // 1   -> violet
  const min = 0;
  const dif = max - min;
  val = val > max ? max : val < min ? min : val;
  return hslToRgb(1 - (1 - hue) - (((val - min) * hue) / dif), 1, 0.5);
};

module.exports = getColor;



