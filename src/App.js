import './App.css';
import React from 'react';
import Tabledata from './table';
import {chartDatacountry,chartDatacarmakers,chartDatacarage} from './chartdata';
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
  return(
    <div className='app'>
        <div className='barcharts'>
          <BarChart Data={chartDatacountry} />
        </div>
        <div className='piecharts'>
          <PieChart Data={chartDatacarmakers} name="Number of Car models based on Car makers" />
          <PieChart Data={chartDatacarage} name="Number of Car models based on Car age" />
        </div>
         <section className='filter-section'><Tabledata /></section>
    </div>
  );
 }
export default App;
