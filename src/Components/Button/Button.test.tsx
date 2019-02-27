import * as React from "react";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Button from "../Button";

it("swallow test", () => {
  const test = shallow(<Button title="dd" />);
  expect(test.text()).toEqual("d");
});

it("snapshot test", () => {
  const tree = renderer.create(<Button title="ddd" />).toJSON();
  expect(tree).toMatchSnapshot();
});
