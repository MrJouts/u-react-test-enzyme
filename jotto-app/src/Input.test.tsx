import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import Input from "./Input";

const setup = () => {
  return shallow(<Input />);
}

describe("Input component", () => {
  test("should render the component", () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.length).toBe(1)
  })
})

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  })
})