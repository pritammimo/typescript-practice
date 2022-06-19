import React,{ChangeEvent, FC,useState} from 'react'
import './App.css'
import TodoTask from './Components/TodoTask';
import { ITask } from './interface';

const App :FC=()=> {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodoList] = useState<ITask[]>([]);
  const handleChange=(e:ChangeEvent<HTMLInputElement>):void=>{
    console.log("e",e.target.name);
    
   if(e.target.name =="task"){
   setTask(e.target.value)
   } else {
     setDeadline(parseInt(e.target.value))
   }
  }
  const addTask=():void =>{
    const newTask={task:task,deadline:deadline}
   setTodoList([...todolist,newTask])
  //  setTask("")
  //  setDeadline(0)
  }
  console.log("todo",todolist);
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todolist.filter((task) => {
        return task.task != taskNameToDelete;
      })
    );
  };
  return (
    <div className='App'>
     <div className="header">
       <div className='inputContainer'>
       <input type="text" placeholder='Task ..' 
       value={task}
       onChange={handleChange} name="task"/>
       <input type="number" 
       name="deadline" 
       value={deadline}
       placeholder='Deadline(in Days) ....' onChange={handleChange}/>
       </div>
       <button onClick={addTask}>Add Task</button>
     </div>

    <div className='todoList'>
    {todolist.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
    </div>
    </div>
  )
}

export default App
