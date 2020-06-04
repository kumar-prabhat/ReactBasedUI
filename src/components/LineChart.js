import React from 'react';
import Chart from 'chart.js';

// Data generation
const getRandomArray = (numItems) => {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for (var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random()),
    });
  }
  return data;
};

const getRandomDateArray = (numItems) => {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for (var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random()),
    });
  }
  return data;
};

const getData = () => {
  let data = [];

  data.push({
    title: 'Visits',
    data: getRandomDateArray(50),
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(20),
  });

  return data;
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
    };
    console.log(this.state.data);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'line',
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'week',
              },
              ticks: {
                fontColor: '#fff',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                fontColor: '#fff',
              },
            },
          ],
        },
      },
      data: {
        fontColor: '#fff',

        labels: this.state.data[0].data.map((d) => d.time),
        datasets: [
          {
            label: 'Visits',
            data: this.state.data[0].data.map((d) => d.value),
            fill: 'none',
            backgroundColor: '#fff',
            pointRadius: 2,
            borderColor: '#fff',
            borderWidth: 1,
            lineTension: 0,
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default LineChart;
