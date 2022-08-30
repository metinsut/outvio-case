export interface CovidState {
  selectedCountry: string;
  activeChart: ChartType;
  deathsOrCases: DeathsOrCases;
  newOrTotal: NewOrTotal;
  totalDeathsOrTotalCases: TotalDeathsOrTotalCases;
  countryCountBarChart: number;
}

export type Country = {
  location: string;
  continent: string;
  data: Data;
  total_case: number;
  total_deaths: number;
  currentCountry: boolean;
};

export type Case = {
  date: string;
  new_cases: number;
  new_deaths: number;
  total_cases: number;
  total_deaths: number;
};

export type Data = Case[];

export type ResponseData = Record<string, Partial<Country>>;

export type ChartType = 'line' | 'bar';

export type DeathsOrCases = 'deaths' | 'cases';

export type NewOrTotal = 'new' | 'total';

export type TotalDeathsOrTotalCases = 'total_deaths' | 'total_cases';
