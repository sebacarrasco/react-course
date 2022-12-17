import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../ui/Navbar';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

// Se configura moment para que esté en español y así las fechas en el calendario
// se verán en español
moment.locale('es');

const localizer = momentLocalizer(moment);

// La estructura mínima de los eventos tiene que ser:
/*
{
    title: "",
    start: moment.toDate(),
    end: moment().add(2, 'hours').toDate(),
}
Pero se le puede agregar más propiedades
*/

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    // Cada vez que se renderea este componente se hace un get de los events
    // (prácticamente es solo la primera vez que se renderea)
    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelect = (e) => {
        // Se dispara con un solo click
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        // Cuando se cambia, por ejemplo, de mes a semana
        // En ese ejemplo e === 'week'
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // Ese evento se dispara cuando se hace click en un slot "vacío"
        // (es decir, directamente en el calendario y no en un evento)
        dispatch(eventClearActiveEvent());
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: uid === event.user._id ? '#367CF7' : "#465660",
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        };
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccesor="start"
                endAccesor="end"
                messages={ messages }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                eventPropGetter={ eventStyleGetter }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView }
                components={ {event: CalendarEvent} }
            />

            <AddNewFab />
            {
                activeEvent && <DeleteEventFab />
            }

            <CalendarModal />

        </div>
    )
}
