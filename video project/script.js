"usse script";

const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

console.log(isWeekday()); //false beause today is 23/04/2022 and saturaday so it's a weekend1
