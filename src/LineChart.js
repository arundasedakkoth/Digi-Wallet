// import React from 'react';
// import {Line} from 'react-chartjs-2';
import graph from './components/line-graph.jpg';

const LineChart = () => {
   return (
       <div className="savingschart mx-3" id = "savingschart">
           <img src={graph} alt="Graph " width="500" height="600"></img>
           {/* <Line
               data = {{
                   labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
               }}
               width = {100}
               height = {50}
           /> */}
       </div>
   )
}

 export default LineChart;