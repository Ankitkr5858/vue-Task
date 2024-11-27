<template>
  <div>
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./pages/main.vue";
export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html[data-theme="light"] {
  --background-color: #fff;
  --text-color: #333;
}

html[data-theme="dark"] {
  --background-color: #333;
  --text-color: #fff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  margin-top: 60px;
  text-align: center;
}

button {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

html[data-theme="dark"] .toggle-button {
  background-color: transparent;
  color: transparent;
}

html[data-theme="light"] .toggle-button {
  background-color: transparent;
  color: transparent;
}

html[data-theme="dark"] body,
html[data-theme="dark"] p,
html[data-theme="dark"] h1,
html[data-theme="dark"] h2,
html[data-theme="dark"] h3,
html[data-theme="dark"] h4,
html[data-theme="dark"] h5,
html[data-theme="dark"] span,
html[data-theme="dark"] button,
html[data-theme="dark"] h6 {
  color: #fff;
}

html[data-theme="dark"] .pagination {
  color: white;
}

html[data-theme="dark"] .pagination-button button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

html[data-theme="dark"] .pagination-button button.active {
  background-color: white;
  color: black;
}

html[data-theme="dark"] .pagination-button button:disabled {
  color: #666;
}

html[data-theme="dark"] .pagination-button p {
  color: white;
}

html[data-theme="light"] .pagination {
  color: black;
}

html[data-theme="light"] .pagination-button button {
  background-color: transparent;
  color: black;
  border: 1px solid black;
}

html[data-theme="light"] .pagination-button button.active {
  background-color: rgb(73, 67, 67);
  color: white;
}

html[data-theme="light"] .pagination-button button:disabled {
  color: #ccc;
}

html[data-theme="light"] .pagination-button p {
  color: black;
}
</style>
