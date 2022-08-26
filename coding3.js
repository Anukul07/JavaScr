/* const avgDolphins= (96 + 108 + 89 ) / 3 ;
const avgKoalas = (88 + 91 + 110) / 3 ;
console.log (avgDolphins, avgKoalas);
if(avgDolphins>avgKoalas) {
    console.log("Team Dolphin is the winner!");
}
else if (avgDolphins === avgKoalas) {
    console.log("There has been a draw");
}
else {
    console.log("Team Koalas is the winner"); */
// }    

const avgDolphins = (67 + 92 + 82 ) / 3 ;
const avgKoalas = (89 + 75 + 86) / 3 ;
console.log(avgDolphins, avgKoalas);
if(avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Team Dolphin is the winner!");
}
else if (avgDolphins === avgKoalas && avgDolphins>= 100 && avgDolphins >= 100) {
    console.log("There has been a draw");
}
else if (avgKoalas > avgDolphins && avgKoalas >=100)
{
  console.log("Team Koalas is the winner");
}
else {
    console.log("Noone wins the trophy");
}