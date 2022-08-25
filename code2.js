/* let weightMarks = 78;
let heightMarks = 1.69;
let weightJohn = 92;
let heightJohn = 1.95; */
/* const bmiMarks = weightMarks / heightMarks ** 2;
const bmiJohn = weightJohn / heightJohn ** 2 ; */
/* const markHigherBMI = bmiMarks > bmiJohn ;
console.log(markHigherBMI,bmiMarks, bmiJohn); */
/* console.log(
    (bmiMarks = weightMarks / heightMarks ** 2),
    (bmiJohn = weightJohn / heightJohn ** 2),
    (markHigherBMI = bmiJohn < bmiMarks));
 */
   
    const weightMarks = 78;
    const heightMarks = 1.69;
    const weightJohn = 92;
    const heightJohn = 1.95;
    const bmiMarks = weightMarks / heightMarks ** 2 ;
    const bmiJohn = weightJohn / heightJohn ** 2 ;
    console.log(bmiJohn, bmiMarks);
    if(bmiMarks>bmiJohn){
       console.log("Mark's BMI is higher than John's"); 
    }
    else{
        console.log("John's BMI is higher than Mark's");
    }
    if(bmiMarks>bmiJohn){
        console.log(`Mark's BMI ${bmiMarks} is higher than John's ${bmiJohn}!`);  
     }
     else{
         console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMarks}!`);
     }
 


