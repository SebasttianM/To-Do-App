import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TaskList = ({darkmode, setDarkmode}) => {
    return (
        <div
            className="border-2 border-red-400 flex justify-center h-auto  "
            id="tasklist"
        >
            <div
                className="border-2 border-blue-700 w-5/12  flex flex-col  -mt-8 mb-20 h-auto rounded-lg"
                id="taskcards"
            >
                <div
                    className="border-b-2 border-gray-500 p-3 my-4  w-11/12  mx-auto flex justify-between items-center "
                    id="card"
                >
                    <input
                        type="checkbox"
                        className=" bg-green-300 cursor-pointer  "
                    />
                    <label className="">First Task</label>

                    <FontAwesomeIcon icon= {faX} />
                </div>
                <div
                    className="border-b-2 border-gray-500 p-3 my-4  w-11/12  mx-auto flex justify-between items-center "
                    id="card"
                >
                    <input
                        type="checkbox"
                        className=" bg-green-300 cursor-pointer  "
                    />
                    <label className="">First Task</label>

                    <FontAwesomeIcon icon= {faX} />
                </div>
                <div className="border-2 border-violet-400 w-full mx-auto rounded-b-lg h-10 text-gray-400  cursor-pointer flex align-middle p-2 justify-between">
                    <p className="hover:text-blue-600">5 items left</p>
                    <p className="hover:text-blue-600">All</p>
                    <p className="hover:text-blue-600">Active</p>
                    <p className="hover:text-blue-600">Completed</p>
                    <p className="hover:text-blue-600">Clear Completed</p>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
