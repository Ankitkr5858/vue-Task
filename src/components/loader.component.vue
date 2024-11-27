<template>
    <div class="loader_style" v-show="loader == true">
      <HalfCircleSpinner :animation-duration="1300" :size="60" :color="'#0BD5E8'" />
    </div>
  </template>
  <script>
  
import { HalfCircleSpinner } from 'epic-spinners'
  export default {
    name: "LoaderComponent",
    components: {
        HalfCircleSpinner,
    },
    props: ["loader"],
  };
  </script>
  
  <style scoped>
  .loader_style {
    background: rgba(58, 56, 56, 0.822);
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  </style>