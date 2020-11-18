import { format, parseISO, startOfMonth } from "date-fns";

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
