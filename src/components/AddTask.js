import React from 'react';
import './AddTask.css'

class AddTask extends React.Component{

    minDate = new Date().toISOString().slice(0,10);

    state ={
        value:"",
        check: false,
        date: new Date().toISOString().slice(0,10),
    }


    
    controlValue =(e)=>{
        if(e.target.name === "value"){
            this.setState({
                value:e.target.value,
            })
        } else if(e.target.name === "check"){
            this.setState({
                check:!this.state.check,
            })
        }
    }

    clearValue =()=>{
        
        this.setState({
            value:"",
            check: false,
            date: this.minDate,

        })
    }

    handleDatePick = (e)=>{
        this.setState({
            date:e.target.value,
        })
    }

    render(){
        
        return(
            
                <div className="form">
                    <form >
                            <input className="text" id="task" name="value" type="text" placeholder="task ..." value={this.state.value} onChange={this.controlValue}></input>
                            <label className="date" htmlFor="task">Finish date :</label>
                            <input className="date" type="date" id="till" onChange={this.handleDatePick} min={this.minDate} value={this.state.date} ></input>
                            <div className="important">
                                <label  htmlFor="important">Important</label>
                                <input  id="important" name="check" type="checkbox" checked={this.state.check} onChange={this.controlValue}></input>
                            </div>
                            <button className="addTask" onClick={(e)=>{ e.preventDefault(); this.props.handleAdd(this.state); this.clearValue() }}>Add task</button>
                        
                    </form>
                </div>
            
        )
    }
    
}

export default AddTask;