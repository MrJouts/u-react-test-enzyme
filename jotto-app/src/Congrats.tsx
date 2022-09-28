import React from "react";

type Props = {
  success: Boolean,
};

const Congrats = ({ success }: Props) => {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
};

export default Congrats;
