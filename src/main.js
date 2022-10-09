import { createApp } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faUniversity,
  faBriefcase,
  faLink,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faObservable } from "./plugins/icons";

import VueFullscreen from "vue-fullscreen";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import "./assets/style/index.css";

// https://www.youtube.com/watch?v=MoDIpTuRWfM&t=178s

// solid icons
library.add(faBars, faTimes, faUniversity, faBriefcase, faLink, faNewspaper);

// brand icons
library.add(faGithub, faLinkedin, faObservable);

createApp(App)
  .use(VueFullscreen)
  .use(MotionPlugin)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
