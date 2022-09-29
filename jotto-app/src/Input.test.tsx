import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
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
  let mockSetCurrentGuess = jest.fn();
  let wrapper: ShallowWrapper;
  let originalState: any

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  })

  afterEach(() => {
    React.useState = originalState;
  })

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "train" } });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() { } });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  })
})