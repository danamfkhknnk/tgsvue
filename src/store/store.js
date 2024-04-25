import { defineStore } from "pinia";

export const useNoteStore = defineStore({
  id: "note",
  state: () => ({
    notes: [],
  }),
  actions: {
    addNote(newNote) {
      this.notes.push(newNote);
    },
    editNote({ index, newNote }) {
      this.notes.splice(index, 1, newNote);
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
  },
  getters: {
    noteCount() {
      return this.notes.length;
    },
  },
});
