
export const todoReducer = ( state=[], action ) => {

    switch (action.type) {
        case "add":
            // Acá se manda el objeto
            return [...state, action.payload];
    
        case "delete":
            // acá se manda el id
            return state.filter(task => task.id !== action.payload);

        case "toggle":
            // acá se manda el id

            // Versión larga:
            // return state.map(task => {
            //     if (task.id === action.payload)
            //     {
            //         return {
            //             ...task,
            //             done: !task.done
            //         };
            //     }
            //     else
            //     {
            //         return task;
            //     }
            // });

            // Versión corta
            return state.map( task => 
                ( task.id === action.payload)
                    ?  {...task, done: !task.done }
                    : task
            )
        default:
            return state;
    }

};