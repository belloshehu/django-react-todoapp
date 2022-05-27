import {React, useContext} from 'react';
import {Button} from 'reactstrap';
import axios from 'axios';
import {TodoSelectionContext} from './TodoSelection';


const url = 'http://127.0.0.1:8000/todo/api/'

const Todo = (props) =>{
    const {id, title, description, date_time, completed} = props.data;
    const {setToggle, setInstance} = useContext(TodoSelectionContext);
    // edit an instance of todo
    const Edit = () =>{
        let instance = {
            id:id,
            title: title,
            description: description,
            date_time: date_time,
            completed: completed
        }
        setInstance(instance);
        setToggle(true);
    }
    const Delete = () =>{
        console.log(id);
        axios
        .delete(`${url}${id}/`)
        .then((res)=>props.removeTodo(id))
        .catch((err)=>console.log(err));
    }
    return(
        <div 
            key={id} 
            className="bg-light shadow todo"
            >
            <h3 
                className="title text-primary" 
                style={completed? {textDecoration:'line-through'}:{}}>{title} 
            </h3>
            <small className="text-secondary mr-10">{date_time.slice(0,10)}</small> 
            <hr></hr>
            <p className="mb-10">{description}</p>
            <div className="todo-buttons">
                <Button className="btn-dark" onClick={()=>Edit()}>Edit</Button> 
                <Button className="btn-primary bg-primary" onClick={()=>Delete()}>Delete</Button>
            </div>
            
        </div>
    )
}

export default Todo;