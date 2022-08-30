import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  selectBarChartDataByFilter,
  selectTotalDeathsOrTotalCases
} from '../../../store/covidSlice/selector';
import { ResponseData } from '../../../store/covidSlice/types';
import { useTypedSelector } from '../../../store/store';

interface Props {
  covidData: ResponseData;
}

export default function BarChartComponent({ covidData }: Props) {
  const totalDeathOrTotalCases = useTypedSelector(
    selectTotalDeathsOrTotalCases
  );

  const data = useTypedSelector((state) =>
    selectBarChartDataByFilter(state, covidData)
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="location" />
        <YAxis dataKey={totalDeathOrTotalCases} />
        <Tooltip />
        <Legend />
        <Bar dataKey={totalDeathOrTotalCases} fill="#8884d8" label="asd">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.currentCountry ? '#b4b2db' : '#8884d8'}
              stroke={entry.currentCountry ? 'red' : '#b4b2db'}
              strokeWidth={entry.currentCountry ? 1 : 0}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
