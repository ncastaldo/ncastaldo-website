import { createApp } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUniversity,
  faBriefcase,
  faLink,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faObservable } from "./plugins/icons";

import App from "./App.vue";
import store from "./store";

// https://www.youtube.com/watch?v=MoDIpTuRWfM&t=178s
library.add(faUniversity, faBriefcase, faLink, faNewspaper); // adding the icons in our project
library.add(faGithub, faLinkedin, faObservable);

createApp(App).use(store).component("fa", FontAwesomeIcon).mount("#app");
