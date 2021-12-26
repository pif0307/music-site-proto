<template>
  <div class="about">
    <v-card class="mx-3 my-3"> <HistoryTable /> </v-card>
  </div>
</template>

<script>
import HistoryTable from "@/components/music/HistoryTable.vue";

export default {
  components: {
    HistoryTable,
  },
};
</script>
