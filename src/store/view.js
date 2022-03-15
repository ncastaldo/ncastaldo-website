import { reactive } from "vue";

import viewConfig from "../config/viewConfig";

const { routes } = viewConfig;

const programmaticScroll = false;
const routeId = null;

const state = reactive({
  programmaticScroll,
  routeId,
});

const setProgrammaticScroll = (programmaticScroll) => {
  state.programmaticScroll = programmaticScroll;
};
const isProgrammaticScroll = () => state.programmaticScroll;

const routesDict = routes.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur,
  }),
  {}
);

const getRoute = routeId !== null ? routesDict[routeId] : null;

const getRoutes = () => routes;

export default {
  setProgrammaticScroll,
  isProgrammaticScroll,
  getRoute,
  getRoutes,
};
