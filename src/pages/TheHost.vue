<template>
  <main>
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh;"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style='background-image: url("/images/8.jpg");'
      >
        <span
          id="blackOverlay"
          class="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-0">
              <h1 class="text-white font-bold text-5xl">
                Guide to becoming a host
              </h1>
              <p class="mt-4 text-lg text-white font-semibold">
                Interested in hosting? Wondering what comes next? This
                step-by-step guide can help you get started.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px; transform: translateZ(0px);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <section class="pb-20 bg-gray-300 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-red-400"
                ></div>
                <h6 class="text-2xl font-bold text-gray-900">
                  Tell us the basics
                </h6>
                <p class="mt-2 mb-4 text-gray-900 font-semibold">
                  First things first! We’ll ask for details like the location of
                  your place, what type of property you’re offering, and the
                  number of bedrooms and bathrooms your guests will have access
                  to.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400"
                ></div>
                <h6 class="text-2xl font-bold text-gray-900">
                  Take photos of the space
                </h6>
                <p class="mt-2 mb-4 text-gray-900 font-semibold">
                  Guests love browsing photos when making a decision on where to
                  stay. To snap the best photos, tidy up your space beforehand.
                  Take shots of each area, using natural light and landscape
                  mode when possible.
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-green-400"
                ></div>
                <h6 class="text-2xl font-bold text-gray-900">
                  Highlight unique details
                </h6>
                <p class="mt-2 mb-4 text-gray-900 font-semibold">
                  To help with your listing title and description, consider what
                  makes your place special, such as a view or a pool. Also, note
                  what might be important for guests to know before booking,
                  like stairs or parking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
