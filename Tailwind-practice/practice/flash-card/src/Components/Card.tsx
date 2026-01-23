
type Props = {
  question: string;
  id: number;
  answer: string;
  handleOnClick: (id: number) => void;
  selectedId : number | null;
};

export default function Card({ question, id, answer, handleOnClick, selectedId }: Props) {
  return (
    <div
      onClick={() => handleOnClick(id)}
      className={`flex p-6  items-center text-center justify-center h-60 rounded-xl shadow-[2px_2px_10px_black] ${selectedId == id && "bg-red-400" }`}
    >
      <h3 className="font-semibold">{selectedId === id ? answer : question}</h3>
    </div>
  );
}
