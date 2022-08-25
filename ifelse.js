const age = 15;
// const isOldEnough = age >=18;
// if (isOldEnough){    };
if(age>=18){
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    // console.log("Sarah is too young.Wait another " + (yearsLeft)+ " years");
    console.log(`Sarah is too young . Wait another ${yearsLeft} years.`);
}

const birthYear = 2000;
let century;
if(birthYear < 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);
