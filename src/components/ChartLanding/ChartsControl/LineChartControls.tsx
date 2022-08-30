import React from 'react';
import {
  selectDeathsOrCases,
  selectNewOrTotal
} from '../../../store/covidSlice/selector';
import {
  deathsOrCasesUpdated,
  newOrTotalUpdated
} from '../../../store/covidSlice/slice';
import { DeathsOrCases, NewOrTotal } from '../../../store/covidSlice/types';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';

export default function LineChartControls() {
  const dispatch = useTypedDispatch();
  const deathsOrCases = useTypedSelector(selectDeathsOrCases);
  const newOrTotal = useTypedSelector(selectNewOrTotal);

  const handleDeathsOrCases = (val: DeathsOrCases) => {
    dispatch(deathsOrCasesUpdated(val));
  };

  const handleNewOrTotal = (val: NewOrTotal) => {
    dispatch(newOrTotalUpdated(val));
  };

  return (
    <div className="grid gap-8 grid-flow-col grid-cols-2">
      <fieldset className="grid justify-start border border-slate border-solid p-2">
        <legend className="text-slate-700 dark:text-slate-200">
          Death count or Confirmed cases
        </legend>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="death"
            name="death_cases"
            defaultValue="death"
            defaultChecked={deathsOrCases === 'deaths'}
            onChange={() => handleDeathsOrCases('deaths')}
          />
          <label
            htmlFor="death"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Death count
          </label>
        </div>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="cases"
            name="death_cases"
            defaultValue="cases"
            defaultChecked={deathsOrCases === 'cases'}
            onChange={() => handleDeathsOrCases('cases')}
          />
          <label
            htmlFor="cases"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Confirmed cases
          </label>
        </div>
      </fieldset>

      <fieldset className="grid justify-start border border-slate border-solid p-2">
        <legend className="text-slate-700 dark:text-slate-200">
          Daily new values or cumulative mode
        </legend>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="newVal"
            name="newVal_cumulative"
            defaultValue="new"
            defaultChecked={newOrTotal === 'new'}
            onChange={() => handleNewOrTotal('new')}
          />
          <label
            htmlFor="newVal"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Daily new values
          </label>
        </div>
        <div className="flex items-center cursor-pointer">
          <input
            type="radio"
            id="cumulative"
            name="newVal_cumulative"
            defaultValue="new"
            defaultChecked={newOrTotal === 'total'}
            onChange={() => handleNewOrTotal('total')}
          />
          <label
            htmlFor="cumulative"
            className="text-slate-600 ml-2 cursor-pointer dark:text-slate-200"
          >
            Cumulative mode (Total)
          </label>
        </div>
      </fieldset>
    </div>
  );
}
