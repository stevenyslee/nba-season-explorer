import React from 'react';
import { Line } from 'react-chartjs-2';


const NBAChart = ({ data }) => {

  let team = 'Atlanta Hawks';
  let { both, home, visitor } = data[team];
  let labelsBoth = Object.keys(both);
  let valuesBoth = Object.values(both);

  let labelsHome = Object.keys(home);
  let valuesHome = Object.values(home);

  let labelsVisitor = Object.keys(visitor);
  let valuesVisitor = Object.keys(visitor);
  console.log(data[team]);
  const graphData = {
    labels: labelsBoth,
    datasets: [
      {
        label: 'both',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: valuesBoth
      },
    ]
  };
  return (
    <div>
      <h2>NBA Teams</h2>
      <Line data={graphData} />
    </div>
  );
};

export default NBAChart;
