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
    data: getRandomArray(5),
  });

  return data;
};

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
    };
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
      },
      data: {
        labels: this.state.data[1].data.map((d) => d.label),
        datasets: [
          {
            data: this.state.data[1].data.map((d) => d.value),
            backgroundColor: ['#eee', '#ddd', '#ccc', '#bbb', '#aaa'],
          },
        ],
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}

export default DoughnutChart;
