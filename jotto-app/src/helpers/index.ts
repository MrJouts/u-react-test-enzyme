export function getLetterMatchCount(guessedWord: string, secretWord: string) {
  const secretLetters = secretWord.split("");
  const guessedLetters = new Set(guessedWord);
  return secretLetters.filter((letter) => guessedLetters.has(letter)).length;
}
