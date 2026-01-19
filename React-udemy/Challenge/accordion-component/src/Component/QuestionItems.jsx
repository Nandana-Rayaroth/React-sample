import React from 'react'

export default function QuestionItems({ title, text, num, curOpen, onOpen}) {
    // const [IsOpen, SetIsOpen] = useState(false)

    // const handleOpen = () => {
    //     SetIsOpen((current) => !current)
    // }
    const IsOpen = num === curOpen
    function handleToggle(){
      onOpen(IsOpen ? null : num)
    }
  return (
    <div className={`questionContainer ${IsOpen ? "Open" : ""}`} onClick={handleToggle}>
      <h2 className="headContainer">
        <span className={`number ${IsOpen ? "numberActive" : ""}`}>{num < 9 ? `0${num + 1}` : `${num + 1}`}</span>
        <span className={`${IsOpen ? "numberActive" : ""}`}>{title}</span>
        <span className={`${IsOpen ? "numberActive" : ""}`}>{IsOpen ? "-" : "+"}</span>
      </h2>
      <p className="text">{IsOpen ? text : ""}</p>
    </div>
  );
}
