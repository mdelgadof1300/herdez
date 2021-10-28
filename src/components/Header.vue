<template>
  <div class="container">
    <router-link to="/">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://grupoherdez2016.com/wp-content/uploads/2016/09/Grupo-Herdez.png"
          alt="logo"
          id="logo"
        />
      </a>
    </router-link>
    <router-link to="/about" class="nav_link">Acerca</router-link>
    <router-link to="/actual" class="nav_link"
      >Infraestructura actual</router-link
    >
    <router-link to="/propuesta" class="nav_link"
      >Propuesta de infraestructura</router-link
    >
    <router-link to="/productos" class="nav_link">Productos</router-link>
  </div>
</template>

<script>
import Toggle from "@/components/Toggle";
export default {
  components: {
    Toggle,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--header-padding);
  height: var(--header-height);
}
#logo {
  width: 100px;
  height: auto;
}
.nav_link {
  padding: 0.5vw 2vw 0.5vw 2vw;
  margin: 2vw;
  font-size: 1.5em;
  text-decoration: none;
  border-bottom: transparent solid 2px;
}
.nav_link:hover,
.nav_link.router-link-active {
  border-bottom: #a8bbb0 solid 2px;
  transition: 0.5s;
}
</style>
