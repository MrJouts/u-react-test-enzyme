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

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
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

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const incrementButton = findTestAttr(wrapper, "increment-button");
    expect(incrementButton.length).toBe(1);
  });

  test("counter increments when button is clicked", () => {
    const wrapper = setup();

    const incrementButton = findTestAttr(wrapper, "increment-button");
    incrementButton.simulate("click");

    const count = findTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("Decrement", () => {
  test("rendes decrement button", () => {
    const wrapper = setup();

    const decrementButton = findTestAttr(wrapper, "decrement-button");
    expect(decrementButton.length).toBe(1);
  });

  test("clicking decrement button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();

    // click the increment button so that the counter is greater than 0
    const incrementButton = findTestAttr(wrapper, "increment-button");
    incrementButton.simulate("click");

    // find decrement button and click
    const decrementButton = findTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");

    // find display and test value
    const count = findTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
});

describe("Error when counter goes bewlow 0", () => {
  test("error does not show when not needed", () => {
    const wrapper = setup();
    const errorDiv = findTestAttr(wrapper, "error-message");
    expect(errorDiv.hasClass("hidden")).toBe(true);
  });

  describe("counter is 0 and decrement is clicked", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();

      const decrementButton = findTestAttr(wrapper, "decrement-button");
      decrementButton.simulate("click");
    });

    test("error shows", () => {
      const errorDiv = findTestAttr(wrapper, "error-message");
      expect(errorDiv.hasClass("hidden")).toBe(false);
    });

    test("counter still displays 0", () => {
      const count = findTestAttr(wrapper, "count").text();
      expect(count).toBe("0");
    });

    test("clicking increment clears the error", () => {
      const incrementButton = findTestAttr(wrapper, "increment-button");
      incrementButton.simulate("click");

      const errorDiv = findTestAttr(wrapper, "error-message");
      expect(errorDiv.hasClass("hidden")).toBe(true);
    });
  });
});
