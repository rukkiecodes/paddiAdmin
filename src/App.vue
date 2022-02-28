<template>
  <v-app id="paddi_app">
    <v-main class="white">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue"
export default {
  name: "App",

  created() {
    Vue.prototype.$vs = this.$vs
    Vue.prototype.$axios = this.$axios
    Vue.prototype.$cookies = this.$cookies
    Vue.prototype.$vuetify = this.$vuetify
  },
}
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
</style>
