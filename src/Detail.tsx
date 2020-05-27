
import * as React from "react";
import { Link } from "react-router-dom";
import { Pilot } from "./Pilot";

interface Props {
  pilot: Pilot;
}

const Detail: React.SFC<Props> = (props) => {
  const pilot = props.pilot;
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
