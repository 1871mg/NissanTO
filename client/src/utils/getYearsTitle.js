export const getYearsTitle = (years) => {
  if(years == 1) {
    return 'год'
  } else if (years >= 2 && years <= 4 ) {
    return 'года'
  } else {
    return 'лет'
  }
}
