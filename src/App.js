import { useEffect, useState } from "react";
import { STATUS } from "./constants";
import { CountryCovidStats } from "./CountryCovidStats";
import { getCountryCovidStats } from "./providers";

export function App() {
  // TODO: use the `/countries` endpoint to get all available countries.
  const country = "south-africa";
  const status = STATUS.CONFIRMED;

  const [countryStats, setCountryStats] = useState([]);

  useEffect(() => {
    getCountryCovidStats(country, status).then(setCountryStats);
  }, [country, status]);

  return (
    <div>
      <h1>COVID-19 Stats</h1>

      <h2>Stats by Country</h2>
      <CountryCovidStats stats={countryStats} />
    </div>
  );
}
