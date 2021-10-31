const getShortName = function (firstName, lastName, parentName) {
  return `${lastName} ${firstName[0]}.${parentName ? `${parentName[0]}.` : ''}`;
};

module.exports = getShortName;
