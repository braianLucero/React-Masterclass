import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    activeNote: null,
  },
  reducers: {
    addNewEmtyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
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
} = journalSlice.actions;
