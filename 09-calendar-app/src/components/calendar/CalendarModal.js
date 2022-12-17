import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { eventStartAddNew, eventClearActiveEvent, eventStartUpdate } from '../../actions/events';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

if (process.env.NODE_ENV !== 'test')
{
    Modal.setAppElement('#root');
}

// fecha de inicio por defecto: la siguiente hora. Ej: hora actual-> 3:45, startDate: 4
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}

export const CalendarModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);
    const dispatch = useDispatch();

    const [ dateStart, setDateStart ] = useState(now.toDate());
    const [ dateEnd, setDateEnd ] = useState(nowPlus1.toDate());
    const [titleIsValid, setTitleIsValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        // Cada vez que cambia la active note, si esta no es null,
        // se ponene sus datos en el formulario
        if (activeEvent)
        {
            setFormValues(activeEvent);
        }
        else
        {
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues])

    const handleInputChange = ({ target }) => {
        setFormValues(previousValues => ({
            ...previousValues,
            [target.name]: target.value
        }));
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent);
    }

    const handleStartDateChange = (e) => {
        // El evento es una fecha (date de js, no moment)
        setDateStart(e);
        setFormValues(previousValues => ({
            ...previousValues,
            start: e
        }));
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues(previousValues => ({
            ...previousValues,
            end: e
        }));
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd))
        {
            Swal.fire('Error', 'La fecha final debe ser mayor que la fecha de inicio', 'error');
            return;
        }

        if (title.trim().length < 2)
        {
            setTitleIsValid(false);
            return;
        }

        // Cuando estamos actualizando, activeEvent no es null,
        // Cuando estamos creando, activeEvent es null
        if (activeEvent)
        {
            dispatch(eventStartUpdate(formValues));
        }
        else
        {
            dispatch(eventStartAddNew(formValues));
        }

        setTitleIsValid(true);
        closeModal();

    }

    return (
        <Modal
            isOpen={ modalOpen }
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            // Es falso para los tests
            ariaHideApp={ !process.env.NODE_ENV === 'test' }
        >
        
        <h1> {activeEvent ? 'Editar evento' : "Nuevo evento"} </h1>
        <hr />
        <form
            className="container"
            onSubmit={ handleSubmitForm }
        >

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker
                    onChange={ handleStartDateChange }
                    value={ dateStart }
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                    onChange={ handleEndDateChange }
                    value={ dateEnd }
                    minDate={ dateStart }
                    className="form-control"
                />
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className={ `form-control ${ !titleIsValid && 'is-invalid' }` }
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={ notes }
                    onChange={ handleInputChange }
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
        
        </Modal>
    )
}
