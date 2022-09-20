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
// Takes in an object, not an array. Returns an object holding name,
// bonusPercentage, totalComp, totalBonus

for(let employee of employees){
    console.log('One employee', employee);
    let result = calculateIndividualEmployeeBonus(employee);
    console.log(result);
}


  function calculateIndividualEmployeeBonus( employee ) {
    let bonusPercentage = 0;
    // console.log('inside function');

    //TODO calculate the actual percentage
   
/*
switch (employee.reviewRating){
    case 3: 
        bonusPercentage += .04;
        break;
    case 4:
        bonusPercentage += .06;
        break; 
    case 5: 
        bonusPercentage += .10;
        break;
}

let ratingBonuses = {
    0: 0,
    1: 0,
    2: 0,
    3: 0.04,
    4: 0.06,
    5: 0.10
};

if( ratingBonuses[employee.reviewRating]){
    bonusPercentage += ratingBonuses[employee.reviewRating]
}



*/


    if(employee.reviewRating === 3){
        bonusPercentage += .04;
        if (employee.employeeNumber.length === 4){
           bonusPercentage += .05; 
        }
        if(employee.annualSalary > 65000){
            bonusPercentage -=0.01;
        }
        if(bonusPercentage > 0.13){
            bonusPercentage = 0.13;
            //bonuspercentage = Mathmin(bonusPercentage, 0.13)
        }
        if(bonusPercentage < 0){
            bonusPercentage = 0;
            // bonuspercentage = Mathmax(bonusPercentage, 0)
        }
    }
    else if (employee.reviewRating === 4){
        bonusPercentage += .06;
        if (employee.employeeNumber.length === 4){
            bonusPercentage += .05; 
         }
         if(employee.annualSalary > 65000){
            bonusPercentage -=0.01;
        }
        if(bonusPercentage > 0.13){
            bonusPercentage = 0.13;
            //bonuspercentage = Mathmin(bonusPercentage, 0.13)
        }
        if(bonusPercentage < 0){
            bonusPercentage = 0;
            // bonuspercentage = Mathmax(bonusPercentage, 0)
        }
    }
    else if (employee.reviewRating === 5){
        bonusPercentage += .1;
        if (employee.employeeNumber.length === 4){
            bonusPercentage += .05; 
         }
         if(employee.annualSalary > 65000){
            bonusPercentage -=0.01;
        }
        if(bonusPercentage > 0.13){
            bonusPercentage = 0.13;
            //bonuspercentage = Mathmin(bonusPercentage, 0.13)
        }
        if(bonusPercentage < 0){
            bonusPercentage = 0;
            // bonuspercentage = Mathmax(bonusPercentage, 0)
        }
    }
    else {
        bonusPercentage = 0;
        if (employee.employeeNumber.length === 4){
            bonusPercentage += .05; 
         }
        if(employee.annualSalary > 65000){
            bonusPercentage -=0.01;
        }
        if(bonusPercentage > 0.13){
            bonusPercentage = 0.13;
            //bonuspercentage = Mathmin(bonusPercentage, 0.13)
        }
        if(bonusPercentage < 0){
            bonusPercentage = 0;
            // bonuspercentage = Mathmax(bonusPercentage, 0)
        }
    }

    
    let totalBonus = bonusPercentage * Number(employee.annualSalary);
    let totalCompensation = bonusPercentage + Number(employee.annualSalary)
    return {
        name: employee.name,
        bonusPercentage: bonusPercentage,
        totalCompensation: totalCompensation,
        totalBonus: totalBonus
    };
  }

  console.log(calculateIndividualEmployeeBonus(employees));