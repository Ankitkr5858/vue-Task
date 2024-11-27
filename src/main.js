import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import loaderComponent from "./components/loader.component.vue";

const app = createApp(App);

// Register global components
app.component("LoaderComponent", loaderComponent);

// Set the initial theme based on localStorage or default to light theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

// Mount the app to the DOM
app.use(store).mount("#app");
