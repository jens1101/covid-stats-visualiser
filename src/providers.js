export async function getCountryCovidStats(country, status) {
  const apiUrl = new URL(
    `/dayone/country/${country}/status/${status}`,
    "https://api.covid19api.com"
  );

  const response = await fetch(apiUrl.toString(), {
    method: "GET",
    redirect: "follow",
  });

  return response.json();
}
