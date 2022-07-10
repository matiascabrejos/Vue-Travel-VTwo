<template>
  <div class="antialiased">
    <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Travelify APP</span>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-white border-teal-light hover:text-emerald-400 hover:border-emerald-400"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-base sm:flex-grow">
          <router-link
            to="/home"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-emerald-400 mr-4"
          >
            Home
          </router-link>
          <router-link
            to="/checkin"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-emerald-400 mr-4"
          >
            Check-In
          </router-link>
          <router-link
            to="/host"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-emerald-400 mr-4"
          >
            Host
          </router-link>
          <router-link
            to="/aboutus"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-emerald-400 mr-4"
          >
            About Us
          </router-link>
        </div>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
a.active {
  @apply text-emerald-400;
}
</style>
