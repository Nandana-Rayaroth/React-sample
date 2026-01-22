import React from "react";

type Props = {
    cities : string[],
    marks : number[]
}

function TypedArray({cities, marks} : Props){
    return (
      <div className="flex flex-row gap-10 justify-center">
        <div>
          <h2 className="font-bold text-2xl underline text-orange-500">Available Cities</h2>
          <ul>
            {cities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl underline text-lime-500">Marks</h2>
          <ul>
            {marks.map((item: number, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default TypedArray