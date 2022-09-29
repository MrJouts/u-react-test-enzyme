import React from 'react'

export type Props = {
  success: Boolean
  secretWord: string
}

const Input = ({ success, secretWord }: Props) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  return (
    <div data-test="component-input">
      {!success &&
        <form className="form-inline" data-test="form">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-2"
            type="text"
            placeholder="enter guess"
            value={currentGuess}
            onChange={(event) => setCurrentGuess(event.target.value)}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={(e) => {
              e.preventDefault()
              // TODO: update guessedWords
              // TODO: check againts secretWord and update success global state
              setCurrentGuess("")
            }}
          >
            Submit
          </button>
        </form>
      }

    </div>
  )
}

export default Input