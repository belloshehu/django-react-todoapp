import React, {
        useState, 
        useEffect, 
        useReducer,
        useContext,
} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {reducer} from './normalFormReducer';
import {TodoSelectionContext} from './TodoSelection';

import{
    Button,
    Form, 
    FormGroup, 
    Input, 
    Label,
    Alert
} from 'reactstrap';

const url = 'http://127.0.0.1:8000/todo/api/';

export const NormalForm = () =>{
    const {instance, setToggle, refreshTodos, updateList} = useContext(TodoSelectionContext);
    const title = instance && instance.title;
    const description = instance && instance.description;
    const date_time = instance && instance.date_time;
    const completed = instance && instance.completed;
    const todoObj = {
        title: title || "",
        description: description || "",
        date_time: date_time || "",
        completed: completed || false,
    }
    const defaultState = {
        alertMessage: ""
    }
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [todo, setTodo] = useState(todoObj);
    const [showAlert, setShowAlert] = useState(false);
    // saved changes in a todo instance
    useEffect(() => {
        setTimeout(()=>{
            console.log(state);
        }, 2000)
    }, []);
    const handleUpdateTodo =() =>{
        if(todo.title && todo.description){
            // update todo instance
            axios
            .put(`${url}${instance.id}/`, todo)
            .then((res)=>{
                //setTodos(res.data);
                refreshTodos();
                //setAlertMessage("Update successful");
                dispatch({type:"UPDATE_SUCCESS_MESSAGE", payload:"Update success"});
                setShowAlert(true);
                setTimeout(()=>{
                    setShowAlert(false)
                }, 2000);
            })
            .catch((err)=>{
                //setAlertMessage("Update failed");
                dispatch({type:"UPDATE_FAILURE_MESSAGE", payload:"Update success"});
                setShowAlert(true);
                setTimeout(()=>{
                    setShowAlert(false)
                }, 2000);
            })
        }
        else{
            alert("Incomplete form!");
        }
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = name === "completed"?e.target.checked:e.target.value ;
        console.log(value)
        setTodo({...todo, [name]:value});
    }
    const handleCreateTodo = () =>{
        if(todo.title && todo.description){
            // create to instance
            axios
            .post(url, todo)
            .then((res)=>{
                updateList(res.data);
                //setAlertMessage("Todo added");
                dispatch({type:"CREATE_TODO_SUCCESS", payload:"Todo created!"});
                setShowAlert(true);
                setTimeout(()=>{
                    setShowAlert(false)
                }, 2000);
            })
            .catch((err)=>{
                //setAlertMessage("Error occured");
                dispatch({type:"CREATE_TODO_FAILURE", payload:"Todo create failed!"});
                setShowAlert(true);
                setTimeout(()=>{
                    setShowAlert(false)
                }, 2000);
            })
        }
        else{
            dispatch({type:"INCOMPLETE_FORM", payload:"Incomplete form!"}); 
            setShowAlert(true);
            setTimeout(()=>{
                setShowAlert(false)
            }, 2000);
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(instance === null){
            // make post request
            handleCreateTodo();
        }
        else{
            //make put request
            setTodo({...todo, id:instance.id});
            handleUpdateTodo();
        }
    }
    return(
        <section className="row text-center normal-form">
            <div className="col-lg-12">
                {!showAlert?
                    (<h4>Edit / Add Todo</h4>):
                    (
                        <Alert>{state.alertMessage}</Alert>
                    )
                }
            </div>
            <div className="col-lg-12">
                <Form className="shadow" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title" className="h6 text-light">Title:</Label>
                        <Input 
                            id="title" 
                            type="text" 
                            name="title"
                            onChange={handleChange}
                            value={todo.title}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description" className="h6 text-light">Description:</Label>
                        <Input 
                            id="description" 
                            type="textarea"
                            name="description"
                            onChange={handleChange}
                            value={todo.description}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="completed" className="h6 text-light">
                            <Input 
                                id="completed" 
                                type="checkbox"
                                name="completed"
                                onChange={handleChange}
                                checked={todo.completed}
                                >  
                            </Input>
                                Completed?
                        </Label>
                        
                    </FormGroup>
                    <FormGroup className="todo-buttons">
                        <Button 
                            className="btn-info" 
                            type="submit">Submit</Button>
                        <Button className="btn-danger" onClick={()=>setToggle(false)}>Cancel</Button>
                    </FormGroup>
                </Form>
            </div>   
        </section>
    )
}