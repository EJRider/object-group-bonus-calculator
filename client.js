// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
console.log('array of employee data: ',  employees );
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?
// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {
  let results;
  let bonus = {
    bonusPercentageThree: 0,
    bonusPercentageFour: 0,
    bonusPercentageFive: 0
  };
  // your logic here
    for (let worker of employee){
      if(worker.reviewRating <= 2){
      console.log(`Worker ${worker.name} is not eligble for a bonus`);
      }
      else if(worker.reviewRating === 3){
        /*bonus = {
          bonusPercentageThree: 0
        };*/
      console.log(`Worker ${worker.name} will recieve a 4% bonus`);
      bonus.bonusPercentageThree += 4;
        if (worker.employeeNumber.length === 4){
          console.log('Thank you for your work, take a 5% extra to your bonus');
          bonus.bonusPercentageThree += 5};
        if(worker.annualSalary > 65000){
          console.log('You make too much! We are dropping your bonus by 1%');
          bonus.bonusPercentageThree -= 1};
        if(bonus.bonusPercentageThree > 13){
          console.log('Employees cannot have more than a 13% bonus');
          bonus.bonusPercentageThree = 13};
        }
      else if(worker.reviewRating === 4){
        /*bonus = {
          bonusPercentageFour: 0
        };*/
      console.log(`Worker ${worker.name} will recieve a 6% bonus`);
      bonus.bonusPercentageFour += 6;
        if (worker.employeeNumber.length === 4){
          console.log('Thank you for your work, take a 5% extra to your bonus');
          bonus.bonusPercentageFour += 5};
        if(worker.annualSalary > 65000){
          console.log('You make too much! We are dropping your bonus by 1%');
          bonus.bonusPercentageFour -= 1};
        if(bonus.bonusPercentageFour > 13){
          console.log('Employees cannot have more than a 13% bonus');
          bonus.bonusPercentageFour = 13}
        }
      else if(worker.reviewRating === 5){
      console.log(`Worker ${worker.name} will recieve a 10% bonus`);
      bonus.bonusPercentageFive += 10;
        if (worker.employeeNumber.length === 4){
          console.log('Thank you for your work, take a 5% extra to your bonus')
          bonus.bonusPercentageFive += 5;};
        if(worker.annualSalary > 65000){
          console.log('You make too much! We are dropping your bonus by 1%')
          bonus.bonusPercentageFive -= 1;}
        if(bonus.bonusPercentageFive > 13){
            console.log('Employees cannot have more than a 13% bonus');
            bonus.bonusPercentageFive = 13}
            }
  // return new object with bonus results
  console.log(bonus.bonusPercentageThree);
  console.log(bonus.bonusPercentageFour);
  console.log(bonus.bonusPercentageFive);
          }
        }
console.log(calculateIndividualEmployeeBonus(employees));
//Total Compensation
let atticus = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}
function totalSalary(array) {
  let money = 0;
  //for (let person of array) {
    console.log('The workers total salaray is: ', array.annualSalary);
    money = array.annualSalary * .06;
    money += (array.annualSalary / 1);
    return money;
  //}
}
console.log(totalSalary(atticus));