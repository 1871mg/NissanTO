
export const getEndDate = function (timeStart, duration) {
  const endDateMs = timeStart.getTime() + (duration * 60 * 60 * 1000);
  return new Date(endDateMs).toISOString().slice(0, -8).replace('T', ' ');
};
