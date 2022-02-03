<template>
  <main>
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