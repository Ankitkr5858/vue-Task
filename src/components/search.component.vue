  <template lang="">
    <div>
      <input
        class="search-field"
        placeholder="Search"
        @input="onSearch"
        v-model="searchData"
      />
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
      onSearch: debounce(function () {
        this.$emit("search", this.searchData);
      }, 500),
    },
  };
  </script>
  <style lang=""></style>
