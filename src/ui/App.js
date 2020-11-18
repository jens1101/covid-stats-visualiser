import { useEffect, useState } from "react";
import { STATUS } from "common/constants";
import { CountryCovidStats } from "ui/CountryCovidStats";
import { getCountryCovidStats, getWorldCovidStats } from "common/providers";
import { WorldCovidStats } from "ui/WorldCovidStats";

export function App() {
  const country = "south-africa";
  const status = STATUS.CONFIRMED;

  const [countryStats, setCountryStats] = useState([]);
  const [worldStats, setWorldStats] = useState([]);

  useEffect(() => {
    getCountryCovidStats(country, status).then(setCountryStats);
  }, [country, status]);

  useEffect(() => {
    getWorldCovidStats().then(setWorldStats);
  }, []);

  return (
    <div className={"container"}>
      <h1>COVID-19 Stats</h1>

      <h2>World Stats</h2>
      <WorldCovidStats stats={worldStats} />

      <h2>South African Stats</h2>
      <CountryCovidStats stats={countryStats} />
    </div>
  );
}
