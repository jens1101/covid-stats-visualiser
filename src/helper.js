import { format, parseISO, startOfMonth, addDays, formatISO } from "date-fns";
import { SMA } from "trading-signals";
import { WINDOW_SIZE } from "./constants.js";

export function groupStatsByMonth(stats) {
  return stats.reduce((groupedCases, currentStat) => {
    const monthKey = format(
      startOfMonth(parseISO(currentStat.Date)),
      "MMMM yyyy"
    );

    groupedCases.set(
      monthKey,
      (groupedCases.get(monthKey) || 0) + currentStat.Cases
    );

    return groupedCases;
  }, new Map());
}

export function getStatsPrediction(stats) {
  const sma = new SMA(WINDOW_SIZE);
  stats.slice(-WINDOW_SIZE).forEach((stat) => sma.update(stat.Cases));

  return stats.map((stat) => {
    const cases = sma.getResult();
    sma.update(cases);

    return {
      Cases: cases.toNumber(),
      Date: formatISO(addDays(parseISO(stat.Date), stats.length)),
    };
  });
}
