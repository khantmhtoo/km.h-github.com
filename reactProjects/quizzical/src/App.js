import React from "react";
import { nanoid } from "nanoid";
import Question from "./components/Question";

export default function App() {
  const [ques, setQues] = React.useState();

  //   React.useEffect(async () {
  //       const res = await fetch("https://opentdb.com/api.php?amount=5");
  //       const data = await res.json();
  //     });
  React.useEffect(() => {
    async function getQuiz() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json();
      setQues(data.results);
    }
    getQuiz();
  }, []);

  const allQues = ques.map((e) => <Question key={nanoid()} {...e} />);

  return (
    <main>
      {allQues}
      <button>Check Answer</button>
    </main>
  );
}
