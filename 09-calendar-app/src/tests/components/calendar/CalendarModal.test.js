import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../../actions/events';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';

jest.mock('../../../actions/events', () => ({
    eventStartUpdate: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartAddNew: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);


const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');
const initState = {
    auth: {
        checking: false,
        uid: '123',
        name: 'test'
    },
    calendar: {
        events: [],
        activeEvent: {
            title: 'A title',
            notes: 'A note',
            start: now.toDate(),
            end: nowPlus1.toDate()
        }
    },
    ui:{
        modalOpen: true
    }
};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <CalendarModal />
    </Provider>
);

describe('Tests for <CalendarModal />', () => {

    beforeEach( () => {
        jest.clearAllMocks();
    });
   
    test('should show the modal', () => {
        
        // No hacemos el snapshot porque la hora y fecha van a ir cambiando
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);

    });
    
    test('should call the eventStartUpdate action and close the modal', () => {
       
        wrapper.find("form").simulate('submit', {
            preventDefault: () => {}
        });

        expect(eventStartUpdate).toHaveBeenCalledWith(initState.calendar.activeEvent);
        expect(eventClearActiveEvent).toHaveBeenCalled();

    });

    test('should show an error if the title is missing', () => {
       
        // Como en el test anterior se limpió el form, entonces el input
        // del título ahora está vacío
        wrapper.find("form").simulate('submit', {
            preventDefault: () => {}
        });

        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true);

    });

    test('should create a new event', () => {
       
        const initState = {
            auth: {
                checking: false,
                uid: '123',
                name: 'test'
            },
            calendar: {
                events: [],
                activeEvent: null
            },
            ui:{
                modalOpen: true
            }
        };
        const store = mockStore(initState);
        store.dispatch = jest.fn();
        
        const wrapper = mount(
            <Provider store={ store }>
                <CalendarModal />
            </Provider>
        );

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'New title'
            }
        });

        wrapper.find("form").simulate('submit', {
            preventDefault: () => {}
        });

        expect(eventStartAddNew).toHaveBeenCalledWith({
            start: expect.anything(),
            end: expect.anything(),
            title: 'New title',
            notes: ''
        });
        expect(eventClearActiveEvent).toHaveBeenCalled();

    });
    
    test('should validate the dates', () => {
        
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'New title'
            }
        });

        const today = new Date();

        // act es necesario es porque se está haciendo una modificación en el setState
        // (setDateStart o setDateEnd)
        act(() => {
            wrapper.find('DateTimePicker').at(1).prop('onChange')(today);
        });

        wrapper.find("form").simulate('submit', {
            preventDefault: () => {}
        });

        expect(Swal.fire).toHaveBeenCalledWith('Error', 'La fecha final debe ser mayor que la fecha de inicio', 'error');

    });
    
    

});
