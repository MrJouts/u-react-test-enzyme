import React from "react";
import { mount, ReactWrapper, ShallowWrapper } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add a value to the input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test("creates GuessedWords table with one row", () => {
    const guessedWOrdRows = findByTestAttr(wrapper, "guessed-row");
    expect(guessedWOrdRows).toHaveLength(1);
  });
});

describe("some letters guessed", () => {});

describe("guess secret word", () => {});
