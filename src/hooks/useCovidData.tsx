import { useQuery } from '@tanstack/react-query';

export const useCovidData = () => {
  return useQuery(['covidData'], () =>
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json').then(
      (res) => res.json()
    )
  );
};
