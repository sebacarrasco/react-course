import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ( { handleAddTodo } ) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del input
        if ( description.trim().length <= 1)
        {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        // Se le manda el dispatch con la acción y él ya sabe qué
        // reducer usar y hará render de lo que cambie luego de actualizar el state
        handleAddTodo(newTodo)
        reset();
    };

    return (
        <>
            <h4> Add TODO </h4>
            <hr/>

            <form onSubmit={ handleSubmit }>

                <input
                className="form-control"
                type="text"
                name="description"
                placeholder="Do something..."
                autoComplete="off"
                onChange={ handleInputChange }
                value={ description }
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 w-100"
                >
                    Add
                </button>

            </form>
        </>
    )
}
