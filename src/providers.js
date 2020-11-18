import { API_BASE } from "./constants.js";

export async function getCountryCovidStats(country, status) {
  const apiUrl = new URL(
    `/dayone/country/${country}/status/${status}`,
    API_BASE
  );

  const response = await fetch(apiUrl.toString(), {
    method: "GET",
    redirect: "follow",
  });

  return response.json();
}

export async function getWorldCovidStats() {
  const apiUrl = new URL("/world/total", API_BASE);

  const response = await fetch(apiUrl.toString(), {
    method: "GET",
    redirect: "follow",
  });

  return response.json();
}
