import React from 'react';
import {
  selectCountryCountBarChart,
  selectCountryCountOptions,
  selectTotalDeathsOrTotalCases
} from '../../../store/covidSlice/selector';
import {
  countryCountBarChartUpdated,
  totalDeathsOrTotalCasesUpdated
} from '../../../store/covidSlice/slice';
import {
  ResponseData,
  TotalDeathsOrTotalCases
} from '../../../store/covidSlice/types';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import Select from 'react-select';

interface Props {
  covidData: ResponseData;
}

export default function BarChartControls({ covidData }: Props) {
  const dispatch = useTypedDispatch();

  const totalDeathsOrTotalCases = useTypedSelector(
    selectTotalDeathsOrTotalCases
  );

  const countryCountBarChart = useTypedSelector(selectCountryCountBarChart);
  const countryCountBoxOptions: any = useTypedSelector((state) =>
    selectCountryCountOptions(state, covidData)
  );

  const handleTotalDeathsOrTotalCases = (val: TotalDeathsOrTotalCases) => {
    dispatch(totalDeathsOrTotalCasesUpdated(val));
  };

  const handleOnChange = (event: any) => {
    dispatch(countryCountBarChartUpdated(event.value));
  };

  return (
    <div className="grid gap-8 grid-flow-col grid-cols-2">
      <fieldset className="grid justify-start border border-slate border-solid p-2">
        <legend className="text-slate-700 dark:text-slate-200">
          Total Deaths Or Total Cases
        </legend>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="death"
            name="total"
            defaultChecked={totalDeathsOrTotalCases === 'total_deaths'}
            onChange={() => handleTotalDeathsOrTotalCases('total_deaths')}
          />
          <label
            htmlFor="death"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Total Deaths
          </label>
        </div>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="cases"
            name="total"
            defaultChecked={totalDeathsOrTotalCases === 'total_cases'}
            onChange={() => handleTotalDeathsOrTotalCases('total_cases')}
          />
          <label
            htmlFor="cases"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Total cases
          </label>
        </div>
      </fieldset>
      <fieldset className="grid border border-slate border-solid p-2">
        <legend className="text-slate-700 dark:text-slate-200">
          Select Count of Country
        </legend>
        <Select
          defaultValue={countryCountBarChart}
          placeholder={countryCountBarChart}
          onChange={handleOnChange}
          options={countryCountBoxOptions}
          menuPosition="fixed"
        />
      </fieldset>
    </div>
  );
}
