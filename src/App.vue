<template>
  <v-app id="paddi_app">
    <Nav :toggleSidebar="toggleSidebar" />
    <!-- <v-navigation-drawer app> -->
      <Sidebar :sidebar="sidebar" />
    <!-- </v-navigation-drawer> -->
    <v-main class="dashboardColor">
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <Footer />
      </v-container>
    </v-main>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import Vue from "vue";
import Sidebar from "./components/components/navigation/Sidebar.vue";
import Nav from "./components/components/navigation/Nav.vue";
import Footer from "./components/components/Footer.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Nav,
    Footer,
  },
  data() {
    return {
      sidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
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
.dashboardColor {
  background: #f8f8fb !important;
}
</style>
