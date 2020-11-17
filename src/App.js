import { useEffect, useState } from "react";
import { Status } from "./constants";
import { CountryCovidStats } from "./CountryCovidStats";
import { getCountryCovidStats } from "./providers";

export function App() {
  const fromDate = "2020-03-01T00:00:00Z";
  const toDate = "2020-11-01T00:00:00Z";
  // TODO: use the `/countries` endpoint to get all available countries.
  const country = "south-africa";
  const status = Status.Confirmed;

  const [countryStats, setCountryStats] = useState([]);

  useEffect(() => {
    getCountryCovidStats(country, status, fromDate, toDate).then(
      setCountryStats
    );
  }, [country, status, fromDate, toDate]);

  return (
    <div>
      <h1>COVID-19 Stats</h1>

      <h2>Stats by Country</h2>
      <CountryCovidStats stats={countryStats} />
    </div>
  );
}
