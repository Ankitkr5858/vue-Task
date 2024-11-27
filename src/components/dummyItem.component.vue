<template lang="">
  <div>
    <h5>{{ dummyItem.title }}</h5>
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
  props: ["dummyItem"],
};
</script>
<style lang=""></style>
