/**
 * @Author : Duanjl
 * @Date: 9/4/2018
 * @Last Modified by：Duanjl
 * @Last modified time： 9/4/2018
 * */
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './Home.less';

function getData(n) {
  const arr = [];
  let i;
  let a;
  let b;
  let c;
  let spike;
  for (i = 0; i < n; i += 1) {
    if (i % 100 === 0) {
      a = 2 * Math.random();
    }
    if (i % 1000 === 0) {
      b = 2 * Math.random();
    }
    if (i % 10000 === 0) {
      c = 2 * Math.random();
    }
    if (i % 50000 === 0) {
      spike = 10;
    } else {
      spike = 0;
    }
    arr.push([i, 2 * Math.sin(i / 100) + a + b + c + spike + Math.random()]);
  }
  return arr;
}

const options = {
  chart: {
    zoomType: 'x',
  },
  boost: {
    useGPUTranslations: true,
  },
  tooltip: {
    valueDecimals: 2,
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  title: {
    text: 'Nginx Status / m',
  },
  series: [
    {
      date: getData(1000),
      name: 'Active',
      lineWidth: 0.5,
    },
    {
      data: getData(1000),
      name: 'Waiting',
      lineWidth: 0.5,
    },
    {
      data: getData(1000),
      name: 'Reading',
      lineWidth: 0.5,
    },
    {
      date: getData(1000),
      name: 'Writing',
      lineWidth: 0.5,
    },
  ],
};

function Home() {
  console.log('highcharts-react-official');
  return (
    <div id="charts-container">
      <div
        id="chart1"
        style={{ gridRow: '1 / span 3', gridColumn: '1 / span 4' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart2"
        style={{ gridRow: '1 / span 3', gridColumn: '5 / span 6' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart3"
        style={{ gridRow: '4 / span 3', gridColumn: '1 / span 6' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart3"
        style={{ gridRow: '4 / span 3', gridColumn: '7 / span 4' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart3"
        style={{ gridRow: '8 / span 3', gridColumn: '1 / span 3' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart3"
        style={{ gridRow: '8 / span 3', gridColumn: '4 / span 3' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
      <div
        id="chart3"
        style={{ gridRow: '8 / span 3', gridColumn: '7 / span 3' }}
      >
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          redraw
          oneToOne
        />
      </div>
    </div>
  );
}
export default Home;
