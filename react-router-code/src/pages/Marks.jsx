import { useOutletContext } from "react-router-dom"

export default function Marks() {
    const {marks = {}} = useOutletContext()
    console.log(marks)
    const terms = ['Term 1', 'Term 2', 'Term 3', 'Term 4', 'Term 5']
  return (
    <div className="grid grid-cols-6  marks">
        <span></span>
      {terms.map((item, index) => {
        return(
            <span key={index}>
                {item}
            </span>
        )
      })}
      {
        Object.keys(marks).map((subj) => {
            const values = marks[subj]
            const items = [subj,...values]
            return items.map((item, index) => {
                return <span key={index}>{item}</span>;
            })
        })
      }
    </div>
  )
}
