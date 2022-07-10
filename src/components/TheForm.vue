<template>
  <div class="flex items-center min-h-screen bg-gray-200">
    <div class="flex-1 h-full max-w-6xl mx-auto bg-gray-900 lg:rounded-lg md:rounded-lg rounded-none shadow-xl">
      <div class="flex flex-col md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img
            class="object-cover w-full h-full"
            src="../../public/images/bg-main.jpg"
            alt="img"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-center text-white">
              CHECK-IN
            </h1>
            <div>
              <form>
                <div
                  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
                >
                  <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                        for="company"
                      >
                        Where*
                      </label>
                      <input
                        class="w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3"
                        id="company"
                        type="text"
                        placeholder="Anywhere"
                      />
                    </div>
                    <div class="md:w-1/2 px-3">
                      <label
                        class="uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                        for="title"
                      >
                        Check-In / Check-Out*
                      </label>
                      <input
                        class="w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3"
                        id="title"
                        type="date"
                        placeholder="mm/dd/yyyy - mm/dd/yyyy"
                      />
                    </div>
                  </div>
                  <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                        for="location"
                      >
                        Guests*
                      </label>
                      <div>
                        <select
                          class="w-full bg-gray-200 border border-gray-200 text-gray-900 text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="location"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                    <div class="md:w-1/2 px-3">
                      <label
                        class="uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                        for="job-type"
                      >
                        Bedrooms*
                      </label>
                      <div>
                        <select
                          class="w-full bg-gray-200 border border-gray-200 text-gray-900 text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="job-type"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                    <div class="md:w-1/2 px-3">
                      <label
                        class="uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                        for="department"
                      >
                        Bathrooms*
                      </label>
                      <div>
                        <select
                          class="w-full bg-gray-200 border border-gray-200 text-gray-900 text-xs py-3 px-4 pr-8 mb-3 rounded"
                          id="department"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <button
              class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-emerald-400 border border-transparent rounded-lg active:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              href="#"
            >
              Check-In
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
