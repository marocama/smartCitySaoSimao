<template>
  <modal id="login">
    CONTEUDO DO LOGIN
    <button @click="$store.dispatch('modals/close', 'login'), $store.dispatch('modals/open', 'register')" type="button">ja tem conta? cadastre-se</button>
  </modal>
</template>