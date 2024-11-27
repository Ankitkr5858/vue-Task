<template>
  <button
    class="toggle-button"
    :class="{ dark: isDarkMode }"
    @click="toggleTheme"
  >
    {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      const theme = this.isDarkMode ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme); 
      this.$emit("theme-changed", theme);
    },
  },
};
</script>

<style scoped>
.toggle-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

html[data-theme="dark"] .toggle-button {
  background-color: #333;
  color: #fff;
}

html[data-theme="light"] .toggle-button {
  background-color: #ccc;
  color: #333;
}
</style>
