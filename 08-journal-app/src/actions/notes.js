import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

// react-journal

export const startNewNote = () => {
    // Así es, aparte de dispatch se puede acceder a getState que
    // retorna un objeto con tooodos los estados en la store.
    // Bastante similar a useSelector (pero no recibe un callback)
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        try {
            // Dentro de collection va el path donde se quiere grabar
            const documentReference = await db.collection(`${ uid }/journal/notes`).add(newNote);
            dispatch(activeNote(documentReference.id, newNote));
            dispatch(addNewNote(documentReference.id, newNote));
        } catch (error) {
            console.log(error);
        }
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) => {
    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: [...notes]
});


export const startSaveNote = (note) => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;

        // Si el url es undefined, entonces no lo mandaremos porque
        // firebase no deja guardar algo undefined (tira error)
        if (!note.url)
        {
            delete note.url;
        }

        // Eliminamos el id porque no lo guardamos dentro del objeto en firestore,
        // porque en firestore se llega al objeto a través del id, pero el objeto
        // en sí no contiene en sus propiedades el id (aunque podría tenerlo)
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));
        Swal.fire('Saved', note.title, 'success');
    }
}

// Esta acción se encarga de actualizar en la store la note que se actualizó en firebase
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note
    }
})


export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}


export const startDeleting = (id) => {
    return async(disppatch, getState) => {

        const { uid } = getState().auth;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();

        disppatch(deleteNote(id));

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const notesLogout = () => ({
    type: types.notesLogoutCleaning
})