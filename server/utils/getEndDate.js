const getEndDate = function (timeStart, duration) {
  const endDateMs = timeStart.getTime() + (duration * 60 * 60 * 1000);
  return new Date(endDateMs);
};

module.exports = getEndDate;
