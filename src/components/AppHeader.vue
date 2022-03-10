<script>
import { ref } from "vue";
import BaseIconAction from "./base/BaseIconAction.vue";
export default {
  components: { BaseIconAction },
  setup() {
    const active = ref(false);

    const routes = [
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Journey", id: "journey" },
      { name: "Projects", id: "projects" },
      { name: "Publications", id: "publications" },
      { name: "Contacts", id: "contacts" },
    ];
    const onClick = (value) => {
      active.value = value;
    };
    return { routes, onClick, active };
  },
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <h2 class="header-content-heading">
        <a href="#" class="header-content-heading-link">@ncastaldo</a>
      </h2>
      <div class="header-content-routes">
        <span
          v-for="route in routes"
          :key="route.id"
          class="header-content-routes-span"
        >
          <a class="header-content-routes-span-link" :href="'#' + route.id">
            {{ route.name }}
          </a>
        </span>
      </div>
      <BaseIconAction
        class="header-content-icon"
        :icon="['fa', 'bars']"
        color="#ffffff"
        @click="onClick(true)"
      />
    </div>
    <div class="header-sidebar" :class="active ? 'active' : ''">
      <BaseIconAction
        class="header-sidebar-icon"
        :icon="['fa', 'times']"
        @click="onClick(false)"
      />
      <div class="header-sidebar-routes">
        <span
          v-for="route in routes"
          :key="route.id"
          class="header-sidebar-routes-span"
        >
          <a
            class="header-sidebar-routes-span-link"
            :href="'#' + route.id"
            @click="onClick(false)"
          >
            {{ route.name }}
          </a>
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;

  height: 10rem;

  background-color: #1e1e1e;
  color: #ffffff;

  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}

.header-content {
  margin: auto;

  padding: 0 3rem;

  max-width: 85rem;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-content-heading {
  font-size: 3rem;
}

.header-content-routes {
  font-size: 2.4rem;
}

.header-content-routes-span {
  margin: 0 1rem;
}

.header-content-routes {
  font-size: 2rem;
}

.header-content-heading-link,
.header-content-routes-span-link,
.header-sidebar-routes-span-link {
  text-decoration: none;
  color: #ffffff;
}

.header-content-icon {
  font-size: 3.3rem;
}
.header-sidebar-icon {
  font-size: 4rem;
}

.header-content-icon {
  display: none;
}

.header-sidebar {
  position: absolute;
  top: 0;
  left: 100%;

  width: 100vw;
  min-height: 100vh;
  z-index: 20;

  background-color: rgba(30, 30, 30, 0.95);

  text-align: center;

  transition: left 100ms ease-in-out;
}

.header-sidebar-routes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10rem 0;

  overflow: scroll;

  font-size: 3rem;
}

.header-sidebar-routes-span {
  margin: 2rem 0;
}

.header-sidebar-icon {
  position: absolute;
  right: 3rem;
  top: 3rem;
}

@media (max-width: 800px) {
  .header-content-routes {
    display: none;
  }

  .header-content-icon {
    display: block;
  }

  .header-sidebar.active {
    left: 0;
  }
}
</style>
