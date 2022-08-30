import React from 'react';
import { selectActiveChart } from '../../../store/covidSlice/selector';
import { ResponseData } from '../../../store/covidSlice/types';
import { useTypedSelector } from '../../../store/store';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';

interface Props {
  covidData: ResponseData;
}

export default function Charts({ covidData }: Props) {
  const activeChart = useTypedSelector(selectActiveChart);
  return (
    <div className="grid w-full h-[50vh]">
      {activeChart === 'line' ? (
        <LineChartComponent covidData={covidData} />
      ) : (
        <BarChartComponent covidData={covidData} />
      )}
    </div>
  );
}
