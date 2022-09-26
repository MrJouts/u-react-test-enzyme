import React from "react"
import { shallow } from "enzyme"
import { findByTestAttr } from "../test/testUtils"

import Congrats from "./Congrats"

type Props = {
  success: Boolean
}

const defaultProps: Props = { success: true }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, "component-congrats")
  expect(component.length).toBe(1)
})

test('renders no text when `success`prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, "component-congrats")
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message wehn `success` porp is true', () => {
  const wrapper = setup({ success: true })
  const component = findByTestAttr(wrapper, "congrats-message")
  expect(component.text().length).not.toBe(0)
})