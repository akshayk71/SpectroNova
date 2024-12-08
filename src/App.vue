<template>
  <v-app>
    <v-main>
      <!-- Full Layout -->
      <v-container fluid>
          <!-- Sidebar -->
            <Sidebar />

          <!-- Main Content -->
            <MainContent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    MainContent,
  },
};
</script>

<style>
/* App-level styling */
.sidebar {
  background-color: #f7f8fa;
  height: 100vh;
  border-right: 1px solid #ddd;
  padding: 10px;
}

.main-content {
  padding: 20px;
  background-color: #ffffff;
}
.v-main {
  --v-layout-left: 0px !important;
}
@media (min-width: 1024px) {
    #app {
        display: grid;
        grid-template-columns: auto;
        padding: 0 2rem;
        margin-right: 10px;
        margin-left:250px;
    }
}
</style>
