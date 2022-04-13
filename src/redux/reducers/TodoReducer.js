import { typesTodo } from "../types/Types";

const initialState= {
    todo:[]
}
export const TodoReducer= (state=initialState, action)=>{
    switch (action.type) {
        case typesTodo.add:
            return{
                todo: [...state.todo, action.payload]
            }  
        case typesTodo.list:
            return{
                todo: [...action.payload]
            }
        case typesTodo.edit:
            return{
                ...state
            }

        case typesTodo.delete:
            return{
                ...state,
                todo: state.todo.filter(todo=> todo.id !==action.payload)
            }
    
        default:
            return state
    }
}