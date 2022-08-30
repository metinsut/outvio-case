import React from 'react';
import { selectActiveChart } from '../../../store/covidSlice/selector';
import { ResponseData } from '../../../store/covidSlice/types';
import { useTypedSelector } from '../../../store/store';
import BarChartControls from './BarChartControls';
import LineChartControls from './LineChartControls';

interface Props {
  covidData: ResponseData;
}

export default function ChartsControls({ covidData }: Props) {
  const activeChart = useTypedSelector(selectActiveChart);

  return activeChart === 'line' ? (
    <LineChartControls />
  ) : (
    <BarChartControls covidData={covidData} />
  );
}
