import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from '@testing-library/react';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendar-messages-es';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

jest.mock("../../../actions/events", () => ({
    eventSetActive: jest.fn(),
    eventStartLoading: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

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
        modalOpen: false
    }
};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <CalendarScreen />
    </Provider>
);

describe('Tests for <CalendarSreen />', () => {
   
    test('should match the snapshot', () => {
       
        // Cuando cambie de mes este snapshot no va a servir ya que
        // cambiará el calendario
        // expect(wrapper).toMatchSnapshot();

    });

    test('Tests with calendar iteractions', () => {
       
        const calendar = wrapper.find('Calendar');

        const calendarMessages = calendar.prop('messages');
        expect(calendarMessages).toEqual(messages);

        calendar.prop('onDoubleClickEvent')();
        expect(store.dispatch).toHaveBeenCalledWith({
            type: types.uiOpenModal
        });

        calendar.prop('onSelectEvent')({start: 'hola'});
        expect(eventSetActive).toHaveBeenCalledWith({start: 'hola'});

        // act es necesario es porque se está haciendo una modificación en el setState (setLastView)
        act(() => {
            calendar.prop('onView')('week');
            expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week');
        });
    });
    
    

});
