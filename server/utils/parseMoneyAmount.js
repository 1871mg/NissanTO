module.exports = function (amount) {
  if (amount) {
    return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  }
  return '-';
};
