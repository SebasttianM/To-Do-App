import React from "react";
import TaskList from "./TaskList";



const Banner = () => {
    return (
        <>
            <div
                className="border-2 border-red-400 flex justify-center items-center"
                id="banner"
            >
                <div className="flex flex-row justify-between" >
                    <h1 className="flex justify-between">TODO</h1>
                    <img
                        src="https://res.cloudinary.com/svartblood/image/upload/v1649308511/To%20Do%20app/icon-moon_zuruim.svg"
                        alt=""
                    />
                </div>
                <label for="task" className=""></label>
                <input
                    className="border-2 border-red-500 flex flex-col content-center; "
                    type="text"
                    id="task"
                    name="task"
                    required
                    minlength="4"
                    maxlength="20"
                    size="10"
                ></input>
            </div>
            <TaskList />
        </>
    );
};

export default Banner;
