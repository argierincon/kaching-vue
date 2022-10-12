import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import firebaseConfig from "./firebase";

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
