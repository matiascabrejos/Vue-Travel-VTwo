<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/4 text-center md:text-left ">
          <router-link to="/home" class="mb-6 font-bold hover:text-emerald-400">HOME</router-link>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left ">
          <router-link to="/checkin" class="mb-6 font-bold hover:text-emerald-400"
            >CHECK-IN</router-link
          >
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left ">
          <router-link to="/host" class="mb-6 font-bold hover:text-emerald-400">HOST</router-link>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left ">
          <router-link to="/aboutus" class="mb-6 font-bold hover:text-emerald-400">ABOUT US</router-link>
        </div>
      </div>
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4"></div>
      </div>
      <div class="border-t border-white">
        <div class="container px-5 py-4 flex flex-wrap mx-auto items-center">
          <div
            class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start lg:m-0 md:mx-auto sm:mx-auto"
          >
            <p
              class="text-white text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center"
            >
              ©2021. | Designed By: Matias Cabrejos. | All rights reserved.
            </p>
          </div>
          <span
            class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
          >
            <a class="text-white hover:text-emerald-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white hover:text-emerald-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white hover:text-emerald-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-white hover:text-emerald-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
