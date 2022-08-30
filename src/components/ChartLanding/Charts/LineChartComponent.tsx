import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {
  selectLineChartDataByFilter,
  selectDeathsOrCases,
  selectNewOrTotal
} from '../../../store/covidSlice/selector';
import { ResponseData } from '../../../store/covidSlice/types';
import { useTypedSelector } from '../../../store/store';

interface Props {
  covidData: ResponseData;
}

export default function LineChartComponent({ covidData }: Props) {
  const deathsOrCases = useTypedSelector(selectDeathsOrCases);
  const newOrTotal = useTypedSelector(selectNewOrTotal);

  const data = useTypedSelector((state) =>
    selectLineChartDataByFilter(state, covidData)
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 40
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" angle={23} />
        <YAxis dataKey={newOrTotal + '_' + deathsOrCases} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={newOrTotal + '_' + deathsOrCases}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
