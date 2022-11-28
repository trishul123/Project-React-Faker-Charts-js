import createusersdata from './createusersdata';
import countFreq from './countFreq';
//creating desired profile data object

const usersobject=createusersdata();
console.log(usersobject);

//creating object with frequency of items

//frequency of countries
let arrcountry=[]
for(let i in usersobject){
  arrcountry.push(usersobject[i].country);
}
let ncountry = arrcountry.length;
const countryobject=countFreq(arrcountry, ncountry);   
console.log(countryobject);

//frequency of carmakers
let arrcarmakers=[]
for(let i in usersobject){
  arrcarmakers.push(usersobject[i].carmaker);
}
let ncarmakers = arrcarmakers.length;
const carmakersobject=countFreq(arrcarmakers, ncarmakers);   
console.log(carmakersobject);

//frequency of carage
let arrcarage=[]
for(let i in usersobject){
  arrcarage.push(usersobject[i].carage);
}
let ncarage = arrcarage.length;
const carageobject=countFreq(arrcarage, ncarage);   
console.log(carageobject);

export {usersobject,countryobject,carmakersobject,carageobject};