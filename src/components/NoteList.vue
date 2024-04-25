<template>
  <div>
    <h2>Daftar Catatan</h2>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note }}
        <button @click="deleteNote(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useNoteStore } from "@/store/store";

export default defineComponent({
  setup() {
    const noteStore = useNoteStore();

    return {
      notes: noteStore.notes,
      deleteNote: noteStore.deleteNote,
    };
  },
});
</script>
