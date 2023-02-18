//Intl
// let date = new Date();

// console.log(date);

//format date in UK //day/month/year
//US  month/day/year

// let formatUK = Intl.DateTimeFormat("en-UK").format(date);
// console.log(formatUK);

// let formatUS = Intl.DateTimeFormat("en-US").format(date);
// console.log(formatUS);

// let obj = {
//   day: "numeric",
//   month: "2-digit", //long,numeric,2-digit
//   year: "2-digit", //numeric,2-digit
//   hour: "numeric",
//   minute: "numeric",
//   weekday: "narrow", //short, long, narrow
// };

// let formatUK = Intl.DateTimeFormat("en-UK", obj).format(date);
// console.log(formatUK);

// let formatUS = Intl.DateTimeFormat("en-US", obj).format(date);
// console.log(formatUS);

//............................................................................................

let num = 2343435.676;
console.log(num);

let obj = {
  style: "currency", //unit,percent, currency
  unit: "mile-per-hour",
  currency: "USD",
  useGrouping: false,
};

let formatUS = Intl.NumberFormat("en-US", obj).format(num);
console.log(formatUS);

let formatUK = Intl.NumberFormat("en-UK", obj).format(num);
console.log(formatUK);

let formatGE = Intl.NumberFormat("de-DE", obj).format(num);
console.log(formatGE);
