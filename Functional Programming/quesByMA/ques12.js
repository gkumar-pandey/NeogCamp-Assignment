//? Write a program to find out the maximum and minimum number in an array by using only one reduce method
const number = [3, 5, 6, 1, 14];

const findMaxMin = (numbers) =>
  numbers.reduce(
    (acc, curr) => {
      return [Math.max(acc[0], curr), Math.min(acc[1], curr)];
    },
    [numbers[0], numbers[1]]
  );

console.log(findMaxMin(number));
