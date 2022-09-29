import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import Input from "./Input";

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
}

describe("render", () => {

  describe("success is true", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup(true);
    });

    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    })
  })

  describe("success is false", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup(false);
    });

    test("Input renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("input box shows", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("submit button shows", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    })
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