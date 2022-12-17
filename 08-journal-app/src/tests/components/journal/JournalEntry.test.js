import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

// Config de la store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {}
let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    id: 20,
    date: 0,
    title: 'A title',
    body: 'The body of a note',
    url: 'https://someplace.com/pic.jpg'
}

describe('Tests for <JournalEntry />', () => {

    const wrapper = mount(
        <Provider store={ store }>
            <JournalEntry { ...note } />
        </Provider>
    );
   
    test('should match the snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('should active the note', () => {
       
        wrapper.find(".journal__entry").prop("onClick")();
        expect(store.dispatch).toHaveBeenCalledWith(activeNote(note.id, { ...note }));

    });
    
    

});
