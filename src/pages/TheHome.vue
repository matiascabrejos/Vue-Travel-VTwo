<template>
  <div>
    <the-background></the-background>
    <home-grid></home-grid>
    <card-stats></card-stats>
    <home-card></home-card>
  </div>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";
import HomeGrid from "../components/HomeGrid.vue";
import TheBackground from "../components/TheBackground.vue";

export default {
  components: HomeCard,
  HomeGrid,
  TheBackground,
};
</script>

<style scoped>
.img-icon {
  height: 20px;
  width: 20px;
}
</style>
