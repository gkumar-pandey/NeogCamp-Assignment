//?Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" }
];

// Your code here

const greetEmployeeMessages = employeeData.map(
  ({ name }) => `Hi ${name} we are glad to ahve you as a marketing`
);

console.log(greetEmployeeMessages);
