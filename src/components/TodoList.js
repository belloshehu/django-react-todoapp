import {React, useContext} from 'react';
import Todo from './Todo';
import '../index.css';
import {TodoSelectionContext} from './TodoSelection';


const TodoList = () =>{
    //const [todoItems, setTodoItems] = useState(todos);
    const {todos, setToggle, setInstance, setTodos} = useContext(TodoSelectionContext);
    const removeTodo =(id) =>{
        setTodos(()=>{
                    return todos.filter((todo)=>todo.id !==id
                )
            }
        );
    }
  
    return (
        <div className="text-center todolist">
            {   
                todos.map((todo)=>{
                    return (
                        <Todo 
                            data={todo} 
                            setToggle={setToggle} 
                            setInstance={setInstance} 
                            removeTodo={removeTodo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;