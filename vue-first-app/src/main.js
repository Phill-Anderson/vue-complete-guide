import { createApp } from "vue";
import App from "./App.vue";
import Contact from "./components/FriendContact.vue";
import MyComponent from "./components/MyComponent.vue";
const app = createApp(App).mount("#app");

app.component("friend-contact", Contact);
app.component("minii-nerlesen", MyComponent);
