export function WorldCovidStats({ stats = [] }) {
  return (
    <table className={"table"}>
      <thead>
        <tr>
          <th>Total Confirmed</th>
          <th>Total Deaths</th>
          <th>Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{stats["TotalConfirmed"]}</td>
          <td>{stats["TotalDeaths"]}</td>
          <td>{stats["TotalRecovered"]}</td>
        </tr>
      </tbody>
    </table>
  );
}
