<template>
  <the-navbar></the-navbar>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer></the-footer>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
import TheHome from './pages/TheHome.vue'
import HomeCard from './components/HomeCard.vue'

export default {
  components: TheHome,
  HomeCard,
  HomeGrid,
}
</script>

<style>
.route-enter-from {
  opacity: 0;
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
