  /**
 * @jest-environment node
 */
// Por alguna razón este comentario es necesario

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';
 
// Config de la store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// El objeto que recibe mockStore es el estado actual de la store
const uid = "TESTING";
const noteId = 'amo3wCAojXzUruxOGSfe';
const initState = {
    auth: {
        uid
    },
    notes: {
        active: {
            id: noteId,
            title: 'Hello',
            body: 'World'
        }
    }
}
let store = mockStore(initState);

jest.mock('../../helpers/fileUpload', () => {
    return {
        fileUpload: () => {
            return Promise.resolve(
                "https//hello-world.com/image.jpg"
            );
        },
    };
});


describe('Tests for notes actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    });
   
    test('should create a new note', async() => {
        
        await store.dispatch(startNewNote());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        await db.doc(`TESTING/journal/notes/${docId}`).delete();

    });

    test('startLoadingNotes should load the notes', async() => {
       
        await store.dispatch(startLoadingNotes(uid));
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        // Con el toMatchObject da lo mismo si vienen más propiedades como el url,
        // basta con que calcen las propiedades del expected para que se satisfaga el expect
        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }
        expect(actions[0].payload[0]).toMatchObject(expected);


    });

    test('startSaveNote should update the note', async() => {
       
        // Ojo que el id sí es real de db de testing en firebase
        const note = {
            id: noteId,
            title: 'title',
            body: 'body'
        }

        await store.dispatch(startSaveNote(note));
        // Se verifica que la acción despachada tenga el tipo correcto
        const [ refreshNoteAction ] = store.getActions();
        expect(refreshNoteAction.type).toBe(types.notesUpdated);
        
        // Se verifica que efectivamente se haya updateado la bdd de firebase
        const docRef = await db.doc(`TESTING/journal/notes/${ note.id }`).get();
        expect(docRef.data().title).toBe(note.title);
        expect(docRef.data().body).toBe(note.body);
    });

    
    test('startUploading should update the url of the note', async() => {
        // const file = new File([], 'picture.jpg'); // No sé por qué no funcionaba así
        const file = [];
        await store.dispatch(startUploading());
        const docRef = await db.doc(`TESTING/journal/notes/${ noteId }`).get();
        expect(docRef.data().url).toBe('https//hello-world.com/image.jpg');
    });

});
