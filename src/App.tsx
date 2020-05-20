
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
import Pilot from "./Pilot";
import data from "./data/pilots.json";

interface Props {
  data: Pilot[];
  pilots: { [key: string]: Pilot };
}

const pilots = {};
data.forEach(pilot => {
  pilots[String(pilot.Id)] = pilot;
});

const deleter = (pilot_id: string) => {
  const index = data.reduce((prev: number, curr, index) => {
    return prev || (String(curr.Id) === pilot_id) ? index : null;
  }, null);
  if (typeof index === "number") {
    data.splice(index, 1);
  }
  delete pilots[pilot_id];
};

const App: React.SFC<Props> = (props) => {
  console.log(`inside App with ${data.length} data items`);

  return (
    <Router>
      <Switch>
        <Route path="/list/:sortOrder">
          <List pilots={props.data} deleter={deleter} />
        </Route>
        <Route path="/detail/:pilotId">
          <Detail pilots={props.pilots} />
        </Route>
        <Route path="/">
          <Link to="/list/id">Enter</Link>
        </Route>
      </Switch>
    </Router>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App data={data} pilots={pilots} />, target);
