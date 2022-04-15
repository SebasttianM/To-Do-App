import { typesTodo } from "../types/Types";

const initialState= {
    todo:[],
    completed:[]
}
export const TodoReducer= (state=initialState, action)=>{
    switch (action.type) {
        case typesTodo.add:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };
        case typesTodo.list:
            return {
                todo: [...action.payload],
            };
        case typesTodo.edit:
            return {
                ...state,
            };

        case typesTodo.delete:
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id !== action.payload),
            };

        case typesTodo.addCompleted:
            return {
                ...state,
                completed: [...state.completed, action.payload],
            };

        case typesTodo.deleteCompleted:
            return {
                ...state,
                completed: state.completed.filter((con) => con.id !== action.payload),
            };

        case typesTodo.clearCompleted:
            return{
                ...state,
                completed: []
            }
        default:
            return state;
    }
}