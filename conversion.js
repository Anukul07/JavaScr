// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log (Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(1991));

// type coercion
console.log('I am '+ 23 + ' years old');
console.log('I am '+ '23' + ' years old');
console.log('23'-'10'-3);
console.log('23'+'10'+3+'3');
console.log('23'/'2');

let n= '1' + 1;    //'11'
n= n -1 ;
console.log(n);

// 5 falsy values : 0, '' , undefined , null , NaN
console.log(Boolean(0));
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
}