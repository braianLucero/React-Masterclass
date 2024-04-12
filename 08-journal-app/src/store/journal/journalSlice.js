import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmtyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
      //Todo : mensaje de error
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.messageSaved = `${action.payload.title},actualizada correctamente `;
    },

    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageUrls = [
        ...state.activeNote.imageUrls,
        ...action.payload,
      ];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.activeNote = null;
    },

    deleteNotById: (state, action) => {
      state.activeNote = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmtyNote, // esta action es para cuando aprete el boton del + , pueda crear otra entrada
  setActiveNote, // esta action es para saber cual es la nota activa cuando hago click (enero,febrero , marzo ,abril .etc)
  setNotes, // es para cargar las notas , cuando la tengo leidas de algun lugar
  setSaving, // esta action es para cuando estoy grabando las notas
  updateNote, // esta action es para actualizar una nota
  deleteNotById, // esta action es para eliminarla de nuestro listado
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
