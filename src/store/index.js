import { createStore } from "vuex";

import journeyConfig from "../assets/config/journeyConfig.json";

// locations

const locations = journeyConfig.locations

const locationsDict = locations.reduce(
  (acc, cur) => Object.assign(acc, { [cur.id]: cur }),
  {}
);

// periods

const periods = journeyConfig.periods.map((period) =>
  Object.assign(period, {
    fromDate: period.from ? new Date(period.from) : null,
    toDate: period.to ? new Date(period.to) : new Date(),
  })
)
periods.reverse()

const periodId = periods[0].id

const periodsDict = periods.reduce((acc, cur) => ({
  ...acc,
  [cur.id]: cur
}), {});


const state = {
  periodId
};

const getPeriods = (state) => periods;
const getPeriod = (state) => periodsDict[state.periodId];

const getLocations = (state) => locations;
const getLocation = (_, getters) => locationsDict[getters.getPeriod.locationId];

const getters = {
  getPeriods,
  getPeriod,
  getLocations,
  getLocation,
};

const mutations = {
  setPeriodId: (state, periodId) => { state.periodId = periodId }
};

const actions = {
  setLocationId: ({ commit }, locationId) => {
    const period = periods.find(d => d.locationId === locationId)
    commit('setPeriodId', period.id)
  }
}

export default createStore({
  state,
  getters,
  mutations,
  actions
});
