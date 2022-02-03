<template>
  <div id="app">
    <Layout />
    <Login />
    <Register />
  </div>
</template>

<script>
export default {
  components: { 
    Layout: () => import('@/layout/Default'),
    Login: () => import('@/components/Modals/Auth/Login'),
    Register: () => import('@/components/Modals/Auth/Register'),
  }
}
</script>