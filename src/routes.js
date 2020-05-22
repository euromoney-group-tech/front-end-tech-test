import Home from "./pages/Home";
import Pilot from "./pages/Pilot";

export const routerPaths = [{
  Component: Pilot,
  id: 'pilot',
  path: (id = ':id') => `/pilot/${id}`
}, {
  Component: Home,
  id: 'home',
  path: '/'
}];

export const routes = routerPaths.reduce((acc, { id, path }) => ({
  ...acc,
  [id]: path
}), {});
