const setCurrentTimeZoneTimeMinus = function (date) {
  return new Date(date.getTime() - (Math.abs(date.getTimezoneOffset()) * 60 * 1000));
};

module.exports = setCurrentTimeZoneTimeMinus;
