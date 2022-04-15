import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCompleted, clearCompleted, Delete, DeleteCompleted } from "../redux/actions/actionTodo";


const TaskList = ({darkmode, setDarkmode}) => {

     const dispatch = useDispatch();
     const { todo, completed } = useSelector((store) => store.todo);
    console.log(completed)

    const deleteTodo= (id)=>{
    
        console.log(id)
        dispatch(Delete(id))
    }

    const complete= ({target}, tarea)=>{
        console.log(target.checked)
        console.log(tarea)
        if(target.checked){
            dispatch(AddCompleted(tarea))
        }else{
            dispatch(DeleteCompleted(tarea.id))
        }      
    }

    const Clear= ()=>{
        dispatch(clearCompleted(
            completed.map(elemento=>dispatch(Delete(elemento.id)))
        ))
    }

    
    return (
        <div
            className=" flex justify-center h-auto  "
            id={darkmode ? "darktasklist" : "tasklist"}
        >
            <div
                className=" w-5/12  flex flex-col  -mt-8 mb-20 h-auto rounded-lg"
                id={darkmode ? "darktaskcards" :"taskcards"}
            >
                {todo.map(tarea=>(
                    <div key={tarea.id}
                    className="border-b-2 border-gray-500 p-3 my-4  w-11/12  mx-auto flex justify-between items-center "
                    id="card"
                >
                    <input
                        type="checkbox" onClick={(e)=>{complete(e,tarea)}}
                        className=" bg-green-300 cursor-pointer "
                    />
                    <label id={darkmode ?"darklabel":"label"} >{tarea.task}</label>

                    
                    <FontAwesomeIcon icon= {faX} onClick={()=>{deleteTodo(tarea.id)}}/>
                </div>
                ))}
               
                <div id={darkmode ?"darkfooter" :"footer"} className=" w-full mx-auto rounded-b-lg h-10 text-gray-400  cursor-pointer flex align-middle p-2 justify-between">
                    <p>5 items left</p>
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                    <p onClick={Clear}>Clear Completed</p>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
