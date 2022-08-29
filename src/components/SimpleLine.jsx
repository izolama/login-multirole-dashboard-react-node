import React from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries,
} from 'react-jsx-highcharts';
import { getMe, LoginUser } from '../features/authSlice';

const plotOptions = {
  series: {
    pointStart: 2010,
  },
};

const SimpleLine = () => (
  <div className="app mt-4 ">
    <span></span>
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart />

        <Title>Solar Employment Growth by Sector, 2010-2016</Title>

        <Subtitle>Source: thesolarfoundation.com</Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>Number of employees</YAxis.Title>
          <LineSeries name="User Login" data={[]} />
          <LineSeries name="Manufacturing" data={[getMe]} />
          <LineSeries
            name="Sales & Distribution"
            data={[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]}
          />
          <LineSeries
            name="Project Development"
            data={[null, null, 7988, 12169, 15112, 22452, 34400, 34227]}
          />
          <LineSeries
            name="Other"
            data={[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]}
          />
        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  </div>
);

export default SimpleLine;
