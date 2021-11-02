const getEndDate = function (timeStart, duration) {
  const endDateMs = timeStart.getTime() + (duration * 30 * 60 * 1000);
  return new Date(endDateMs);
};

module.exports = getEndDate;
