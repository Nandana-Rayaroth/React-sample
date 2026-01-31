import { useOutletContext } from "react-router-dom";

export default function Remarks() {
  const { remarks = [] } = useOutletContext();
  return (
    <div className="remarks">
      {remarks.map((items) => {
        return <div>{items}</div>;
      })}
    </div>
  );
}
