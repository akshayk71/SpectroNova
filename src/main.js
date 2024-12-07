import './assets/main.css'; // Import custom styles (if any)

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router setup
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import 'vuetify/styles'; // Vuetify CSS styles

// Import Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Optional: Explicit Vuetify component imports
import * as directives from 'vuetify/directives'; // Optional: Explicit Vuetify directive imports

// Create Vuetify instance
const vuetify = createVuetify({
  components, // Optional: Import all Vuetify components
  directives, // Optional: Import all Vuetify directives
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
  },
});

// Create Vue app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(vuetify);

// 
app.mount('#app')


