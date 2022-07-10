<template>
  <div class="bg-gray-200">
    <section class="container mx-auto px-6 pt-10">
      <h2 class="text-5xl font-bold text-center text-gray-900 mb-8">
        About us
      </h2>
      <home-stats></home-stats>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2 pr-10">
          <h4 class="text-4xl text-gray-900 font-bold mb-3">Travelify</h4>
          <p class="text-gray-900 mb-8">
            Travelify was born in 2007 when two Hosts welcomed three guests to
            their San Francisco home, and has since grown to 4 million Hosts who
            have welcomed more than 1 billion guest arrivals in almost every
            country across the globe. Every day, Hosts offer one-of-a-kind stays
            and unique Experiences that make it possible for guests to
            experience the world in a more authentic, connected way.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            class="rounded-lg"
            src="../../public/images/5.jpg"
            alt="Mountain Image"
          />
        </div>
      </div>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2 pr-10">
          <h4 class="text-4xl text-gray-900 font-bold mb-3">Contact</h4>
          <p class="text-gray-900 mb-8">
            For general press inquiries or United States and North America media
            requests, please get in touch at contact.press@travelifyapp.com.
          </p>
        </div>
        <div class="w-full md:w-1/2">
          <img
            class="rounded-lg"
            src="../../public/images/6.jpg"
            alt="Mountain Image"
          />
        </div>
      </div>
    </section>
    <section class="text-gray-900 body-font">
      <div class="container px-5 pb-8 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-gray-900 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          <p class="leading-relaxed text-lg text-gray-900">
            Travelify is different from most brands. We're a community of
            individuals, and yet there's a consistency holding us together
            through the values we share. We have a common belief in belonging,
            but everyone's expression of it will naturally always be a little
            different.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-gray-900 mt-8 mb-6"
          ></span>
          <h2
            class="text-gray-900 font-medium title-font tracking-wider text-sm"
          >
            MAT LUKE
          </h2>
          <p class="text-gray-500">Chief Executive Officer</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeStats from "../components/HomeStats.vue";

export default {
  components: HomeStats,
};
</script>
