import { useState } from "react";
import Card from "./Components/Card";

function App() {
  type obj = {
    id: number,
    question : string,
    answer: string
  }
  const questions : obj[] = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const handleOnClick = (id : number) =>{
    setSelectedId(selectedId !== id ? id : null)
  }
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-6">
      {questions.map((item) => (
        <Card question={item.question} id={item.id} answer={item.answer} key={item.id} handleOnClick={handleOnClick} selectedId={selectedId}/>
      ))}
    </div>
  )
}

export default App
