<!-- src/App.vue -->
<template>
  <div id="app">
    <NoteList />
    <AddNoteForm />
    <p>Jumlah Catatan: {{ noteCount }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NoteList from "@/components/NoteList.vue";
import AddNoteForm from "@/components/AddNoteForm.vue";
import { useNoteStore } from "@/store/store";

export default defineComponent({
  components: {
    NoteList,
    AddNoteForm,
  },
  setup() {
    const noteStore = useNoteStore();
    const noteCount = noteStore.noteCount;

    return {
      noteCount,
    };
  },
});
</script>
