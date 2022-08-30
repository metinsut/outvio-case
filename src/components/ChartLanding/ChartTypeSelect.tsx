import React from 'react';
import { selectActiveChart } from '../../store/covidSlice/selector';
import { chartTypeUpdated } from '../../store/covidSlice/slice';
import { ChartType } from '../../store/covidSlice/types';
import { useTypedDispatch, useTypedSelector } from '../../store/store';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

function Button({ children, onClick, className, ...rest }: Props) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={
        'border-gray-300 border-solid border rounded-md text-slate-600 hover:bg-slate-300 py-1 ' +
        className
      }
    >
      {children}
    </button>
  );
}

export default function ChartTypeSelect() {
  const dispatch = useTypedDispatch();
  const activeChart = useTypedSelector(selectActiveChart);
  const handleChartType = (type: ChartType) => {
    dispatch(chartTypeUpdated(type));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        className={activeChart === 'line' ? 'bg-slate-200' : 'bg-slate-100'}
        onClick={() => handleChartType('line')}
      >
        Reported cases
      </Button>
      <Button
        className={activeChart === 'bar' ? 'bg-slate-200' : 'bg-slate-100'}
        onClick={() => handleChartType('bar')}
      >
        Ranked charts
      </Button>
    </div>
  );
}
