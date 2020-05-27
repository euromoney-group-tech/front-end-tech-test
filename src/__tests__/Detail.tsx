
import * as React from "react";
import { shallow, configure } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import Detail from "../Detail";

configure({
  adapter: new Adapter()
});


describe("Render Detail Component", () => {
  it("renders a Pilot card", () => {
    const props = {
      pilot: {
        "Id": 3,
        "Callsign": "Goose",
        "Plane": "Tiger II",
        "ImageUrl": "https://vignette.wikia.nocookie.net/topgun/images/5/5e/Goose.jpg"
      }
    };
    const wrapper = shallow(<Detail {...props} />);
    expect(wrapper.childAt(1).childAt(0).childAt(0).text()).toEqual("Id: 3");
    expect(wrapper.childAt(1).childAt(0).childAt(1).text()).toEqual("Callsign: Goose");
    expect(wrapper.childAt(1).childAt(0).childAt(2).text()).toEqual("Plane: Tiger II");
  });
});
