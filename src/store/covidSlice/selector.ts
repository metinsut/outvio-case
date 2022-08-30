import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Country, ResponseData } from './types';

export const selectSelectedCountry = (state: RootState) =>
  state.covid.selectedCountry;

export const selectActiveChart = (state: RootState) => state.covid.activeChart;

export const selectNewOrTotal = (state: RootState) => state.covid.newOrTotal;

export const selectDeathsOrCases = (state: RootState) =>
  state.covid.deathsOrCases;

export const selectTotalDeathsOrTotalCases = (state: RootState) =>
  state.covid.totalDeathsOrTotalCases;

export const selectCountryCountBarChart = (state: RootState) =>
  state.covid.countryCountBarChart;

export const selectCountryOptions = createSelector(
  (state: RootState, covidData: ResponseData) => covidData,
  (covidData) => {
    return (
      covidData &&
      Object.entries(covidData).map((item) => ({
        value: item[0],
        label: item[1].location
      }))
    );
  }
);

export const selectCountryCountOptions = createSelector(
  (state: RootState, covidData: ResponseData) => covidData,
  (covidData) => {
    const count = Math.ceil(Object.keys(covidData).length / 10);
    const options = Array.from({ length: count }, (_, i) => (i + 1) * 10).map(
      (item) => ({
        value: item,
        label: item
      })
    );
    return options;
  }
);

export const selectLineChartDataByFilter = createSelector(
  [
    selectSelectedCountry,
    (state: RootState, covidData: ResponseData) => covidData
  ],
  (country, covidData) => {
    const data = covidData && covidData[country].data;
    return data;
  }
);

export const selectBarChartDataByFilter = createSelector(
  [
    selectSelectedCountry,
    selectCountryCountBarChart,
    (state: RootState, covidData: ResponseData) => covidData
  ],
  (country, countryCount, covidData) => {
    const data = Object.keys(covidData)
      .slice(0, countryCount)
      .reduce<Partial<Country>[]>((acc, item) => {
        const total_cases =
          covidData[item]?.data![covidData[item]?.data!.length - 1].total_cases;
        const total_deaths =
          covidData[item]?.data![covidData[item]?.data!.length - 1]
            .total_deaths;
        const newItem = {
          location: covidData[item].location,
          currentCountry: country === item,
          total_cases: total_cases,
          total_deaths: total_deaths
        };
        acc.push(newItem);
        return acc;
      }, []);

    return data;
  }
);
