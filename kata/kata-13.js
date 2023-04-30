
const talkingCalendar = function(date) {
  let year = date[0] + date[1] + date[2] + date[3];
  let month = date[5] + date[6];
  let day;
  let string = '';

  // Convert month
  switch (month) {
  case '01':
    string += 'January';
    break;
  case '02':
    string += 'February';
    break;
  case '03':
    string += 'March';
    break;
  case '04':
    string += 'April';
    break;
  case '05':
    string += 'May';
    break;
  case '06':
    string += 'June';
    break;
  case '07':
    string += 'July';
    break;
  case '08':
    string += 'August';
    break;
  case '09':
    string += 'September';
    break;
  case '10':
    string += 'October';
    break;
  case '11':
    string += 'November';
    break;
  case '12':
    string += 'December';
  }

  // Convert day
  if (date[8] === '0') {
    day = parseInt(date[9]);
  } else {
    day = parseInt(date[8] + date[9]);
  }

  if (day === 1 || day === 21 || day === 31) {
    day += 'st';
  } else if (day === 2 || day === 22) {
    day += 'nd';
  } else if (day === 3 || day === 23) {
    day += 'rd';
  } else {
    day += 'th';
  }

  string += " " + day + ", " + year;

  return string;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));