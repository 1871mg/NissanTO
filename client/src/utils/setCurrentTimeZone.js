import { handleTimeFormat } from "./handleTimeFormat";

export const setCurrentTimeZoneMinus = function (date) {
  return  new Date(date.getTime() - (Math.abs(date.getTimezoneOffset()) * 60 * 1000)).toISOString().slice(0, -8).replace('T', ' ');
};

export const setCurrentTimeZonePlus = function (date) {
  return new Date(date.getTime() + (Math.abs(date.getTimezoneOffset()) * 60 * 1000)).toISOString().slice(0, -8).replace('T', ' ')
};


