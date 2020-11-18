import { getStatsPrediction, groupStatsByMonth } from "./helper.js";

/**
 *
 * @param {Object} params
 * @param params.stats
 * @param params.predictionLength
 * @param params.groupBy
 * @return {JSX.Element}
 * @constructor
 */
export function CountryCovidStats({
  stats = [],
  predictionLength = {
    months: 12,
  },
}) {
  const historicalStats = Array.from(groupStatsByMonth(stats)).map(
    ([month, cases]) => (
      <tr key={month}>
        <td>{month}</td>
        <td>{cases}</td>
      </tr>
    )
  );

  const predictionStats = Array.from(
    groupStatsByMonth(getStatsPrediction(stats))
  ).map(([month, cases]) => (
    <tr key={month}>
      <td>{month}</td>
      <td>{cases}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Number of Cases</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th colSpan={2}>Historic Stats</th>
        </tr>
        {historicalStats}
      </tbody>

      <tbody>
        <tr>
          <th colSpan={2}>Predicted Stats</th>
        </tr>
        {predictionStats}
      </tbody>
    </table>
  );
}
