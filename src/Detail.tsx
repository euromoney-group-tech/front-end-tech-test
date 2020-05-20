
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
  pilots: { [key: string]: Pilot };
}

const Detail: React.SFC<Props> = (props) => {
  const pilot = props.pilots[useParams().pilotId];
  console.log(`pilot: ${JSON.stringify(pilot)}`);

  return (
    <div className="detail">
      <div>Pilot Detail</div>
      <div>
        <div>
          <div>Id: {pilot.Id}</div>
          <div>Callsign: {pilot.Callsign}</div>
          <div>Plane: {pilot.Plane}</div>
        </div>
        <div>
          <img src={pilot.ImageUrl} alt={`Image of ${pilot.Callsign}`} />
        </div>
      </div>
      <div>
        <Link to="/list/id">Back</Link>
      </div>
    </div>
  );
}


export default Detail;
