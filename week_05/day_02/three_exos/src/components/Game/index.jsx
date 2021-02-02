import React from "react";

const Game = () => {
  const [lives, setLives] = React.useState(6);
  const [wordToGuess, setWord] = React.useState("");
  const [wordState, setWordState] = React.useState("");

  const decrementLife = (letter) => {
    setLives(lives - 1);
    document.getElementById(
      "result"
    ).innerHTML = `La lettre ${letter} n'existe pas dans le mot, tu perds une vie !`;
  };

  const getWord = () => {
    fetch(`https://random-word-api.herokuapp.com/word?number=1`)
      .then((response) => response.json())
      .then((response) => {
        setWord(response[0]);
        setWordState(
          response[0]
            .split("")
            .map((el) => (el = "_"))
            .join("")
        );
        setLives(6);
      });
  };

  const checkTry = () => {
    console.log(`//spoiler// word to guess is ${wordToGuess}`);
    const letter = document.getElementById("try").value;
    let newWordState = wordState.split("");

    if (wordToGuess.includes(letter)) {
      document.getElementById(
        "result"
      ).innerHTML = `La lettre ${letter} existe bien dans le mot, bien joué !`;

      wordToGuess.split("").forEach((l, index) => {
        if (l == letter) {
          newWordState[index] = letter;
          setWordState(newWordState.join(""));
        }
      });
    } else {
      decrementLife(letter);
    }

    document.getElementById("try").value = "";
  };

  React.useEffect(() => {
    if (lives === 0) {
      document.getElementById(
        "result"
      ).innerHTML = `Tu as perdu ! Le mot était ${wordToGuess}`;
      document.getElementById("word").innerHTML = wordToGuess;
    }
  }, [lives]);

  React.useEffect(() => {
    if (wordState === wordToGuess) {
      document.getElementById(
        "result"
      ).innerHTML = `Tu as gagné ! Le mot était bien ${wordToGuess}`;
    }
    document.getElementById("word").innerHTML = wordState;
  }, [wordState]);

  return (
    <div id="game">
      <p className="btn btn-primary" onClick={getWord}>
        REJOUER
      </p>
      <p>
        MOT A DEVINER :<span id="word"> {wordState} </span>( {wordState.length}{" "}
        lettres)
      </p>

      <form>
        <label>Try a letter: </label>
        <input maxLength="1" type="text" id="try" required />
        <p className="btn btn-warning" onClick={checkTry}>
          TRY
        </p>
        <p id="result"></p>
        <p>Tu as {lives} vies</p>
      </form>
    </div>
  );
};

export default Game;
