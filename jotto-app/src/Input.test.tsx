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