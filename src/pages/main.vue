<template lang="">
  <div>
    <!-- <div v-if="dummyData.length"> -->
    <div class="searchAndBtn">
      <SearchComponent @search="handleSearch" />
      <ToggleButton />
    </div>
    <LoaderComponent :loader="loader" />
    <div v-if="dummyData.length > 0" class="container">
      <div
        v-for="item in dummyData"
        :key="item.id"
        class="box"
        :class="{ expanded: item.status }"
        @click="showContent(item)"
      >
        <DummyItemComponent :dummyItem="item" :searchTerm="searchFilterValue" />
      </div>
      <!-- </div> -->
    </div>
    <div v-else>
      <div class="no-data">No data found</div>
      <button class="backBtn" @click="goBack">Back</button>
    </div>
    <div v-if="dummyData.length > 0">
      <PaginationComponent
        :paginationData="paginationObject"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
import SearchComponent from "../components/search.component.vue";
import DummyItemComponent from "../components/dummyItem.component.vue";
import { mapGetters } from "vuex";
import "../assets/styles/dummyItem.css";
import PaginationComponent from "../components/pagination.component.vue";
import ToggleButton from "../components/ToggleButton.component.vue";

export default {
  components: {
    SearchComponent,
    ToggleButton,
    DummyItemComponent,
    PaginationComponent,
  },
  data() {
    return {
      searchFilterValue: "",
      dummyData: [],
      loader: true,
      skipWatch: false,
      paginationObject: {
        page: 1,
        pageSize: 5, // Display 5 cards per page
        totalCount: 1,
        totalPages: 1,
      },
    };
  },
  watch: {
    searchFilterValue: {
      immediate: true,
      handler() {
        if (this.skipWatch) {
          this.fetchdata();
        }
      },
    },
    "paginationObject.page": {
      immediate: true,
      handler() {
        if (this.skipWatch) {
          this.fetchdata();
        }
      },
    },
  },
  mounted() {
    this.fetchdata();
  },
  computed: {
    ...mapGetters(["getDummyData"]),
  },
  methods: {
    goBack() {
      window.location.reload();
    },
    handlePageChange(newPage) {
      this.paginationObject.page = newPage;
      this.fetchdata();
    },
    showContent(item) {
      item.status = !item.status;
    },
    handleSearch(data) {
      this.searchFilterValue = data;
      this.paginationObject.page = 1;
      this.fetchdata();
    },
    fetchdata() {
      let payload = {
        search: this.searchFilterValue,
        page: this.paginationObject.page,
        limit: 20, // Fetch 20 records from the backend
      };
      this.loader = true;

      this.$store.dispatch("getDummyData", payload).then((totalPosts) => {
        this.loader = false;
        this.skipWatch = true;
        this.dummyData = this.getDummyData;

        // Filter based on search term
        if (this.searchFilterValue) {
          this.dummyData = this.dummyData.filter((item) =>
            item.title
              .toLowerCase()
              .startsWith(this.searchFilterValue.toLowerCase())
          );
        }

        this.paginationObject.totalCount = totalPosts;
        this.paginationObject.totalPages = Math.ceil(
          totalPosts / 20 // Calculate total pages based on the 20 records fetched
        );

        // Adjust data slicing logic for the current page (show 5 records per page on the frontend)
        const startIndex =
          (this.paginationObject.page - 1) * this.paginationObject.pageSize;
        const endIndex = startIndex + this.paginationObject.pageSize;
        this.dummyData = this.dummyData.slice(startIndex, endIndex);

        // Disable pagination if no data
        if (this.dummyData.length === 0) {
          this.paginationObject.totalPages = 0;
        } else {
          this.dummyData = this.dummyData.map((value) => {
            return { ...value, status: false };
          });
        }

        if (this.paginationObject.totalCount === 0) {
          this.paginationObject.totalPages = 0;
        }
      });
    },
  },
};
</script>

<style lang=""></style>
