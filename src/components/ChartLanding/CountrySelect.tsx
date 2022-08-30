import React from 'react';
import Select from 'react-select';
import { useCovidData } from '../../hooks/useCovidData';
import {
  selectCountryOptions,
  selectSelectedCountry
} from '../../store/covidSlice/selector';
import { selectedCountryUpdated } from '../../store/covidSlice/slice';
import {
  RootState,
  useTypedDispatch,
  useTypedSelector
} from '../../store/store';

export default function SelectCountry() {
  const dispatch = useTypedDispatch();
  const { data: covidData } = useCovidData();

  const selectedCountry = useTypedSelector(selectSelectedCountry);
  const selectBoxOptions: any = useTypedSelector((state: RootState) =>
    selectCountryOptions(state, covidData)
  );

  const handleOnChange = (event: any) => {
    dispatch(selectedCountryUpdated(event.value));
  };
  const countryName =
    covidData && selectedCountry && covidData[selectedCountry].location;

  return (
    <Select
      placeholder={countryName}
      defaultValue={selectedCountry}
      onChange={handleOnChange}
      options={selectBoxOptions}
      menuPosition="fixed"
    />
  );
}
