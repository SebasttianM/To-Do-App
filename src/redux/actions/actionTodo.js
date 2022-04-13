import { typesTodo } from "../types/Types";

//....................Add Todo.................//

export const Add=(todo)=>{
    console.log(todo)
    return{
        type: typesTodo.add,
        payload: todo,
    }
}

//...............List Todo..................//

export const List =(todo)=>{
    return{
        type: typesTodo.edit,
        payload: todo,
    }
}

//...............Edit Todo .....................//

export const Edit =(todoEdited)=>{
    return{
        type: typesTodo.edit,
        payload: todoEdited,
    }
}

//..............Delete Todo...............//

export const Delete = (done)=>{
    return{
        type: typesTodo.delete,
        payload: done,
    }

}