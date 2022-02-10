<template>
  <main class="bg-gray-50">
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<script>
export default {
  components: {
    Navbar: () => import('./Navbar'),
    Footer: () => import('./Footer'),
  }
}
</script>