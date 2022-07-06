import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dieState, setStateDie] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dieState.every((e) => e.isHeld);
    // Creates a pseudo value -- Think from the aspect of the game
    const firstValue = dieState[5].value;
    // Checks if the firstValue that is set would equal to every others
    const allSameValue = dieState.every((e) => e.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dieState]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const listOfDie = [];
    for (let i = 0; i < 10; i++) {
      listOfDie.push(generateNewDie());
    }
    return listOfDie;
  }

  function rollDie() {
    console.log(roll);
    if (!tenzies) {
      setStateDie((prevState) =>
        prevState.map((e) => {
          return e.isHeld ? e : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setStateDie(allNewDice());
    }
  }

  function holdDice(id) {
    setStateDie((prevState) =>
      prevState.map((e) => {
        return e.id === id ? { ...e, isHeld: !e.isHeld } : e;
      })
    );
  }

  const newSetofDie = dieState.map((e) => (
    <Die
      key={e.id}
      value={e.value}
      isHeld={e.isHeld}
      holdDice={() => holdDice(e.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="subtitle">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die__container">{newSetofDie}</div>
      <button className="roll__btn" onClick={rollDie}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
