import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, { title, body, date, url }));
    }

    return (
        <div
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={ handleEntryClick }
        >
            
            {/* Se pone un div en vez de img para jugar con el cover de la imagen por si
            no es cuadrada o algo así */}
            {
                // Solo si el url no es undefined se muestra la imagen
                url &&
                (<div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${ url })`
                    }}
                >
                </div>)
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}
