<template>
  <div class="container">
    <p>
      by
      <a
        href="http://agilvo.com"
        target="_blank"
        rel="noopener noreferrer"
        id="author_link"
      >
        @tord-s</a
      >
    </p>
  </div>
</template>

<style scoped>
.container {
  margin: 0px;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#author_link {
  text-decoration: none;
  transition: all 0.4s ease-in-out;
}
#author_link:hover {
  color: #fff;
}
</style>
