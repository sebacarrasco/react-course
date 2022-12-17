import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock("../../../actions/notes", () => ({
    activeNote: jest.fn()
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
        active: {
            id: 1,
            title: "title",
            body: "body",
            date: 0
        }
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Tests for <NoteScreen />', () => {

    const wrapper = mount(
        <Provider store={ store }>
            <NoteScreen />
        </Provider>
    );

    beforeEach( () => {
        jest.clearAllMocks();
    });
   
    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should dispatch the activeNote action', () => {
       
        const newTitle = "new title"
        wrapper.find("input[name='title']").simulate("change", {
            target: {
                value: newTitle,
                name: "title"
            }
        });

        // Es improtante que el Last, ya que la primera vez que se llama
        // es cuando el componente se renderea por primera vez y esa no nos interesa.
        // nos interesa cuando se llama por segunda vez ya que esta es producida por
        // el cambio en el inputo que realizamos.
        expect(activeNote).toHaveBeenLastCalledWith(
            initState.notes.active.id,
            { ...initState.notes.active,  title: newTitle}
        );

    });
    
    

});
