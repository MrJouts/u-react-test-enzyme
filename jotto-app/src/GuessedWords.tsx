import React from 'react'

type GuessedWord = {
  guessedWord: string;
  letterMatchCount: number
}

type Props = {
  guessedWords: GuessedWord[]
}

const GuessedWords = (props: Props) => {
  const { guessedWords } = props
  return (
    <div data-test="component-guessed-words">
      {guessedWords?.length &&
        <div data-test="guess-instructions">Try to guess the word</div>
      }
    </div>
  )
}

export default GuessedWords