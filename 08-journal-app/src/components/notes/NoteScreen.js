import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    // Así no estaremos modificando la nota active, es como que creamos una copia
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    // Recordar:
    // useRef es básicamente un setState pero que solo retorna el state
    // y se puede modificar directamente. Además, al modificarlo no se
    // vuelve a renderear.
    // Y por este ejercicio, al parecer no cambia su valor si el componente se
    // vuelve a renderear (aunque cambie el state de note.id, no se actualiza activeId)
    const activeId = useRef(note.id);

    // Este useEffect es para que se actualice el formulario al cambiar de nota
    // Por alguna razón al actualizar note, no se vuelve a llamr el useForm automáticamente
    useEffect(() => {
        if (note.id !== activeId.current)
        {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    // Yo lo hubiera hecho así, pero por alguna razón se ejecuta el reset dos veces
    // al clickear una nota, incluso si es la nota que ya está activa.
    // Con la forma del profe se llama a reset solo una vez y de hecho cuando se clickea
    // la nota activa no se resetea c:
    // useEffect(() => {
    //     reset(note);
    // }, [note, reset])

    // Para actualizar la activeNote en la store: (ojo que no en la bdd)
    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(note.id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    note.url &&
                    (<div className="notes__image">
                        <img
                            src={ note.url }
                            alt="some image"
                        />
                    </div>)
                }

            </div>


            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>
        </div>
    )
}
