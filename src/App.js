import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { routerPaths } from './routes';
import pilotsState from './atoms/pilots';

const App = () => {
  const [pilots, setPilots] = useRecoilState(pilotsState);

  useEffect(() => {
    async function fetchPilots() {
      const response = (await import('./resource/pilots.json')).default;
      setPilots(response);
    }
    if (pilots.length) return;
    fetchPilots();
  }, [pilots, setPilots]);

  if (!pilots.length) return <div />;

  return (
    <Router>
      <Switch>
        {routerPaths.map(({ Component, id, path }) => (
          <Route key={id} path={typeof path === 'function' ? path() : path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
