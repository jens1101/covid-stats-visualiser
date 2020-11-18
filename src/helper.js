import {
  format,
  parseISO,
  startOfMonth,
  formatISO,
  add,
  eachDayOfInterval,
} from "date-fns";
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

export function getStatsPrediction(stats, predictionDuration) {
  if (stats.length < WINDOW_SIZE) {
    return [];
  }

  const sma = new SMA(WINDOW_SIZE);
  stats.slice(-WINDOW_SIZE).forEach((stat) => sma.update(stat.Cases));

  const start = add(parseISO(stats[stats.length - 1].Date), { days: 1 });
  const end = add(start, predictionDuration);

  const predictionDates = eachDayOfInterval({ start, end });

  return predictionDates.map((Date) => {
    const cases = sma.getResult();
    sma.update(cases);

    return {
      Cases: Math.floor(cases.toNumber()),
      Date: formatISO(Date),
    };
  });
}
