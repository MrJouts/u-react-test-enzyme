import React from "react"
import { shallow } from "enzyme"
import { findByTestAttr } from "../test/testUtils"
import GuessedWords from "./GuessedWords"

const defaultProps = {
  GuessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 }
  ]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('check props', () => {

})