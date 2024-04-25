<template>
  <div>
    <h2>Tambah Catatan</h2>
    <input type="text" v-model="newNote" />
    <button @click="addNote">Tambah</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useNoteStore } from "@/store/store";

export default defineComponent({
  setup() {
    const noteStore = useNoteStore();
    const newNote = ref("");

    const addNote = () => {
      if (newNote.value.trim() !== "") {
        noteStore.addNote(newNote.value);
        newNote.value = "";
      }
    };

    return {
      newNote,
      addNote,
    };
  },
});
</script>
