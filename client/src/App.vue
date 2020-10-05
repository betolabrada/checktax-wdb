<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Configuración</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --bg-primary: #eeece0;
  --gray-nav: #4d4949;
  --gray-subnav: #c4c4c4;
  font-size: 12px;
}

input {
  width: 75px;
  height: 1.5rem;
  font-size: 1rem;
  box-sizing: border-box;
}

body {
  background: var(--bg-primary);
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
