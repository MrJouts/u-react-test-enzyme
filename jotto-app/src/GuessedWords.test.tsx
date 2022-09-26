import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { findByTestAttr } from "../test/testUtils"
import GuessedWords from "./GuessedWords"

type GuessedWord = {
  guessedWord: string;
  letterMatchCount: number
}

type Props = {
  guessedWords: GuessedWord[]
}

const defaultProps: Props = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 }
  ]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })

  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions")
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  let wrapper: ShallowWrapper
  const guessedWords: GuessedWord[] = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ]

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words")
    expect(component.length).toBe(1)
  })

  test("renders 'guessed words' section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1)
  })

  test("correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word")
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  })
})