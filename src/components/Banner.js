import React from "react";

const Banner = () => {
    return (
        <div className="w-full ">
            <div>
                <img
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649308511/To%20Do%20app/bg-desktop-light_lnihe9.jpg"
                    alt=""
                />
                <label for="task" className="border-2 border-red-400">Write your tasks</label>
                <input className="border-2 border-blue-500"
                    type="text"
                    id="task"
                    name="task"
                    required
                    minlength="4"
                    maxlength="20"
                    size="10"
                ></input>
            </div>
        </div>
    );
};

export default Banner;
