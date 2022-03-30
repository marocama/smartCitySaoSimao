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

<style>
/* 👉 SCROLLBAR 👈 */
.scrollbar::-webkit-scrollbar, .scrollfix::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}
.scrollfix::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.scrollbar:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.scrollbar::-webkit-scrollbar-track, .scrollfix::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0);
}
</style>