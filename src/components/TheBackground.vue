<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center"
    style="min-height: 100vh;"
  >
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style='background-image: url("/images/7.jpg");'
    >
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div class="bottom-6 relative text-center bg-cover bg-center">
      <h1 class="text-5xl font-bold mb-6 bg-clip-text text-white">
        Book Your Next Trip
      </h1>
      <button
        @click="$router.push('checkin')"
        type="button"
        class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-white text-gray-900 hover:bg-emerald-400 hover:text-white text-lg font-bold py-2 px-4 mr-1 rounded"
      >
        Check-In
      </button>
      <h1 class="text-5xl font-bold mb-6 bg-clip-text text-white pt-2">
        Become A Host
      </h1>
      <button
        @click="$router.push('host')"
        type="button"
        class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 bg-transparent text-white hover:bg-emerald-400 hover:text-white text-lg font-bold py-2 px-4 mr-1 rounded"
      >
        Host
      </button>
    </div>
  </div>
</template>
