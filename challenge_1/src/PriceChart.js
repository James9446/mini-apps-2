import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class PriceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Ethereum (ETH) price',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    };
  }
  componentWillMount(){
    let data = this.state.chartData;
    data.datasets[0].data = [10, 20, 30, 40, 50, 60];
    this.setState({
      chartData:  data
    });
  }
  render() {
    return (
      <div className='chart'>
        Price Chart
        <Line
          data={this.state.chartData}
          width={100}
          height={350}
          options={{
              maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default PriceChart;
