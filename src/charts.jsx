
import { Pie } from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
//import {chartDatacountry} from './chartdata';

function BarChart({countryobject}){
  
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
    export {BarChart,PieChart};