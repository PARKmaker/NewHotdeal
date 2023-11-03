const today = new Date();
const tempDay = today.getDate().toString();
const tempmonth = (today.getMonth() + 1).toString();
const tempHour = today.getHours().toString();
const tempMinute = (today.getMinutes() + 1).toString();

function dateConcatZero(str) {
  return str < 10 ? "0" + str : str;
}

const year = today.getFullYear().toString();
const day = dateConcatZero(tempDay);
const month = dateConcatZero(tempmonth);
const hour = dateConcatZero(tempHour);
const minute = dateConcatZero(tempMinute);

const curDate = year + month + day + hour + minute;

export default curDate;
