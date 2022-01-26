import { createApp } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import store from "./store";

// https://www.youtube.com/watch?v=MoDIpTuRWfM&t=178s
library.add(fas); // adding the icons in our project

createApp(App).use(store).component("fa", FontAwesomeIcon).mount("#app");
