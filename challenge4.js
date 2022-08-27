/* const billValue= 275;
console.log(`The bill was ${billValue} and the tip was 
 ${billValue>=50 && billValue<=300? 0.15*billValue : 0.2*billValue} and the total value is
  ${billValue + (billValue>=50 && billValue<=300? 0.15*billValue : 0.2*billValue)}`);
 */
//   more prettier version:
const bill = 40;
const tip = bill>=50 && bill<=300 ? 0.15*bill : 0.2 * bill
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
