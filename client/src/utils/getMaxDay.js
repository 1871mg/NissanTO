import { getDayForInput } from "./getToday";

export const getMaxDayFromToday = (period) => {
  const today = new Date();
  const maxDateMs = today.getTime() + (period * 24 * 60 * 60 * 1000);
  const maxDate = new Date(maxDateMs);

  return getDayForInput(maxDate)
}
