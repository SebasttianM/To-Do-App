import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useForm } from "../hooks/useForm";
import { Add } from "../redux/actions/actionTodo";


const Banner = ({ setDarkmode, darkmode }) => {

    const dispatch= useDispatch()

    const dark = () => {
        setDarkmode(!darkmode);
    };

    const [formValue, setValues, handleInputChange, reset] = useForm({
        task: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Add({
            ...formValue,
            id: uuid(),
        }))
    };

    return (
        <>
            <div
                className=" flex flex-col justify-center items-center "
                id={darkmode ? "bannerdark" : "banner"}
            >
                <div className="  flex  items-center justify-between w-5/12  mx-auto  h-24 mb-8 ">
                    <h1 className=" flex  items-center tracking-[0.30em] ml-2  w-56  text-5xl  align-bottom">
                        TODO
                    </h1>
                    <img
                        className="  w-10"
                        src={
                            darkmode
                                ? "https://res.cloudinary.com/svartblood/image/upload/v1649308511/To%20Do%20app/icon-sun_fvyabq.svg"
                                : "https://res.cloudinary.com/svartblood/image/upload/v1649308511/To%20Do%20app/icon-moon_zuruim.svg"
                        }
                        onClick={() => {
                            dark();
                        }}
                        alt=""
                    />
                </div>
                <div className=" flex mb-30 w-5/12 placeholder-slate-400 content-center ">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <input
                            className=" w-full h-16 p rounded-lg px-10"
                            type="text"
                            id={darkmode ? "darktask" : "task"}
                            name="task"
                            value={formValue.task}
                            required
                            placeholder="  Create a new todo..."
                            onChange={handleInputChange}
                        ></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Banner;
