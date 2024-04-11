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
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmtyNote, // esta action es para cuando aprete el boton del + , pueda crear otra entrada
  setActiveNote, // esta action es para saber cual es la nota activa cuando hago click (enero,febrero , marzo ,abril .etc)
  setNotes, // es para cargar las notas , cuando la tengo leidas de algun lugar
  setSaving, // esta action es para cuando estoy grabando las notas
  updateNote, // esta action es para actualizar una nota
  deleteNodeById, // esta action es para eliminarla de nuestro listado
  savingNewNote,
} = journalSlice.actions;
