//! Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
const isEligibleForVote = (age) => {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
};

console.log(isEligibleForVote(20));
console.log(isEligibleForVote(18));
console.log(isEligibleForVote(17));
