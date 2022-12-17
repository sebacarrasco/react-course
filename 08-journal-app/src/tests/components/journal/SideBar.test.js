import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Sidebar } from '../../../components/journal/Sidebar';
import { startlogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';


jest.mock('../../../actions/auth', () => ({
    startlogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}));

// Config de la store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: "123",
        name: "Seba"
    },
    ui:{
        msgErrorLogin: null,
        msgErrorRegister: null,
        loading: false
    },
    notes: {
        notes: [],
        active: null
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();



describe('Test for <SideBar />', () => {

    const wrapper = mount(
        <Provider store={ store }>
            <Sidebar />
        </Provider>
    );

    beforeEach( () => {
        jest.clearAllMocks();
    });
   
    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should call the startLogout action', () => {
        
        wrapper.find("button").simulate("click");
        expect(startlogout).toHaveBeenCalled();

    });
    
    test('should call the startNewNote action', () => {
       
        wrapper.find(".journal__new-entry").simulate("click");
        expect(startNewNote).toHaveBeenCalled();
        
    });
    


});
