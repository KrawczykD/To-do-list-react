import React from 'react';
import Task from './Task';
import './TaskList.css'

const TaskList = (props)=>{

    const list = [];
    const done = [];
    props.tasks.map(task=> list.push( task.active ? <Task key={task.id} handleClickDelete={props.handleClickDelete} handleClickDone={props.handleClickDone} task={task}/> : null))
    props.tasks.map(task=> done.push( !task.active ? <Task key={task.id} handleClickDelete={props.handleClickDelete} handleClickDone={props.handleClickDone} task={task}/> : null))


    return(
        <>
            <hr></hr>
            <div className="taskList">
                <h2>Tasks List</h2>
                {list}
            </div>

            <hr></hr>
            <div className="taskListFinished">
                <h2>Finished Tasks</h2>
                {done}
            </div>
        </>
    )
}

export default TaskList;