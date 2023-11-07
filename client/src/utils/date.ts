const today = new Date();
const tempDay = today.getDate().toString();
const tempmonth = (today.getMonth() + 1).toString();
// const tempHour = today.getHours().toString();
// const tempMinute = (today.getMinutes() + 1).toString();

function dateConcatZero(str: string) {
  return Number(str) < 10 ? "0" + str : str;
}

export function getDayBefore(y: string, m: string, d: string) {
  let [year, month, day] = [y, m, d].map(Number);

  day = day - 1;

  if (day <= 0) {
    month = month - 1;
  }
  if (month <= 0) {
    year = year - 1;
  }
  const newDate = [year, month, day].map((x) => dateConcatZero(String(x)));
  return newDate;
}

export const year = today.getFullYear().toString();
export const day = dateConcatZero(tempDay);
export const month = dateConcatZero(tempmonth);
// const hour = dateConcatZero(tempHour);
// const minute = tempMinute < 10 ? "0" + tempMinute : tempMinute;

// export default curDate;
