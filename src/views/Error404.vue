<template>
  <v-sheet
    flat
    height="80vh"
    color="transparent"
    class="text-center d-flex justify-center align-center"
  >
    <div class="d-flex flex-column align-center">
      <p class="deep-purple--text text--accent-4 pa-0 text-h1">404</p>

      <div class="text-h2">Oops. Nothing here...</div>

      <vs-button
        class="px-5"
        size="large"
        color="#6200EA"
        to="/dashboard/dashboard"
        >Go Back</vs-button
      >
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "Error404",
}
</script>
