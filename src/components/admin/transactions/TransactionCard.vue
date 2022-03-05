<template>
  <v-card>
    <v-row>
      <v-col lg="5">
        <v-img width="100" height="100" :src="item.img"></v-img>
      </v-col>
      <v-col lg="7">
        <v-card-title class="text-h4"> {{ item.count }} </v-card-title>
        <v-card-subtitle> {{ item.title }} </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>