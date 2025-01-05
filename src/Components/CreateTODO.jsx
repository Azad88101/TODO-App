import React, { useState } from "react";
import { use } from "react";
import ShowTodo from "./ShowTodo";

const CreateTODO = ({ addtask }) => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  //   const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    addtask(Title, Desc);
    // console.log(MainTask);

    e.preventDefault();
    setTitle("");
    setDesc("");
  };

  return (
    <div className=" p-6 bg-gray-100 rounded-md shadow-lg">
      <form
        onSubmit={submitHandler}
        className="max-w-[1080px] mx-auto  flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        {/* Title Input */}
        <input required
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter Title"
          className="flex-1 bg-white text-gray-800 h-12 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
        />

        

        {/* Description Input */}
        <input required
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Enter Description"
          className="flex-1 bg-white text-gray-800 h-12 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2 rounded-md shadow transition-all"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default CreateTODO;
