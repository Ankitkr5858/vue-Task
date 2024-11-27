<template lang="">
  <div>
    <h5 v-html="highlightText(dummyItem.title, searchTerm)"></h5>
    <transition name="dropdown">
      <p v-if="!dummyItem.status" class="truncate">
        {{ dummyItem.body }}
      </p>
      <p v-else>
        {{ dummyItem.body }}
      </p>
    </transition>
  </div>
</template>
<script>
import "../assets/styles/dummyItem.css";
export default {
  props: ["dummyItem", "searchTerm"],
  methods: {
    highlightText(text, searchTerm) {
      if (!searchTerm) return text;
      const regex = new RegExp(`(${searchTerm})`, "gi"); // Create a case-insensitive regex
      return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap matched text in <span>
    },
  },
};
</script>
<style lang="">

</style>
