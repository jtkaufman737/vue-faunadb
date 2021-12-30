<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,h2,h3,h4,h5,h6 {
  font-family: acumin-pro,sans-serif;
  font-weight: 500;
  font-style: normal;
}

h3 {
  font-size:2em;
}

h6 {
  font-size:1em;
}

button {
  color:white;
  background: linear-gradient(90deg,#3F00A5 0%,#813EEF 100%);
}

a {
  color:#3F00A5;
}

a:hover {
  color:#813EEF;
}
</style>
