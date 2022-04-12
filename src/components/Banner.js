import React from "react";

const Banner = () => {
    return (
        <>
            <div
                className="border-2 border-red-400 flex flex-col justify-center items-center "
                id="banner"
            >
                <div className=" border-2 border-emerald-400 flex  items-center justify-between w-5/12  mx-auto  h-24 mb-8 ">
                    <h1 className="border-2 border-amber-400 flex  items-center tracking-[0.30em] ml-2  w-56  text-5xl  align-bottom">
                        TODO
                    </h1>
                    <img
                        className=" border-2 border-violet-400   w-10  "
                        src="https://res.cloudinary.com/svartblood/image/upload/v1649308511/To%20Do%20app/icon-moon_zuruim.svg"
                        alt=""
                    />
                </div>
                <div className=" border-2 border-blue-400 flex mb-30 w-5/12 placeholder-slate-400 content-center ">
                    
                    <input
                        className="border-2 border-red-500 w-full h-16 p rounded-lg"
                        type="text"
                        id="task"
                        name="task"
                        required
                        placeholder="  Create a new todo..."
                        minlength="4"
                        maxlength="20"
                        size="10"
                    ></input>
                </div>
            </div>
        </>
    );
};

export default Banner;
