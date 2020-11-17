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
  groupBy = "month",
}) {
  console.log(stats);
  return <table></table>;
}
