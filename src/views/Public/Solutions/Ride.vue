<template>
  <div class="h-full overflow-hidden">
    <header class="p-4 sm:px-6 flex justify-between items-center bg-blue-50 border-b border-blue-200 shadow-sm rounded-t-lg">
      <div>
        <h3 class="text-blue-700 text-lg font-medium">Carona Solidária</h3>
        <p class="text-sm text-blue-400">Exibindo {{ items.length }} {{ items.length > 1 ? 'resultados' : 'resultado' }}</p>
      </div>
      <div class="inline-flex justify-start space-x-3">
        <button @click="$store.dispatch('modals/open', 'announce')" type="button" class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">Anunciar</button>
      </div>
    </header>
    <ul class="p-4 h-full w-full space-y-4 overflow-y-scroll">
      <li v-for="(item, index) in items" :key="index" class="block hover:bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="flex-shrink-0">
                <Avatar :id="item.User.Id" size="12" />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="truncate text-sm font-medium text-blue-700">{{ item.User.Name || 'Desconhecido' }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <svg class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" /></svg>
                    <span class="truncate">{{ item.OccursAt ? item.OccursAt.toDate().toLocaleString().slice(0, -3).split(' ').join(' às ') : 'Indefinido' }}</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div class="text-gray-700">
                    <p class="text-sm flex items-center">
                      <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" /></svg>
                      {{ item.To || 'Indefinido' }}
                    </p>
                    <p class="mt-2 flex items-center text-sm">
                      <svg class="mr-1.5 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" /></svg>
                      {{ item.From || 'Indefinido' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-blue-50 p-2 rounded-lg text-blue-700 font-semibold antialiased">
              <p>R$ 7,00</p>
            </div>
          </div>
      </li>
    </ul>
    <!-- Anunciar -->
    <modal id="announce" title="Anunciar" fullscreen>
      <div class="mt-2 mb-4 sm:w-80 space-y-3">
        <div>
          <label class="mb-1 block text-gray-700 text-xs font-normal antialiased truncate">Horário de partida</label>
          <Input v-model="form.OccursAt" name="startTime" inputmode="datetime-local" :loading="loading === 'SAVING'" :disabled="!!loading" />
        </div>
        <Input v-model="form.From" name="from" label="Local de Partida" placeholder="Bairro de Partida" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <Input v-model="form.To" name="to" label="Local de Destino" placeholder="Bairro de Destino" :loading="loading === 'SAVING'" :disabled="!!loading" />
        <InputMask v-model.lazy="form.Price" name="price" label="Preço" inputmode="numeric" placeholder="0,00" prefix="R$" :format="['#,##', '##,##']" :loading="loading === 'SAVING'" :disabled="!!loading" @change="formatPrice" />
      </div>
      <template #actions>
        <Button @click="$store.dispatch('modals/close', 'announce')" text="Salvar" class="mt-auto" />
      </template>
    </modal>
  </div>
</template>

<script>
import { auth, RidesColl } from '@/firebase'

export default {
  components: {
    Avatar: () => import('@/components/User/Avatar'),
    Input: () => import('@/components/Inputs/Default'),
    InputMask: () => import('@/components/Inputs/Mask'),
    Button: () => import('@/components/Buttons/Default'),
  },

  data() { return {
    items: [],
    loading: true,
    form: { OccursAt: '', From: '', To: '', Price: '0,00' },
  } },

  async mounted() {
    await RidesColl.get()
    .then(result => { console.log(result), this.items = result.docs.map(item => ({ id: item.id, ...item.data() })) })
    .catch(err => console.log(err))
    this.loading = false
  },

  methods: {
    formatPrice() {
      let decimal = '00'
      const split = this.form.Price.split(',')
      if ((split[1] || '').length === 1) { decimal = `${split[1]}0` } else if ((split[1] || '').length === 2) { decimal = split[1] }
      this.form.Price = `${split[0] || '0'},${decimal}`
    },

    async announce() {
      this.loading = 'SAVING'
      await RidesColl.add({
        ...this.form,
        CreatedAt: new Date(),
        ...(auth.currentUser && { User: auth.currentUser.uid }),
      })
      this.loading = false
    }
  }
}
</script>