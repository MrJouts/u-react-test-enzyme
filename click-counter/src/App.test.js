import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

// set uo enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const appComponent = findTestAttr(wrapper, "counter-display");
  expect(appComponent.length).toBe(1);
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const count = findTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setup();

  const button = findTestAttr(wrapper, "increment-button");

  button.simulate("Click");

  const count = findTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
