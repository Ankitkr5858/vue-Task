<template>
  <button
    class="toggle-button"
    :class="{ dark: isDarkMode }"
    @click="toggleTheme"
  >
    <span v-if="isDarkMode" class="icon">🌙</span>
    <span v-else class="icon">☀️</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  created() {
    // Check local storage for the theme preference on load
    const savedTheme = localStorage.getItem("theme") || "light";
    this.isDarkMode = savedTheme === "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
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
  padding: 10px;
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-button .icon {
  font-size: 24px;
}

html[data-theme="dark"] .toggle-button .icon {
  color: #fff;
}

html[data-theme="light"] .toggle-button .icon {
  color: #333;
}
</style>
