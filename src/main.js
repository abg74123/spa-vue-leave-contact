import "./index.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import App from "./App.vue";
import Calendar from "primevue/calendar";
import Galleria from "primevue/galleria";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import PrimeVue from "primevue/config";
import { createApp } from "vue";

const app = createApp(App);
app.use(PrimeVue);
app.component("Calendar", Calendar);
app.component("InputText", InputText);
app.component("Galleria", Galleria);
app.component("InputMask", InputMask);
app.mount("#app");