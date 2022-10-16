<template>
  <div class="caroussel">
    <CardCaroussel v-for="(card, i) in 3" :key="i" />
  </div>
</template>

<script>
import CardCaroussel from "./CardCaroussel.vue";
export default {
  name: "RowCaroussel",
  components: {
    CardCaroussel,
  },
};
</script>

<style>
.caroussel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
