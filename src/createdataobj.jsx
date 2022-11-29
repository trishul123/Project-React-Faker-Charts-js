// import createusersdata from './createusersdata';
//   import countFreq from './countFreq';

// //creating desired profile data object

// const usersobject=createusersdata();
// console.log(usersobject);
// // const [usersobject,setUserObject] = useState(()=>createusersdata());
// //   console.log(usersobject);
// //creating object with frequency of items

// //frequency of countries
// let arrcountry=[]
// for(let i in usersobject){
//   arrcountry.push(usersobject[i].country);
// }
// let ncountry = arrcountry.length;
// const countryobject=countFreq(arrcountry, ncountry);   
// console.log(countryobject);
// //frequency of carmakers
// let arrcarmakers=[]
// //  for(let i in usersobject){
// // arrcarmakers.push(usersobject[i].carmaker);}
// // let ncarmakers = arrcarmakers.length;
// // let carmakersobject=countFreq(arrcarmakers, ncarmakers);   
// // console.log(carmakersobject);
// function filtercarmakers(usersobject,switchnumber){
//   let filterusers=[];
//     usersobject.filter((item)=>{
//       switch (switchnumber) {
//         case 0:
//           if(item.age>20&&item.age<=25)
//           return item;
//           break;
//         case 1:
//           if(item.age>25&&item.age<=30)
//           return item;
//           break;
//         case 2:
//           if(item.age>30&&item.age<=35)
//           return item;
//           break;
//         case 3:
//           if(item.age>35&&item.age<=40)
//           return item;
//           break;
//         case 4:
//           if(item.age>40&&item.age<=45)
//           return item;
//           break;
//         case 5:
//           if(item.age>45&&item.age<=50)
//           return item;
//           break;
//         case 6:
//           if(item.age>50&&item.age<=55)
//           return item;
//           break;
//         case 7:
//           if(item.age>55&&item.age<=60)
//           return item;
//           break;
//         case 8:
//           if(item.age>60&&item.age<=65)
//           return item;
//           break;  
        
        
//       }
      
      
//     })
//     .map(item=>{
//       filterusers.push(
//         item.carmaker
//     );  
//     })
//     return filterusers;
//     }

// arrcarmakers=filtercarmakers(usersobject,5);
// let ncarmakers = arrcarmakers.length;
// let carmakersobject=countFreq(arrcarmakers, ncarmakers);   
// console.log("test",carmakersobject);

// //frequency of carage
// let arrcarage=[]
// for(let i in usersobject){
//   arrcarage.push(usersobject[i].carage);
// }
// let ncarage = arrcarage.length;
// const carageobject=countFreq(arrcarage, ncarage);   
// console.log(carageobject);
// export {countryobject,carmakersobject,carageobject};