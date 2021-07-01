import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import router from "./router";
import store from "./store";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Dropdown', Dropdown);

app.mount('#app');
