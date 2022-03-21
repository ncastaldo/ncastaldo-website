import { reactive } from "vue";
const state = reactive({
  fullscreen: false,
});

const isFullscreen = () => state.fullscreen;
const setFullscreen = (fullscreen) => (state.fullscreen = fullscreen);

export default { isFullscreen, setFullscreen };
