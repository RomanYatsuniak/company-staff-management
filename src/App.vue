<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script>

export default {
  created() {
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  background-color: #e5e5e5;
  font-family: 'Roboto', sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
}
</style>
