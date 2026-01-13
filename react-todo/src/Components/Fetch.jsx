// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// // import TaskItem from "./TaskItem";

// function Fetch(){

//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
//         .then(data => data.json())
//         .then(result => setData(result))
//     }, [data])

//     return (
//       <div>
//         {data.map((item) => (
//           <div>
//             {/* <TaskItem value={item}/> */}
//             <h3>
//               {item.title}
//               <input key={item.id} type="checkbox" checked={item.completed} />
//             </h3>
//           </div>
//         ))}
//       </div>
//     );
// }

// export default Fetch