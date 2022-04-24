function sum(a, b) {
  const message = 'Pay attention, a and b should be a number';
  const type = 'number';

  if (typeof a === type && typeof b === type) {
    return a + b;
  } else {
    throw new TypeError(message);
  }
}

module.exports = sum;
