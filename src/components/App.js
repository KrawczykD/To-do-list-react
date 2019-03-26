import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends Component {

  // state = {
  //   tasks : [
  //     { id: 0 ,
  //       text: "Pierwszy task do zrobienia" ,
  //       date: "2019-01-24",
  //       important : true,
  //       active : true,
  //       finishDate : null,
  //     },
  //     { id: 1 ,
  //       text: "Drugi task do zrobienia" ,
  //       date: "2017-02-19",
  //       important : true,
  //       active : true,
  //       finishDate : null,
  //     },
  //     { id: 2 ,
  //       text: "Trzeci task do zrobienia" ,
  //       date: "2011-10-10",
  //       important : true,
  //       active : true,
  //       finishDate : null,
  //     },
  //     { id: 3 ,
  //       text: "Czwarty task do zrobienia" ,
  //       date: "2004-05-30",
  //       important : true,
  //       active : true,
  //       finishDate : null,
  //     },
  //   ]
  // }

  state ={
    tasks:[],
  }

  // todayDate = ()=>{
  //   const date = new Date();
    
  //   const year = date.getFullYear();
  //   const month = date.getMonth();
  //   const day = date.getDate();


  //   const dateString = `${year}-${month+1}-${day}`;
  //   return dateString
  // }

  
  handleClickDone = (key) =>{

    // const date = new Date();
    
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDate();

    // const dateString = `${year}-${month+1}-${day}`;
    
    

    const task = [...this.state.tasks];
    task.forEach(task=>{
      if(task.id === key){
        task.active = false;
        task.finishDate = new Date().toLocaleString();
      }
    })

    
    this.setState({
      tasks : task,
    })
    
  }

  handleClickDelete = (key) =>{
    const task = [...this.state.tasks];
    const index = task.findIndex(item=> item.id === key);
    task.splice(index,1)

    this.setState({
      tasks : task,
    })
  }

  handleAdd = (addTaskState) =>{
    if(addTaskState.value.length > 0){
      const tasks = [...this.state.tasks];

    const newTask = 
    { id: tasks.length ,
      text: addTaskState.value ,
      date: addTaskState.date,
      important : addTaskState.check,
      active : true,
      finishDate : null,
    }

    tasks.push(newTask)

    this.setState({
      tasks: tasks,
    })
    } else {
      return 0;
    }

  }

  render() {
    return (
      <div className="App">
        <AddTask handleAdd={this.handleAdd}/>
        <TaskList handleClickDelete={this.handleClickDelete} handleClickDone={this.handleClickDone} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
