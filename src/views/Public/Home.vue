<template>
  <div class="py-16 sm:pt-20 sm:pb-24 lg:pt-24">
    <div class="relative overflow-hidden">
      <header class="relative">
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-12 w-" src="" alt="">
              </div>
              <div class="-mr-2">
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="mt-6 px-5">
                <a href="#" class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700">Start free trial</a>
              </div>
              <div class="mt-6 px-5">
                <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-gradient-to-b from-gray-100 to-purple-800">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <!-- <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"> 
                     <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">We're hiring</span>
                     <span class="ml-4 text-sm">Visit our careers page</span> 
                     Heroicon name: solid/chevron-right 
                    <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a> -->
                  
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Smart São Simão</span>
                    <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">ship web apps</span>
                  </h1>
                  <!-- <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  </p> -->
                  <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <div class="min-w-0 flex-1">
                          <label for="email" class="sr-only">Email address</label>
                          <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button @click="$store.dispatch('modals/open', 'login')" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-black font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Entrar</button>
                        </div>
                      </div>
                      <!-- <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms of service</a>.</p> -->
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Gradient Feature Section -->
        <div class="w-full bg-gradient-to-b from-purple-800 to-indigo-700">
          <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 class="text-3xl font-extrabold text-white tracking-tight">Inbox support built for efficiency</h2>
            <p class="mt-4 max-w-3xl text-lg text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p>
            <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/inbox -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Unlimited Inboxes</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/users -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Manage Team Members</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/trash -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Spam Report</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/pencil-alt -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Compose in Markdown</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/document-report -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Team Reporting</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/reply -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Saved Replies</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/chat-alt -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Email Commenting</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>

              <div>
                <div>
                  <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <!-- Heroicon name: outline/heart -->
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                </div>
                <div class="mt-6">
                  <h3 class="text-lg font-medium text-white">Connect with Customers</h3>
                  <p class="mt-2 text-base text-purple-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Testimonial/stats section -->
        <div class="relative mt-20">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div class="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                <!-- Testimonial card-->
                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100" alt="">
                  <div class="absolute inset-0 bg-rose-500 mix-blend-multiply"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div>
                  <div class="relative px-8">
                    <div>
                      <img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation">
                    </div>
                    <blockquote class="mt-8">
                      <div class="relative text-lg font-medium text-white md:flex-grow">
                        <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
                      </div>

                      <footer class="mt-4">
                        <p class="text-base font-semibold text-rose-200">Sarah Williams, CEO at Workcation</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <!-- Content area -->
              <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">On a mission to empower teams</h2>
                <div class="mt-6 text-gray-500 space-y-6">
                  <p class="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                  <p class="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                  <p class="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
                </div>
              </div>
              <!-- Stats section -->
              <div class="mt-10">
                <dl class="grid grid-cols-2 gap-x-4 gap-y-8"></dl>
              </div>
            </div>
          </div>
        </div>
        <!-- Stats section -->
        <div class="relative bg-gray-900">
          <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div class="h-full w-full xl:grid xl:grid-cols-2">
              <div class="h-full xl:relative xl:col-start-2">
                <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
              </div>
            </div>
          </div>
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 class="text-sm font-semibold tracking-wide uppercase">
                <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Valuable Metrics</span>
              </h2>
              <p class="mt-3 text-3xl font-extrabold text-white">Get actionable data that will help grow your business</p>
              <p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
              <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                <p>
                  <span class="block text-2xl font-bold text-white">8K+</span>
                  <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Companies</span> use laoreet amet lacus nibh integer quis.</span>
                </p>

                <p>
                  <span class="block text-2xl font-bold text-white">25K+</span>
                  <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Countries around the globe</span> lacus nibh integer quis.</span>
                </p>

                <p>
                  <span class="block text-2xl font-bold text-white">98%</span>
                  <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Customer satisfaction</span> laoreet amet lacus nibh integer quis.</span>
                </p>

                <p>
                  <span class="block text-2xl font-bold text-white">12M+</span>
                  <span class="mt-1 block text-base text-gray-300"><span class="font-medium text-white">Issues resolved</span> lacus nibh integer quis.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>