import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import{Alert, Nav, NavItem, NavLink} from 'reactstrap';
import axios from 'axios';
import TodoList from './TodoList';
import {NormalForm} from './TodoForm';
import Introduction from './Introduction';


export const TodoSelectionContext = React.createContext();
const url = 'http://127.0.0.1:8000/todo/api/';

const TodoSelection = () =>{
    const [todos, setTodos] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [instance, setInstance] = useState(null);
    const [selectedTodos, setSelectedTodos] = useState("All todos");
    const [activeAll, setActiveAll] = useState(false);
    const [activeCompleted, setActiveCompeleted] = useState(false);
    const [activeUncompleted, setActiveUncompleted] = useState(false);
    const [activeNew, setActiveNew] = useState(false);
    const addTodo = () =>{ 
        setToggle(true);
        setInstance(null);
        setActiveCompeleted(false);
        setActiveUncompleted(false);
        setActiveAll(false);
        setActiveNew(true);
    }

    const showCompleted = () =>{
        setActiveCompeleted(true);
        setActiveUncompleted(false);
        setActiveAll(false);
        setActiveNew(false);
         axios
        .get(url)
        .then((res)=>{
            setSelectedTodos("Completed todos")
            setTodos(()=>{
                return res.data.filter((todo) => todo.completed === true); 
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const showUnCompleted = () =>{
        setActiveCompeleted(false);
        setActiveUncompleted(true);
        setActiveAll(false);
        setActiveNew(false);
        axios
        .get(url)
        .then((res)=>{
            setSelectedTodos("Uncompleted todos")
            setTodos(()=>{
                return res.data.filter((todo) => todo.completed === false); 
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const getTodos = () => {
        setActiveCompeleted(false);
        setActiveUncompleted(false);
        setActiveAll(true);
        setActiveNew(false);
        axios
            .get(url)
            .then((res)=>{
                setTodos(res.data);
                setSelectedTodos("All todos")
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }
    const refreshTodos = () =>{
        axios
            .get(url)
            .then((res)=>{
                setTodos(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }
    const updateList = (newTodo) =>{
        setTodos([...todos, newTodo]);
    }
    useEffect(()=>{
        getTodos();
    }, []);
    return(
        <TodoSelectionContext.Provider 
            value={
                {
                    todos, 
                    setToggle,
                    setInstance, 
                    setTodos,
                    instance,
                    refreshTodos,
                    updateList,
                }
            }>
            <div className='row'>
                <Introduction />
            </div>
            <div className="row">
                <Nav tabs className='text-center'>
                    <NavItem>
                        <NavLink onClick={getTodos} active={activeAll}>All</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={showCompleted} active={activeCompleted}>Completed</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={showUnCompleted} active={activeUncompleted}>Uncompleted</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>addTodo()} active={activeNew}>New</NavLink>
                    </NavItem> 
                </Nav>
               {/* <div className="col-lg-12 todo-selection">
                    <Button className="btn-dark" onClick={getTodos}>All </Button>
                    <Button className="btn-dark" onClick={showCompleted}>Completed</Button>
                    <Button className="btn-dark" onClick={showUnCompleted}>Uncompleted</Button>
                    <Button className="btn-success" onClick={()=>addTodo()}>New</Button>
               </div> */}
            </div>
            <div className="row">
                <div className="row">
                   <div className="col-lg-12">
                        {todos.length === 0? <Alert>No todos</Alert>: <h6>{selectedTodos}({todos.length})</h6>}
                   </div>
                   <div className="col-lg-12">
                    <TodoList 
                            todos={todos} 
                            setToggle={setToggle} 
                            setInstance={setInstance} 
                            setTodos={setTodos}
                        />
                   </div>
                </div>
                <div className="row">
                    
                    {
                        toggle && <>
                                    <NormalForm 
                                        instance={instance} 
                                        setToggle={setToggle} 
                                        refreshTodos={refreshTodos}
                                        setTodos={setTodos}
                                        updateList={updateList}
                                    />
                                </>
                    }
                </div>
            </div>
        </TodoSelectionContext.Provider>
    )
}

export default TodoSelection;