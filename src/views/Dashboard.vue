<template>
  <div class="dashboardColor">
    <Nav />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/admin/navigation/Nav.vue"
import Footer from "../components/admin/components/Footer.vue"
import Dashboard from "../components/admin/dashboard/Dashboard.vue"
export default {
  name: "Admin",
  components: {
    Nav,
    Footer,
    Dashboard,
  },
}
</script>

<style>
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

.dashboardColor {
  background: #f8f8fb !important;
}
</style>
