import {Bar} from 'react-chartjs-2';
import {countryobject,carmakersobject,carageobject} from './createdataobj';
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
  
  export {chartDatacountry,chartDatacarmakers,chartDatacarage}