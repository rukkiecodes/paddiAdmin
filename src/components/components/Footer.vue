<template>
  <v-footer padless>
    <v-col class="d-flex flex-column flex-sm-row justify-space-between align-center" cols="12">
      <span class="grey--text text--darken-2 text-body-2"
        >Privacy Policy
        <router-link class="text-decoration-none" to="/terms"
          >Terms of Use</router-link
        ></span
      >
      <span class="grey--text text--darken-2 text-body-2"
        >Copyright {{ new Date().getFullYear() }} TrustPaddi Admin All Rights Reserved.
      </span>
    </v-col>
  </v-footer>
</template>
