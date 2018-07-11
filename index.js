'use strict';

function random() {
  return String.prototype.slice.call(Math.random(), 2)
    .replace(/^0+/, '');
}

module.exports = function(length) {
  var str = '';
  while (true) {
    str += random();
    if (str.length >= length) {
      return str.slice(0, length);
    }
  }
};
