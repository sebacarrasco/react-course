import { db } from "../firebase/firebase-config";


export const loadNotes = async (uid) => {
    
    const notesSnapshot = await db.collection(`${ uid }/journal/notes`).orderBy('date', 'desc').get();
    const notes = []
    notesSnapshot.forEach(snapshotSon => {
        notes.push({
            id: snapshotSon.id,
            ...snapshotSon.data()
        })
    });

    return notes;
}