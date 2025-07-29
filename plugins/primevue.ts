import PrimeVue from 'primevue/config'
import ProgressBar from 'primevue/progressbar'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.component('ProgressBar', ProgressBar)
})
