const today = new Date();
const tempDay = today.getDate().toString();
const tempmonth = (today.getMonth() + 1).toString();
const tempHour = today.getHours().toString();
const tempMinute = (today.getMinutes() + 1).toString();

function dateConcatZero(str) {
  return str < 10 ? "0" + str : str;
}

export const year = today.getFullYear().toString();
export const day = dateConcatZero(tempDay);
export const month = dateConcatZero(tempmonth);
// const hour = dateConcatZero(tempHour);
// const minute = tempMinute < 10 ? "0" + tempMinute : tempMinute;

// export default curDate;
export function removeComma(str) {
  return Number(str.replaceAll(",", ""));
}
