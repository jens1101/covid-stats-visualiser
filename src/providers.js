export async function getCountryCovidStats(country, status, fromDate, toDate) {
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
