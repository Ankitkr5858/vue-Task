<template lang="">
  <div class="pagination">
    <span>
      Showing {{ paginationData.page }}-{{ paginationData.pageSize }} of
      {{ paginationData.totalCount }} entities
    </span>
    <div class="pagination-button">
      <button @click="prevPage" :disabled="paginationData.page === 1">
        <img src="/images/arrow-left.svg" alt="left-icon" />
      </button>
      <div v-if="paginationData.totalPages > 0">
        <button
          v-for="page in Array(paginationData.totalPages)
            .fill(0)
            .map((_, idx) => idx + 1)"
          :key="page"
          @click="selectPage(page)"
          class="pages"
          :disabled="paginationData.page === page"
          :class="{ active: paginationData.page === page }"
        >
          {{ page }}
        </button>
      </div>
      <p v-else>Next {{ pagePerData }}</p>

      <button
        @click="nextPage"
        :disabled="paginationData.page === paginationData.totalPages"
      >
        <img src="/images/arrow-right.svg" alt="right-icon" />
      </button>
    </div>
  </div>
</template>

<script>
import "../assets/styles/pagination.css";

export default {
  props: ["paginationData"],
  data() {
    return {
      pagePerData: 1,
    };
  },
  methods: {
    nextPage() {
      this.paginationData.page = this.paginationData.page + 1;
      this.pagePerData += 1;
      this.$emit("page-change", this.paginationData.page);
    },
    prevPage() {
      this.paginationData.page = this.paginationData.page - 1;
      this.pagePerData -= 1;
      this.$emit("page-change", this.paginationData.page);
    },
    selectPage(page) {
      this.paginationData.page = page;
      this.$emit("page-change", this.paginationData.page);
    },
  },
};
</script>

<style lang=""></style>
