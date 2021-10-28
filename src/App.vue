<template>
  <div class="app" :class="{ light_mode: lightMode }">
    <Header @toggle="toggle" />
    <div id="page_content">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  data() {
    return {
      lightMode: false,
    };
  },
  components: {
    Header,
    Footer,
  },
  // Keeps route title up to date: either uses default title
  // after || or provided title in index.js to the given route
};
</script>

<style>
:root {
  --dark-text-color: #f2f1e8;
  --dark-background-color: #050533;
  --light-background-color: #f2f1e8;
  --light-text-color: #050533;
  --primary-highlight-color: #e34234;
  --secondary-light-color: #a8bbb0;
  --secondary-dark-color: #0d698b;
  --header-height: 10vh;
  --header-padding: 4vh;
}

html,
body {
  margin: 0;
  padding: 0;
  background: #f2f1e8;
  color: var(--light-text-color);
  font-family: "Jura", sans-serif;
}

.light_mode {
  background: var(--light-background-color);
  color: var(--light-text-color);
}

.app {
  text-align: center;
  transition: all 0.3s ease-in-out;
}

a {
  color: var(--light-text-color);
}

.light_mode a {
  color: var(--secondary-dark-color);
}

/* Works on Firefox */
* {
  scrollbar-width: 8px;
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #050533;
}
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(45deg, #0d698b44, #0d698baa, #0d698b44);
  border-radius: 10px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
}
#page_content {
  min-height: calc(100vh - var(--header-height) - var(--header-padding));
}

/* router transtion start  */
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: opacity 0.3s ease-in;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: opacity 0.3s ease-out;
}
/* router transition end */
</style>
