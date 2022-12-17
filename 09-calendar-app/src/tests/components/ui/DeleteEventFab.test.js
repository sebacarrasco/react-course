import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { eventStartDelete } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({
    eventStartDelete: jest.fn()
}))

// Config de la store
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <DeleteEventFab />
    </Provider>
);

describe('Tests for <DeleteEventFab />', () => {
    
    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should call eventStartDelete on click', () => {
       
        wrapper.find("button").simulate("click");
        expect(eventStartDelete).toHaveBeenCalled();

    });
    
    

});
