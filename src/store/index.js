import { createStore } from "vuex";

import journeyConfig from "../assets/config/journeyConfig.json";

const locationsDict = journeyConfig.locations
  .reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})

const periods = journeyConfig.periods
  .map(period => Object.assign(period, {
    fromDate: period.from ? new Date(period.from) : null,
    toDate: period.to ? new Date(period.to) : new Date()
  }))

const periodRouteDict = periods
  .map((d, i) => ({
    id: d.id,
    fromLocation: locationsDict[i > 0 ? periods[i - 1].locationId : d.locationId],
    toLocation: locationsDict[d.locationId],
  }))
  .reduce((acc, cur) => Object.assign(acc, {
    [cur.id]: cur.fromLocation.id !== cur.toLocation.id ? cur : null
  }), {})

const state = {
  periods,
  periodIndex: 0,
};

const getPeriods = (state) => state.periods;
const getPeriod = (state) => state.periods[state.periodIndex];
const getLocation = (_, getters) => locationsDict[getters.getPeriod.locationId];

const getActivePeriods = (state) =>
  state.periods.filter((_, i) => i <= state.periodIndex);
const getActiveLocations = (_, getters) =>
  getters.getActivePeriods.map(d => locationsDict[d.locationId]);
const getActiveRoutes = (_, getters) =>
  getters.getActivePeriods.map(d => periodRouteDict[d.id]).filter(d => d !== null)

const canMoveOn = (state) => state.periodIndex < state.periods.length - 1;
const canMoveBack = (state) => state.periodIndex > 0;

const getters = {
  getPeriods,
  getPeriod,
  getLocation,
  getActivePeriods,
  getActiveLocations,
  getActiveRoutes,
  canMoveOn,
  canMoveBack,
};

const mutations = {
  moveOn: (state) => {
    if (canMoveOn(state)) {
      state.periodIndex += 1;
    }
  },
  moveBack: (state) => {
    if (canMoveBack(state)) {
      state.periodIndex -= 1;
    }
  },
};

export default createStore({
  state,
  getters,
  mutations,
});
