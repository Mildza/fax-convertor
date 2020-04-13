const fs = require("fs");
const reader = fs.readFileSync("task.txt");
const array = [...reader];
const column1 = array.slice(0, 27);
const column2 = array.slice(29, 56);
const column3 = array.slice(58, 85);

const one = [32, 32, 32, 32, 32, 124, 32, 32, 124];
const two = [32, 95, 32, 32, 95, 124, 124, 95, 32];
const three = [32, 95, 32, 32, 95, 124, 32, 95, 124];
const four = [32, 32, 32, 124, 95, 124, 32, 32, 124];
const five = [32, 95, 32, 124, 95, 32, 32, 95, 124];
const six = [32, 95, 32, 124, 95, 32, 124, 95, 124];
const seven = [32, 95, 32, 32, 32, 124, 32, 32, 124];
const eight = [32, 95, 32, 124, 95, 124, 124, 95, 124];
const nine = [32, 95, 32, 124, 95, 124, 32, 95, 124];
const zero = [32, 95, 32, 124, 32, 124, 124, 95, 124];

const firstNumber = [
  ...column1.slice(0, 3),
  ...column2.slice(0, 3),
  ...column3.slice(0, 3),
];
const secondNumber = [
  ...column1.slice(3, 6),
  ...column2.slice(3, 6),
  ...column3.slice(3, 6),
];
const thirdNumber = [
  ...column1.slice(6, 9),
  ...column2.slice(6, 9),
  ...column3.slice(6, 9),
];
const fourthNumber = [
  ...column1.slice(9, 12),
  ...column2.slice(9, 12),
  ...column3.slice(9, 12),
];
const fifthNumber = [
  ...column1.slice(12, 15),
  ...column2.slice(12, 15),
  ...column3.slice(12, 15),
];
const sixthNumber = [
  ...column1.slice(15, 18),
  ...column2.slice(15, 18),
  ...column3.slice(15, 18),
];
const seventhNumber = [
  ...column1.slice(18, 21),
  ...column2.slice(18, 21),
  ...column3.slice(18, 21),
];
const eighthNumber = [
  ...column1.slice(21, 24),
  ...column2.slice(21, 24),
  ...column3.slice(21, 24),
];
const ninthNumber = [
  ...column1.slice(24, 27),
  ...column2.slice(24, 27),
  ...column3.slice(24, 27),
];

const numbers = [one, two, three, four, five, six, seven, eight, nine, zero];
const task = [
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  sixthNumber,
  seventhNumber,
  eighthNumber,
  ninthNumber,
];
const result = [];
const mapToNumber = [];

const translate = () => {
  task.forEach((el) => {
    numbers.forEach((num) => {
      if (el.every((value, index) => value === num[index])) {
        return result.push(num);
      }
    });
  });

  result.forEach((el) => {
    if (el.every((value, index) => value === one[index])) {
      mapToNumber.push(1);
    } else if (el.every((value, index) => value === two[index])) {
      mapToNumber.push(2);
    } else if (el.every((value, index) => value === three[index])) {
      mapToNumber.push(3);
    } else if (el.every((value, index) => value === four[index])) {
      mapToNumber.push(4);
    } else if (el.every((value, index) => value === five[index])) {
      mapToNumber.push(5);
    } else if (el.every((value, index) => value === six[index])) {
      mapToNumber.push(6);
    } else if (el.every((value, index) => value === seven[index])) {
      mapToNumber.push(7);
    } else if (el.every((value, index) => value === eight[index])) {
      mapToNumber.push(8);
    } else if (el.every((value, index) => value === nine[index])) {
      mapToNumber.push(9);
    } else if (el.every((value, index) => value === zero[index])) {
      mapToNumber.push(0);
    }
  });
  return console.log(mapToNumber.join(""));
};

translate();
