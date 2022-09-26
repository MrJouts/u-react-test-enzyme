import React from 'react'

type GuessedWord = {
  guessedWord: string;
  letterMatchCount: number
}

type Props = {
  GuessedWords: GuessedWord[]
}

const GuessedWords = (porps: Props) => {
  return (
    <div>GuessedWords</div>
  )
}

export default GuessedWords