import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  const shallowWrapper = shallow(<App />);
  // const mountedWrapper = mount(<App />);
  console.log(shallowWrapper.debug());
  // console.log(mountedWrapper.debug());
  expect(shallowWrapper).toBeTruthy();
});
