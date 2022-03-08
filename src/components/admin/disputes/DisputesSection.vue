<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab href="#tab-1">Resolved</v-tab>
      <v-tab href="#tab-2">Unresolved</v-tab>
      <v-tab href="#tab-3">Ongoing</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <Table />
      </v-tab-item>
      <v-tab-item value="tab-2">
        <Table />
      </v-tab-item>
      <v-tab-item value="tab-3">
        <Table />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import Table from "./Table.vue";
export default {
  name: "DisputesSection",
  components: { Table },
  data() {
    return {
      tab: null,
    };
  },
};
</script>