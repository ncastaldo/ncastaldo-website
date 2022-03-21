import { reactive } from "vue";

import viewConfig from "../config/viewConfig";

const { routes } = viewConfig;

const routeId = routes[0].id;
const targetRouteId = routeId;

const state = reactive({
  routeId,
  targetRouteId,
});

const routesDict = routes.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur,
  }),
  {}
);

const setRouteId = (routeId) => {
  state.routeId = routeId;
};
const setTargetRouteId = (targetRouteId) => {
  state.targetRouteId = targetRouteId;
};

const getRoute = () => routesDict[state.routeId];
const getRoutes = () => routes;
const getTargetRouteId = () => state.targetRouteId;

export default {
  setRouteId,
  setTargetRouteId,
  getRoute,
  getRoutes,
  getTargetRouteId,
};
