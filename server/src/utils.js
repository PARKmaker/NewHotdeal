const today = new Date();
const tempDay = today.getDate().toString();
const tempmonth = (today.getMonth() + 1).toString();
const tempHour = today.getHours().toString();

const year = today.getFullYear().toString();
const day = tempDay < 10 ? "0" + tempDay : tempDay;
const month = tempmonth < 10 ? "0" + tempmonth : tempmonth;
const hour = tempHour < 10 ? "0" + tempHour : tempHour;
const curDate = year + month + day + hour;

export default curDate;
