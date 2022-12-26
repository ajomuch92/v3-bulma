import { createApp } from 'vue'
import './style.css';
import 'bulma/css/bulma.css';
import V3Bulma from 'v3-bulma';
import App from './App.vue'

const app = createApp(App);

app.use(V3Bulma);


app.mount('#app');
