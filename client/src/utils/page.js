export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
  }
  return result;
}

export const getPaginationArr = (direction, start, rangeStart, totalPages, rangeCount ) => {
  if(direction === 'right') {
    if(rangeStart < totalPages - rangeCount) {
      rangeStart += 1;
    }
  } else if( direction === 'left') {
    if(rangeStart > start + 1) {
      rangeStart -= 1;
    }
  }
  const range = [];
  let startCounter = rangeStart;
  let i = 0;
  while(i < rangeCount) {
    range.push(startCounter);
    i++;
    startCounter++;
  }

  return {
    arr: [start, ...range, totalPages],
    rangeCount,
  };
}
