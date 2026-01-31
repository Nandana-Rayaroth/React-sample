import { useOutletContext } from "react-router-dom"

export default function Sports() {
    const {sports = {}} = useOutletContext()
  return (
    <div className="sports">
      {Object.keys(sports).map((item) => {
        return (
          <div>
            <div>{item}</div>
            <div>
              {sports[item] > 0 ? "Position " + sports[item] : "Participated"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
