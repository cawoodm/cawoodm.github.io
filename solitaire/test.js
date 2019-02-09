/**
 * Create a new Piece object
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Piece(x, y) {
  return {
    x: x,
    y: y
  };
}

/**
 * Make world peace
 * @param {String} country
 */
function peace(country) {
  return 'bliss';
}

var p1 = new Piece(10, 20);

var p2 = peace('ZW');


Piece.prototype = {
  debug: function() {
    console.log(this);
  }
};


/**
 * @param string data
 */
function dp(d) {
  console.log(d);
}

/**
 * @param string v
 * @return {String}
 */
function def(v, d) {
  if (typeof v !== 'undefined') {
    return v;
  }
  return d;
}