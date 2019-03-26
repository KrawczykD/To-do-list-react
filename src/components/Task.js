import React from 'react';
import './Task.css'

const Task =(props)=>{
    const { text , date , active , id , finishDate , important } = props.task;
    // const currentData = new Date();
    // console.log(currentData);

    if(active){
        return(
        <p>{important ? <strong style={{color:"red"}}>{text}</strong> : <strong>{text}</strong> } Finish till {date} <button onClick={()=>props.handleClickDone(id)}>Done</button><button onClick={()=>props.handleClickDelete(id)}>X</button></p>
        )
    } else if(!active){
        return(
        <p><strong>{text}</strong> (Finish till {date}) Finished {finishDate} <button onClick={()=>props.handleClickDelete(id)} >X</button></p>
        )
    }

    // return(
    //     <div>
    // {active ? <p><strong>{text}</strong> Finish till {date} <button onClick={()=>props.handleClickDone(id)}>Done</button><button onClick={()=>props.handleClickDelete(id)}>X</button></p> : <p><strong>{text}</strong> (Finish till {date}) Finished {finishDate} <button onClick={()=>props.handleClickDelete(id)} >X</button></p> }
    //     </div>

    // )
}

export default Task;