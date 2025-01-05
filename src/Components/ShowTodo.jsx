// import React from "react";

// const ShowTodo = ({ task }) => {
//   // console.log(task)

//   return (
//     <div className=" w-full bg-red-800 py-4 px-5 text-white">
//       {
//         task.length===0 ?( <h1 className="max-[1080px] mx-auto"> no task availabe</h1>:   task.map((e) => {
//             return (
//               <div className="">
//                 <h1>{e.title}</h1>
//                 <h1>{e.desc}</h1>
//               </div>
//             );
//           });;)
//       }
//     </div>
//   );
// };

// export default ShowTodo;

// import React from "react";

// const ShowTodo = ({ task }) => {
//   console.log(task);

//   return (
//     <div className="w-full bg-red-800 py-4 px-5 text-white">
//       <h1>heleoeoe</h1>

//     </div>
//   );
// };

// export default ShowTodo;

import React, { useState } from "react";

// const ShowTodo = ({ task }) => {
//   console.log(task.length);

//   // const showData=()=>{

//   // }
//   let render = task.map((t,i) => {
//     return (
//       <div key={i} className=" flex items-center justify-around max-w-[1080px]">
//         <h4>{t.title}</h4>
//         <h4>{t.desc}</h4>
//         <button className="bg-green-500 px-3 py-2 rounded-md">Delete</button>
//       </div>
//     );
//   });
//   return (
//     <div className="w-full bg-red-800 py-4 px-5 text-white">
//       {/* <h1>NO Task Available</h1> */}
//       {/* {render} */}
//       <div className=" flex justify-around align-middle items-center text-yellow-400"
//       >
//         <h3>Tittle</h3>
//         <h3>Description</h3>
//         <h3></h3>
//       </div>

//       {task.lenght <=0 ? <h1>No task avilable</h1> : render}
//     </div>
//   );
// };

// export default ShowTodo;

const ShowTodo = ({ task, setTask }) => {
  // Debugging to check task length
  //   console.log(task.length);
  const [completedTasks, setCompletedTasks] = useState([]); 
  

  const deleteHandler = (i) => {
    // console.log(i)
    let copy = [...task];
    copy.splice(i, 1);
    setTask(copy);
    setCompletedTasks(completedTasks.filter((index) => index !== i));
  };

  let green = false;

  const completeHandler = (i) => {
    if (!completedTasks.includes(i)) {
      setCompletedTasks([...completedTasks, i]); // Add index to completedTasks
    }
  };

  // Render task list
  let render = task.map((t, i) => {
    const isCompleted = completedTasks.includes(i);
    return (
      <div
        key={i}
        className="flex items-center justify-between bg-gray-700 max-w-[1080px] mx-auto text-white px-4 py-3 rounded-md my-2  "
      >
        <h4 className="w-1/3 font-bold text-lg">{t.title}</h4>
        <h4 className="w-1/3">{t.desc}</h4>
        <button
          onClick={() => {
            deleteHandler(i);
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>

        <button
          onClick={() => completeHandler(i)}
          className={`px-4 py-2 rounded-md ${
            isCompleted
              ? "bg-green-500 text-black"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isCompleted ? "Completed" : "Complete"}
        </button>
      </div>
    );
  });

  return (
    <div className="w-full bg-gray-800 py-6 px-4 h-full overflow-y-scroll scrollbar-hide max-h-[550px] ">
      {/* Header Row */}
      <div className="flex justify-between items-center bg-gray-900 text-yellow-300 px-4 py-2 rounded-t-md  max-w-[1080px] mx-auto ">
        <h3 className="w-1/3 text-lg font-semibold">Title</h3>
        <h3 className="w-1/3 text-lg font-semibold">Description</h3>
        <h3 className="w-1/3 text-lg font-semibold">Action</h3>
      </div>

      {/* Render tasks or show a message */}
      {task.length <= 0 ? (
        <h1 className="text-center text-yellow-300 mt-4">No t asks available</h1>
      ) : (
        <div className="bg-gray-700 p-4 rounded-b-md">{render}</div>
      )}
    </div>
  );
};

export default ShowTodo;
