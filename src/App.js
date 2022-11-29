import './App.css';
import React, {useState} from 'react';
import Tabledata from './table';
import createusersdata from './createusersdata';
import countFreq from './countFreq';
//import {chartDatacountry,chartDatacarmakers,chartDatacarage} from './chartdata';
import {BarChart,PieChart} from './charts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
function App() {
  //creating desired profile data object
// const usersobject=createusersdata();
// console.log(usersobject);
const [usersobject,setUserObject] = useState(()=>createusersdata());
const [constusersobject,setconstUserObject] = useState(()=>createusersdata());


//frequency of countries
let arrcountry=[]
for(let i in constusersobject){
  arrcountry.push(constusersobject[i].country);
}
let ncountry = arrcountry.length;
const countryobject=countFreq(arrcountry, ncountry);   
console.log("created country object",countryobject);

//frequency of carmakers
let arrcarmakers=[]
 for(let i in usersobject){
arrcarmakers.push(usersobject[i].carmaker);}
let ncarmakers = arrcarmakers.length;
let carmakersobject=countFreq(arrcarmakers, ncarmakers);   
console.log("created carmaker object",carmakersobject);

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
// arrcarmakers=filtercarmakers(constusersobject,5);
// let ncarmakers = arrcarmakers.length;
// let carmakersobject=countFreq(arrcarmakers, ncarmakers);   
// console.log("test",carmakersobject);

//frequency of carage

let arrcarage=[]
for(let i in usersobject){
  arrcarage.push(usersobject[i].carage);
}
let ncarage = arrcarage.length;
const carageobject=countFreq(arrcarage, ncarage);   
console.log("created carage object",carageobject);

const chartDatacarmakers= {
  labels: carmakersobject.map((data) => data.item),
  datasets: [
    {
      label: "Number of cars",
      data: carmakersobject.map((data) => data.count),
      backgroundColor: [
        "#f81212","#f84b12","#f88512",
        "#f8be12","#f8f812","#f0f80f",
        "#bef812","#85f812","#4bf812",
        "#12f812","#12f84b","#12f885","#12f8be",
        "#12f8f8","#12bef8","#1285f8","#124bf8",
        "#1212f8","#4b12f8","#8512f8","#be12f8",
        "#f812f8","#f812be","#f81285","#ff33cc",
        "#ff66ff","#ff99ff","#ffccff","#ffcccc",
        "#FFE4E1","#FFE4B5","#FFDEAD"
      ],
      borderColor: "black",
      borderWidth: 2
    }
  ]
};
const chartDatacarage= {
  labels: carageobject.map((data) => data.item),
  datasets: [
    {
      label: "Number of cars",
      data: carageobject.map((data) => data.count),
      backgroundColor: [
        "#f81212","#f84b12","#f88512",
        "#f8be12","#f8f812","#f0f80f",
        "#bef812","#85f812","#4bf812",
        "#12f812","#12f84b","#12f885","#12f8be",
        "#12f8f8","#12bef8","#1285f8","#124bf8",
        "#1212f8","#4b12f8","#8512f8"
      ],
      borderColor: "black",
      borderWidth: 2
    }
  ]
};
  return(
    <div className='app'>
        <div className='barcharts'>
          <BarChart countryobject={countryobject}/>
        </div>
        <div className='piecharts'>
          <PieChart Data={chartDatacarmakers} name="Number of Car models based on Car makers" />
          <PieChart Data={chartDatacarage} name="Number of Car models based on Car age" />
        </div>
         <section className='filter-section'><Tabledata setUserObject={setUserObject} usersobject={usersobject} constusersobject={constusersobject}/></section>
    </div>
  );
 }
export default App;
