<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="lightMode === true ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round">
        <icon class="moon">🌙</icon>
        <icon class="sun">☀️</icon>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["lightMode"],
};
</script>

<style scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--secondary-dark-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: var(--dark-text-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: var(--dark-background-color);
}
input:focus + toggler {
  box-shadow: 0 0 2px var(--secondary-dark-color);
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
icon {
  font-size: 18px;
}
</style>
