import { reactive } from "vue";
import view from "../store/view";

import journeyConfig from "../config/journeyConfig";

const { setProgrammaticScroll } = view;

const periods = journeyConfig.periods.map((period) =>
  Object.assign(period, {
    fromDate: period.from ? new Date(period.from) : null,
    toDate: period.to ? new Date(period.to) : new Date(),
  })
);
periods.reverse();

const periodId = periods[0].id;

const periodsDict = periods.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur,
  }),
  {}
);

const state = reactive({
  periodId,
});

const setPeriodId = (periodId) => {
  state.periodId = periodId;
};

const scrollToPeriodId = (periodId) => {
  setPeriodId(periodId);
  setProgrammaticScroll(true);
};

const getPeriod = () => periodsDict[state.periodId];
const getPeriods = () => periods;

export default {
  setPeriodId,
  scrollToPeriodId,
  getPeriod,
  getPeriods,
};
