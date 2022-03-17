import { reactive } from "vue";
import journeyConfig from "../config/journeyConfig";

const periods = journeyConfig.periods.map((period) =>
  Object.assign(period, {
    fromDate: period.from ? new Date(period.from) : null,
    toDate: period.to ? new Date(period.to) : new Date(),
  })
);
periods.reverse();

const periodId = periods[0].id;
const targetPeriodId = periodId;

const periodsDict = periods.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur,
  }),
  {}
);

const state = reactive({
  periodId,
  targetPeriodId,
});

const setPeriodId = (periodId) => {
  state.periodId = periodId;
};

const setTargetPeriodId = (targetPeriodId) => {
  state.targetPeriodId = targetPeriodId;
};

const getPeriod = () => periodsDict[state.periodId];
const getPeriods = () => periods;

const getTargetPeriodId = () => state.targetPeriodId;

export default {
  setPeriodId,
  setTargetPeriodId,
  getPeriod,
  getPeriods,
  getTargetPeriodId,
};
