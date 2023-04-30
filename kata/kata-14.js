const calculateChange = function(total, cash) {
  let totalChange = cash - total;
  const change = {};
  let times = 0;

  if (totalChange >= 2000) {
    times = Math.floor(totalChange / 2000);
    totalChange -= times * 2000;
    change.twentyDollar = times;
  }

  if (totalChange >= 1000) {
    times = Math.floor(totalChange / 1000);
    totalChange -= times * 1000;
    change.tenDollar = times;
  }

  if (totalChange >= 500) {
    times = Math.floor(totalChange / 500);
    totalChange -= times * 500;
    change.fiveDollar = times;
  }

  if (totalChange >= 200) {
    times = Math.floor(totalChange / 200);
    totalChange -= times * 200;
    change.twoDollar = times;
  }

  if (totalChange >= 100) {
    times = Math.floor(totalChange / 100);
    totalChange -= times * 100;
    change.oneDollar = times;
  }

  if (totalChange >= 25) {
    times = Math.floor(totalChange / 25);
    totalChange -= times * 25;
    change.quarter = times;
  }

  if (totalChange >= 10) {
    times = Math.floor(totalChange / 10);
    totalChange -= times * 10;
    change.dime = times;
  }

  if (totalChange >= 5) {
    times = Math.floor(totalChange / 5);
    totalChange -= times * 5;
    change.nickel = times;
  }

  if (totalChange >= 1) {
    change.penny = totalChange;
  }
    
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));