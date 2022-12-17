

const initialState = [{
    id: 1,
    todo: "primera tarea",
    done: false
}];

const todoReducer = (state=initialState, action) => {

    // El  action?.type quiere decir que si action tiene algún valor,
    // entonces le revisa la propiedad type, en caso contrario no se hace nada
    if ( action?.type === "agregar")
    {
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "segunda tarea",
    done: false
}

const agregarTodoAction = {
    type: "agregar",
    payload: newTodo // Es solo convención los nombres de type y payload
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)