
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
import { Pilots } from "./Pilot";
import data from "./data/pilots.json";

interface Props {}


const orig_pilots: Pilots = {} as Pilots;
data.forEach(pilot => {
  orig_pilots[String(pilot.Id)] = pilot;
});


const App: React.SFC<Props> = (props) => {
  console.log(`inside App with ${data.length} data items`);
  const [ pilots, setPilots ] = React.useState<Pilots>(orig_pilots);

  const deleter = (pilot_id: string) => {
    // delete pilots[pilot_id];
    const new_pilots = {} as Pilots;
    Object.keys(pilots)
      .forEach((iter_pilot_id) => {
        if (iter_pilot_id !== pilot_id) {
          new_pilots[iter_pilot_id] = pilots[iter_pilot_id];
        }
      });
    setPilots(new_pilots);
  };

  const DetailRouting = () => {
    return <Detail pilot={pilots[useParams().pilotId]} />
  };

  return (
    <Router>
      <Switch>
        <Route path="/list/:sortOrder">
          <List pilots={pilots} deleter={deleter} />
        </Route>
        <Route path="/detail/:pilotId">
          <DetailRouting />
        </Route>
        <Route path="/">
          <Link to="/list/id">Enter</Link>
        </Route>
      </Switch>
    </Router>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
