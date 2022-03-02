import { computed, reactive } from "vue";

import journeyConfig from "../config/journeyConfig";

const periods = journeyConfig.periods.map((period) =>
  Object.assign(period, {
    fromDate: period.from ? new Date(period.from) : null,
    toDate: period.to ? new Date(period.to) : new Date(),
  })
);
periods.reverse();

const periodId = periods[0].id;
const programmaticScrolling = false;

const periodsDict = periods.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur,
  }),
  {}
);

const state = reactive({
  periodId,
  programmaticScrolling,
});

const setPeriodId = (periodId) => {
  state.periodId = periodId;
};

const setProgrammaticScrolling = (programmaticScrolling) => {
  state.programmaticScrolling = programmaticScrolling;
};

const scrollToPeriodId = (periodId) => {
  setPeriodId(periodId);
  setProgrammaticScrolling(true);
};

const getPeriod = () => periodsDict[state.periodId];
const getPeriods = () => periods;

const isProgrammaticScrolling = () => state.programmaticScrolling;

export default {
  setPeriodId,
  scrollToPeriodId,
  setProgrammaticScrolling,
  getPeriod,
  getPeriods,
  isProgrammaticScrolling,
};
