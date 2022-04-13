import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


const TaskList = ({darkmode, setDarkmode}) => {

     const dispatch = useDispatch();
     const { task } = useSelector((store) => store.task);

    return (
        <div
            className=" flex justify-center h-auto  "
            id={darkmode ? "darktasklist" : "tasklist"}
        >
            <div
                className=" w-5/12  flex flex-col  -mt-8 mb-20 h-auto rounded-lg"
                id={darkmode ? "darktaskcards" :"taskcards"}
            >
                <div
                    className="border-b-2 border-gray-500 p-3 my-4  w-11/12  mx-auto flex justify-between items-center "
                    id="card"
                >
                    <input
                        type="checkbox"
                        className=" bg-green-300 cursor-pointer  "
                    />
                    <label id={darkmode ?"darklabel":"label"} >First Task</label>

                    <FontAwesomeIcon icon= {faX} />
                </div>
               
                <div id={darkmode ?"darkfooter" :"footer"} className=" w-full mx-auto rounded-b-lg h-10 text-gray-400  cursor-pointer flex align-middle p-2 justify-between">
                    <p>5 items left</p>
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                    <p>Clear Completed</p>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
