<template>
  <div class="search-container">
    <input
      class="search-field"
      placeholder="Search"
      @input="onSearch"
      v-model="searchData"
    />
    <span v-if="searchData" class="clear-icon" @click="clearSearch"
      >&#10006;</span
    >
    <!-- Unicode for a cross icon -->
  </div>
</template>

<script>
import "../assets/styles/search.css";
import { debounce } from "lodash";

export default {
  nam: "SearchComponent",
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    clearSearch() {
      this.searchData = "";
      this.onSearch();
    },
    onSearch: debounce(function () {
      this.$emit("search", this.searchData);
    }, 500),
  },
};
</script>
<style lang=""></style>
