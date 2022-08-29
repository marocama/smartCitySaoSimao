<template>
    <modal id="trash" width="40%">
      <Input v-model="form.name" name="name" label="Nome Completo" required :loading="loading" />
      <Input v-model="form.phone" name="phone" label="Telefone" required class="mt-1" :loading="loading" />
      <Input v-model="form.homeAddress" name="homeAddress" label="Endereço Residencial" required class="mt-1" :loading="loading" />
      <Input v-model="form.destinationAddress" name="destinationAddress" label="Endereço de Destino" required class="mt-1" :loading="loading" />
      <!--Data-->
      <div class="mt-1 grid grid-cols-2 gap-1">
        <Input v-model="form.date" name="date" label="Data" type="date" required :loading="loading" />
        <Input v-model="form.time" name="time" label="Horário" type="time" required :loading="loading" />
      </div>
      <!--Acompanhantes-->
      <div class="mt-2 flex items-center justify-between">
        <span class="flex-grow flex flex-col">
          <span class="text-sm font-medium text-gray-900" id="availability-label">Deseja levar Acompanhantes?</span>
          <span class="text-sm text-gray-500" id="availability-description">Marque essa opção caso você não vá viajar sozinho.</span>
        </span>
        <button @click="form.companion = !form.companion" type="button" :class="form.companion ? 'bg-indigo-600' : 'bg-gray-200'" class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
          <span aria-hidden="true" :class="form.companion ? 'translate-x-5' : 'translate-x-0'" class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
        </button>
      </div>
      <!--Observações-->
      <Input v-model="form.observations" name="observations" label="Observações" :rows="4" class="mt-1.5" :loading="loading" />
      <Button @click="save" type="submit" text="Agendar" :loading="loading"></Button>
    </modal>
  </template>
  
  <script>
  import {  } from '@/firebase'
  
  export default {
    components: {
      Input: () => import('@/components/Inputs/Default'),
      Button: () => import('@/components/Buttons/Default'),
    },
    data() { return {
      form: {
        name: '',
        phone: '',
        homeAddress: '',
        destinationAddress: '',
        date: '',
        time: '',
        message: '',
        companion: false,
      },
      loading: false,
    } },
  
    
  }
  </script>