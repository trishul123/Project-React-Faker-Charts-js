import './App.css';
import { faker } from '@faker-js/faker';
import React from 'react';
import {Bar} from 'react-chartjs-2';
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
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

//creating desired profile data object
function createusersdata(){
  let users = []
  for (let id=1; id <= 10000; id++) {
    let fullName = faker.name.fullName();
    let address = faker.address.streetAddress()+" "+
                  faker.address.cityName();
    let country= faker.address.country();
    let zipcode= faker.address.zipCodeByState();
    let email = faker.internet.email();
    let age = faker.datatype.number({min: 20, max: 65});
    let carmodel = faker.vehicle.model();
    let carmaker = faker.vehicle.manufacturer();
    let carage = faker.datatype.number({min: 1, max: 20});

    users.push({
        id: id,
        full_name: fullName,
        address: address,
        country: country,
        zipcode: zipcode,
        email: email,
        age:age,
        carmodel: carmodel,
        carmaker: carmaker,
        carage: carage
    });  
  }
  //console.log(users);
  return(users);
}
const usersobject=createusersdata();
console.log(usersobject);

//creating object with frequency of items
function countFreq(arr, n){ 
  let countobj=[];
  let visited = Array.from({length: n}, (_, i) => false);
  for (let i = 0; i < n; i++) {
      if (visited[i] === true)
          continue;
      let count = 1;
      for (let j = i + 1; j < n; j++) {
          if (arr[i] === arr[j]) {
              visited[j] = true;
              count++;
          }
      }
      countobj.push({
        item: arr[i],
        count: count,
    });
  }
  return countobj;
}
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


const chartDatacountry= {
  labels: countryobject.map((data) => data.item),

  datasets: [
    {
      label: "Number of users",
      data: countryobject.map((data) => data.count),
      backgroundColor: [
        "#34c0eb"
      ],
      borderColor: "black",
      borderWidth: 0
    }
  ]
};
const chartDatacarmakers= {
  labels: carmakersobject.map((data) => data.item),

  datasets: [
    {
      label: "Number of cars",
      data: carmakersobject.map((data) => data.count),
      backgroundColor: [
        "#f81212",
        "#f84b12",
        "#f88512",
        "#f8be12",
        "#f8f812",
        "#f0f80f",
        "#bef812",
        "#85f812",
        "#4bf812",
        "#12f812",
        "#12f84b",
        "#12f885",
        "#12f8be",
        "#12f8f8",
        "#12bef8",
        "#1285f8",
        "#124bf8",
        "#1212f8",
        "#4b12f8",
        "#8512f8",
        "#be12f8",
        "#f812f8",
        "#f812be",
        "#f81285",
        "#ff33cc",
        "#ff66ff",
        "#ff99ff",
        "#ffccff",
        "#ffcccc",
        "#FFE4E1",
        "#FFE4B5",
        "#FFDEAD"
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
        "#f81212",
        "#f84b12",
        "#f88512",
        "#f8be12",
        "#f8f812",
        "#f0f80f",
        "#bef812",
        "#85f812",
        "#4bf812",
        "#12f812",
        "#12f84b",
        "#12f885",
        "#12f8be",
        "#12f8f8",
        "#12bef8",
        "#1285f8",
        "#124bf8",
        "#1212f8",
        "#4b12f8",
        "#8512f8",
      ],
      borderColor: "black",
      borderWidth: 2
      
    }
  ]
};

function BarChart(){

return <div className='bar-chart-card'>
<h2>Country Vs Users</h2>
<div className="bar-chart-container">
  <Bar
  data={chartDatacountry}
  options={{
    plugins: {
      title: {
        display: true,
        text: "Bar Chart"
      },
      legend: {
        display: false
      }
    }
  }}
/></div>

</div>;
}
function PieChart(props){
    return  <div className='pie-chart-card'>
    <h2>{props.name}</h2>
    <div  className="pie-chart-container">
      <Pie
      data={props.Data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Piechart (Hover over chart to see labels)"
          }
          
        }
      }
      
    }
    /></div>
    
  </div>;
  
  
}
function Htmlbody(props){
  return(
    <tr>
      <td>{props.id}</td>
      <td>{props.carmodel}</td>
      <td>{props.carage}</td>
      <td>{props.age}</td>
      

    </tr>
  );
}
function insertvalues(info) {
  return (
    <Htmlbody 
    key={info.id} 
    id={info.id}
    carmodel={info.carmodel}
    carage={info.carage}
    age={info.age}
    
    >

    </Htmlbody>    
  );
}
function Tabledata(){
  const [myCar, setMyCar] = useState("");

  const handleChange = (event) => {
    setMyCar(parseInt(event.target.value));
    
  }
  return(
    <div>

        <select value={myCar} onChange={handleChange} label="Select User Age">
          <option value="0">Select Option</option>
          <option value="0">20 to 25</option>
          <option value="1">25 to 30</option>
          <option value="2">30 to 35</option>
          <option value="3">35 to 40</option>
          <option value="4">40 to 45</option>
          <option value="5">45 to 50</option>
          <option value="6">50 to 55</option>
          <option value="7">55 to 60</option>
          <option value="8">60 to 65</option>
        </select>
        <table>

          <thead>
            <tr>
              <th>id</th>
              <th>Car Model</th>
            <th>Car Age</th>
            <th>age</th>
            </tr> 
          </thead>
          <tbody>
          {usersobject.filter((item)=>{
            switch (myCar) {
              case 0:
                if(item.age>20&&item.age<=25)
                return item;
                break;
              case 1:
                if(item.age>25&&item.age<=30)
                return item;
                break;
              case 2:
                if(item.age>30&&item.age<=35)
                return item;
                break;
              case 3:
                if(item.age>35&&item.age<=40)
                return item;
                break;
              case 4:
                if(item.age>40&&item.age<=45)
                return item;
                break;
              case 5:
                if(item.age>45&&item.age<=50)
                return item;
                break;
              case 6:
                if(item.age>50&&item.age<=55)
                return item;
                break;
              case 7:
                if(item.age>55&&item.age<=60)
                return item;
                break;
              case 8:
                if(item.age>60&&item.age<=65)
                return item;
                break;  
              
              
            }
            
            
          })
          .map(insertvalues)}

          </tbody>
        </table>
    </div>
    );
  }

function App() {
  return(
    <div className='app'>
      
      
        <BarChart Data={chartDatacountry} />
        <div className='piecharts'>

        
        <PieChart Data={chartDatacarmakers} name="Number of Car models based on Car makers" 
           />
        <PieChart Data={chartDatacarage} name="Number of Car models based on Car age"
           />
         </div>
         <section className='filter-section'><Tabledata /></section>
         
    </div>
  );
 }
export default App;
