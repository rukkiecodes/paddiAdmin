<template>
  <v-app id="paddi_app">
    <v-app-bar app></v-app-bar>
    <v-navigation-drawer app> <Sidebar /> </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/admin/navigation/Sidebar.vue"
export default {
  name: "App",
  components: {
    Sidebar
  },

  created() {
    Vue.prototype.$vs = this.$vs;
    Vue.prototype.$axios = this.$axios;
    Vue.prototype.$cookies = this.$cookies;
    Vue.prototype.$vuetify = this.$vuetify;
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url(./assets/icon/css/line-awesome.min.css);

html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.v-main {
  padding-top: 65px !important;
}
</style>
