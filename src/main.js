import { createApp,h } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import VueTheMask from 'vue-the-mask'
import dataexchange from './components/plugins/dataExchange';
import emitter from './components/plugins/eventEmitter';

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp({
  render: ()=>h(App)  
});

app.use(VueTheMask)
app.use(vuetify);
app.use(App);
app.use(dataexchange);

app.provide('emitter',emitter);
window.emitter = emitter;

//app.config.globalProperties.$mitt = emitter;

app.mount("#app");


