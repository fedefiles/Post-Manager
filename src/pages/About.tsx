import React, { useEffect, FC, ChangeEvent, useState} from 'react';
import { useParams } from 'react-router-dom';
import TodoTask from "./TodoTask";
import { ITask } from "./Interfaces";
import "./about.css";


type FormValues = {
  name: string;
  email: string;
  gender: string;
  status: string;

};


export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
   
     /*fetch('https://gorest.co.in/public/v2/users', {
        method: "GET",
        headers: {'Content-Type': 'application/json', "Autorization": "Bearer 6081dadd2b21f733643640375445fe6f54f66b41ed2559adc816f2164073da7a"},
        body: ({"name":"Freddy","email":"fredsetlo@gmail.com","gender":"female", "status":"active"}),
    })
        .then(response => response.json())
        .then(res => console.log(res))
           }*/
    ///console.log(JSON.stringify(info));

  
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(String(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Title"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Post content..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Create Post</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};




   
    


          
export default AboutPage;
