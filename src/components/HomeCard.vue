<template>
  <div class="bg-gray-200">
    <h1 class="text-center text-3xl text-gray-900 font-bold py-4">
      Places To Stay
    </h1>
    <div
      class="
        p-10
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-4
        xl:gap-5
        md:gap-5
        lg:gap-5
        gap-6
        text-gray-900
      "
    >
      <div
        v-for="home in Homes"
        :key="home.id"
        class="
          border-2
          px-4
          pt-6
          pb-6
          lg:pb-10
          md:pb-12
          rounded-lg
          transform
          transition
          duration-100
          hover:scale-105
          text-center
          mb-2
          lg:mb-10
          md:mb-16
          shadow-l
          bg-white          
        "
      >
        <img
          :src="home.images"
          alt=""
          class="rounded-lg inset-0 h-60 md:h-3/4 sm:h-3/4 w-full object-cover"
        />
        <div class="flex pt-4 justify-center">
          <img src="../../public/marker.svg" class="img-icon" />
          <h2 class="pl-1 font-medium">
            {{ home.location.city }}, {{ home.location.state }}
          </h2>
        </div>
        <h2>
          {{ home.title }}
        </h2>
        <h2>
          {{ home.guests }} guests · {{ home.bedrooms }} bedrooms ·
          {{ home.beds }} beds · {{ home.bathrooms }} bathrooms
        </h2>
        <h2 class="font-medium">${{ home.pricePerNight }}/night</h2>
        <div class="mx-auto"></div>
        <div class="flex justify-center">
          <img src="../../public/star.svg" class="img-icon" />
          <h2 class="pl-1">
            {{ home.reviewValue }}
            ({{ home.reviewCount }} reviews)
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Homes from "../../public/homes.json";

export default {
  data() {
    return {
      Homes,
    };
  },
};
</script>

<style scoped>
.img-icon {
  width: 20px;
  height: 20px;
}
</style>
