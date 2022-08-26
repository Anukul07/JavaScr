// type conversion
/* const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log (Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(1991));
 */
// type coercion
/* console.log('I am '+ 23 + ' years old');
console.log('I am '+ '23' + ' years old');
console.log('23'-'10'-3);
console.log('23'+'10'+3+'3');
console.log('23'/'2'); */

// let n= '1' + 1;    //'11'
/* n= n -1 ;
console.log(n); */

// 5 falsy values : 0, '' , undefined , null , NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 110;
if(money) {
    console.log("Don't spend it all");
}else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is undefined!");
} */

/* const age = '18';
if(age === 18) console.log ('You just became an adult :D (strict)');
if(age == 18) console.log ('You just became an adult :D (loose)');       // try to avoid loose equality

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
if (favourite === 23){     //'23' = 23 when used ==
    console.log("23 is a good number")
} else if (favourite ===7) {
    console.log('7 is a cool number')
} 
else {
    console.log('Number is not 23 or 7')
}

if(favourite !==23) console.log('Why not 23'); */

const hasDriversLicense = true;  //A
const hasGoodVision = true; //B
console.log (hasDriversLicense && hasGoodVision );
console.log (hasDriversLicense || hasGoodVision );
console.log (!hasGoodVision);
// const shouldDrive = hasDriversLicense && hasGoodVision ; 
/* if(shouldDrive){
    console.log('Sarah is able to drive');
} else {
    console.log('Some1 else should drive');
} */

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
} else {
    console.log('Some1 else should drive');
}