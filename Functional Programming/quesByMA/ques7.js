//? Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
const arr = [2, 4, 5, 7, 9, 17, 34, 65, 90];

const getNumEvenAndLessThanEight = (numbers) => {
  numbers.forEach((num) => {
    if (num % 2 == 0 && num < 8) {
      console.log(num);
    }
  });
};

console.log(getNumEvenAndLessThanEight(arr));
