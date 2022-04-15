import { typesTodo } from "../types/Types";

//....................Add Todo.................//

export const Add=(todo)=>{
    console.log(todo)
    return{
        type: typesTodo.add,
        payload: todo,
    }
}
export const AddCompleted=(completed)=>{
    console.log(completed)
    return{
        type: typesTodo.addCompleted,
        payload: completed,
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

export const Delete = (id)=>{
    return{
        type: typesTodo.delete,
        payload: id,
    }
}
export const DeleteCompleted = (id)=>{
    return{
        type: typesTodo.deleteCompleted,
        payload: id,
    }

}

//................Clear Completed.............//

export const clearCompleted= ()=>{
    return{
        type:typesTodo.clearCompleted,
    }
}