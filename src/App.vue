<template>
  <v-app>
    <Sidebar />
    <div class="flex-grow">
      <Header />
    </div>
    <!-- <v-main>
      <router-view />
    </v-main> -->
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
export default {
  components: {
    Sidebar,
    Header
  },
};
</script>
