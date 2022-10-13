<template>
  <div class="min-h-full flex">
    <div class="px-4 sm:px-6 lg:px-20 xl:px-24 flex flex-1 flex-col justify-center lg:flex-none">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">{{ { 'login': 'Faça login em sua conta', 'forgot': 'Recupere sua conta', 'register-1': 'Cadastre sua conta', 'register-2': 'Informe seu endereço' }[form] }}</h2>
        <!-- Login -->
        <form @submit.prevent="signin" v-if="form === 'login'" class="mt-6">
          <!-- Email -->
          <Input v-model="login.email" name="email" label="Endereço de email" inputmode="email" :validations="{ email: true }" :disabled="!!loading" :error="err" />
          <!-- Senha -->
          <Input v-model="login.password" name="password" label="Senha" inputmode="password" class="mt-6" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <div class="mt-3 flex items-center justify-end">
            <button @click="form = 'forgot'" type="button" class="text-sm font-medium text-purple-600 hover:text-purple-500">Esqueceu sua senha?</button>
          </div>
          <!-- Ações -->
          <Button text="Entrar" type="submit" class="mt-4" :loading="loading" />
          <button @click="form = 'register-1'" type="button" class="mt-6 w-full text-sm text-center font-medium text-purple-600 hover:text-purple-500">Ainda não possui conta?</button>
        </form>
        <!-- Registro (Etapa 1) -->
        <form @submit.prevent="next_signup" v-else-if="form === 'register-1'" class="mt-6">
          <!-- Nome completo -->
          <Input v-model="register.name" name="name" label="Nome completo" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Email -->
          <Input v-model="register.email" name="email" label="Endereço de email" inputmode="email" class="my-6" :validations="{ email: true }" :disabled="!!loading" :error="err" />
          <!-- Senha -->
          <Input v-model="register.password" name="password" label="Senha" inputmode="password" :validations="{ required: true }" :disabled="!!loading" :error="err" />
          <!-- Ações -->
          <Button text="Próximo" type="submit" class="mt-8" :loading="loading" />
          <button @click="form = 'login'" type="button" class="mt-6 w-full text-sm text-center font-medium text-purple-600 hover:text-purple-500">Já possui conta?</button>
        </form>
        <!-- Registro (Etapa 2) -->
        <form @submit.prevent="signup" v-else-if="form === 'register-2'" class="mt-6">
          <!-- CEP -->
          <Input v-model="register.address.postalcode" name="postalcode" label="CEP" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" @change="getAddress" />
          <!-- Logradouro e número -->
          <div class="my-6 grid grid-cols-2 gap-5">
            <Input v-model="register.address.street" name="street" label="Logradouro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
            <Input v-model="register.address.number" name="number" label="Número" inputmode="number" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          </div>
          <!-- Bairro -->
          <Input v-model="register.address.neighborhood" name="neighborhood" label="Bairro" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
          <!-- Cidade e estado -->
          <div class="mt-6 grid grid-cols-2 gap-5">
            <Input v-model="register.address.city" name="city" label="Cidade" :validations="{ required: true }" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" />
            <Select v-model="register.address.state" name="state" required label="Estado" :loading="loading === 'ADDRESS'" :disabled="!!loading" :error="err" :values="['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']" maxheight="10rem" />
          </div>
          <Button text="Cadastrar" type="submit" class="mt-8" :loading="!!loading" />
          <button @click="form = 'register-1'" type="button" class="mt-6 w-full text-sm text-center font-medium text-purple-600 hover:text-purple-500">Voltar</button>
        </form>
        <!-- Esqueci minha senha -->
        <form @submit.prevent="recover" v-else-if="form === 'forgot'" class="mt-6">
          <!-- Email -->
          <Input v-model="forgot.email" name="email" label="Endereço de email" inputmode="email" :validations="{ email: true }" :disabled="!!loading" :error="err" />
          <Button text="Recuperar" type="submit" class="mt-8" :loading="!!loading" />
          <button @click="form = 'login'" type="button" class="mt-6 w-full text-sm text-center font-medium text-purple-600 hover:text-purple-500">Voltar</button>
        </form>
      </div>
    </div>
    <!-- Fundo -->
    <div class="w-0 relative hidden flex-1 lg:block">
      <div class="absolute inset-0 h-full w-full bg-purple-600 opacity-20" style="z-index: 1" />
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="Fundo">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { auth, UsersColl } from '@/firebase'

export default {
  data() { return {
    form: 'login',
    loading: false,
    forgot: { email: ''},
    err: { show: false, list: {} },
    logged: auth.currentUser || null,
    login: { email: '', password: '' },
    register: { name: '', email: '', password: '', address: { number: '', postalcode: '', street: '', neighborhood: '', city: '', state: '' } },
  } },
  
  components: {
    Input: () => import('@/components/Inputs/Default'),
    Select: () => import('@/components/Inputs/Select'),
    Button: () => import('@/components/Buttons/Default'),
  },

  mounted() { if (auth?.currentUser?.uid || '') { this.$router.replace('/') } },

  methods: {
    async getAddress() {
      if (this.register.address.postalcode.length < 7) { this.register.address = { number: '', postalcode: '', street: '', neighborhood: '', city: '', state: '' }; return }
      
      this.loading = 'ADDRESS'
      await axios.get(`https://brasilapi.com.br/api/cep/v2/${this.register.address.postalcode}`)
      .then(result => {
        this.register.address.city = result.data.city || ''
        this.register.address.state = result.data.state || ''
        this.register.address.street = result.data.street || ''
        this.register.address.neighborhood = result.data.neighborhood || ''
      })
      .catch(() => {})
      this.loading = false
    },

    async signin() {
      this.loading = true
      await auth.signInWithEmailAndPassword(this.login.email, this.login.password)
      .then(() => { this.$toast.success('Login efetuado com sucesso') })
      .catch(err => this.$toast.error({ 
        'auth/invalid-email': 'E-mail inválido, tente novamente', 
        'auth/user-disabled': 'Conta desativada, entre em contato', 
        'auth/user-not-found': 'Conta não localizada, tente novamente', 
        'auth/wrong-password': 'Senha incorreta, tente novamente' }[err.code] || 'Erro ao entrar, tente novamente'))
      this.loading = false
    },

    next_signup() {
      this.err.show = false
      for (const field in this.err.list) { if (this.err.list[field]) { this.err.show = true; break }  }
      if (this.err.show) { this.$toast.error('Dados pendentes') } else { this.form = 'register-2' }
    },

    async signup() {
      this.err.show = false
      for (const field in this.err.list) { if (this.err.list[field]) { this.err.show = true; break } }
      if (this.err.show) { this.$toast.error('Dados pendentes'); return }

      this.loading = true
      await auth.createUserWithEmailAndPassword(this.register.email, this.register.password)
      .then(async result => {
        await UsersColl.doc(result.user.uid).set({
          Name: this.register.name || '',
          Email: this.register.email || '',
          Address: { Number: this.register.address.number || '', PostalCode: this.register.address.postalcode || '', Street: this.register.address.street || '', Neighborhood: this.register.address.neighborhood || '', City: this.register.address.city || '', State: this.register.address.state || '' },
        })
        this.$toast.success('Conta criada com sucesso')
      })
      .catch(err => { 
        this.$toast.error({ 
          'auth/invalid-email': 'E-mail inválido, tente novamente', 
          'auth/email-already-in-use': 'E-mail já vinculado, tente novamente', 
          'auth/weak-password': 'Senha fraca, tente novamente' 
        }[err.code] || err.response?.data?.message || 'Ocorreu um erro, tente novamente')
      })
      this.loading = false
    },

    async recover() {
      if (!this.forgot.email) { return }
      this.loading = true
      auth.sendPasswordResetEmail(this.forgot.email).then(() => { this.$toast.success('Email de recuperação enviado.'), this.forgot.email = ''})
      .catch((err) => {
        this.$toast.error({ 
          'auth/user-not-found': 'Conta não localizada, tente novamente', 
        }[err.code] || err.response?.data?.message || 'Não foi possível concluir a operação')
      })
      this.loading = false
    },
  },

  watch: { '$store.state.user': async function(val) { if (val?.Name) { this.$router.replace('/') } } }
}
</script>