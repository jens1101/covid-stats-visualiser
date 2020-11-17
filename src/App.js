import { useEffect, useState } from "react";
import { Status } from "./constants";
import { CovidStats } from "./CovidStats";

async function getCovidStats(country, status, fromDate, toDate) {
  const apiUrl = new URL(
    `/country/${country}/status/${status}`,
    "https://api.covid19api.com"
  );
  apiUrl.searchParams.set("from", fromDate);
  apiUrl.searchParams.set("to", toDate);

  const response = await fetch(apiUrl.toString(), {
    method: "GET",
    redirect: "follow",
  });

  return response.json();
}

export function App() {
  const fromDate = "2020-03-01T00:00:00Z";
  const toDate = "2020-11-01T00:00:00Z";
  // TODO: use the `/countries` endpoint to get all available countries.
  const country = "south-africa";
  const status = Status.Confirmed;

  const [stats, setStats] = useState([]);

  useEffect(() => {
    getCovidStats(country, status, fromDate, toDate).then(setStats);
  }, [country, status, fromDate, toDate]);

  return (
    <div>
      <h1>COVID-19 Stats</h1>
      <CovidStats stats={stats} />
    </div>
  );
}
