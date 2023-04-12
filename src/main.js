import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaseConfig from "./firebase";
import Default from "./components/layouts/Default.vue";
import Blank from "./components/layouts/Blank.vue";

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);
app.component("default-layout", Default);
app.component("blank-layout", Blank);

app.mount("#app");
