

import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Pilot from "./Pilot";

interface Props {
  deleter: (pilot_id: string) => void;
  pilots: Pilot[];
}

const sortFunction = {
  id: function (a, b) {
    return a.Id - b.Id;
  },
  callsign: function (a, b) {
    return (a.Callsign > b.Callsign) ? 1 : -1;
  },
  plane: function (a, b) {
    return (a.Plane > b.Plane) ? 1 : -1;
  },
}

const List: React.SFC<Props> = (props) => {
  const sort_order = useParams().sortOrder;
  const children: JSX.Element[] = props.pilots
    .slice() // clone array
    .sort(sortFunction[sort_order])
    .map((pilot: Pilot) => {
      const deleter = () => {
        props.deleter(String(pilot.Id));
      }
      return (
        <div key={pilot.Id}>
          <div>{pilot.Id}</div>
          <div>{pilot.Callsign}</div>
          <div>{pilot.Plane}</div>
          <div>{pilot.ImageUrl.substr(pilot.ImageUrl.lastIndexOf("/") + 1)}</div>
          <div>
            <Link to={`/detail/${pilot.Id}/`}>Detail</Link> |
            &nbsp;<a onClick={deleter}>Delete</a>
          </div>
        </div>
      );
    });
  return (
    <div>
      <div className="list">
        <div>
          <div>Id <Link to="./id">sort</Link></div>
          <div>Callsign <Link to="./callsign">sort</Link></div>
          <div>Plane <Link to="./plane">sort</Link></div>
          <div>Image</div>
        </div>
        {children}
      </div>
      <div>
        {props.pilots.length} items in the list
      </div>
    </div>
  );
}


export default List;
