import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  ChartType,
  CovidState,
  DeathsOrCases,
  NewOrTotal,
  TotalDeathsOrTotalCases
} from './types';

const initialState: CovidState = {
  selectedCountry: 'OWID_WRL',
  activeChart: 'line',
  deathsOrCases: 'deaths',
  newOrTotal: 'new',
  totalDeathsOrTotalCases: 'total_deaths',
  countryCountBarChart: 10
};

export const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    selectedCountryUpdated: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload;
    },
    chartTypeUpdated: (state, action: PayloadAction<ChartType>) => {
      state.activeChart = action.payload;
    },
    deathsOrCasesUpdated: (state, action: PayloadAction<DeathsOrCases>) => {
      state.deathsOrCases = action.payload;
    },
    newOrTotalUpdated: (state, action: PayloadAction<NewOrTotal>) => {
      state.newOrTotal = action.payload;
    },
    countryCountBarChartUpdated: (state, action: PayloadAction<number>) => {
      state.countryCountBarChart = action.payload;
    },
    totalDeathsOrTotalCasesUpdated: (
      state,
      action: PayloadAction<TotalDeathsOrTotalCases>
    ) => {
      state.totalDeathsOrTotalCases = action.payload;
    }
  }
});

export const {
  selectedCountryUpdated,
  chartTypeUpdated,
  deathsOrCasesUpdated,
  newOrTotalUpdated,
  totalDeathsOrTotalCasesUpdated,
  countryCountBarChartUpdated
} = covidSlice.actions;

export default covidSlice.reducer;
