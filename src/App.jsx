import React, { useState } from "react";
import Header from "./Components/Header";
import CreateTODO from "./Components/CreateTODO";
import ShowTodo from "./Components/ShowTodo";

const App = () => {
  // const [Title, setTitle] = useState("");
  // const [Desc, setDesc] = useState("");
  
  const [MainTask, setMainTask] = useState([]);

  const addTask = (title, desc) => {
    setMainTask([...MainTask, { title, desc }]);
  };
  // console.log(MainTask)



  
  return (
    <div>
      <Header />
      <CreateTODO addtask={addTask} />
      <ShowTodo task={MainTask} setTask = {setMainTask}/>
    </div>
  );
};

export default App;
