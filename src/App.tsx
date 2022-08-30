import React from 'react';
import Charts from './components/ChartLanding/Charts/Charts';
import ChartsControls from './components/ChartLanding/ChartsControl/ChartsControls';
import ChartTypeSelect from './components/ChartLanding/ChartTypeSelect';
import CountrySelect from './components/ChartLanding/CountrySelect';
import Header from './components/Header/Header';
import Loading from './components/Loading';
import { useCovidData } from './hooks/useCovidData';

function App() {
  const { data: covidData, isLoading } = useCovidData();
  return (
    <>
      <main className="grid p-4 pt-8 md:py-16 md:px-20 gap-4 w-screen h-screen content-start">
        <Header />
        <CountrySelect />
        <ChartTypeSelect />
        <Charts covidData={covidData} />
        <ChartsControls covidData={covidData} />
        <Loading isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
