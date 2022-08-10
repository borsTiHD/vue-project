// Core + CSS
import PrimeVue from 'primevue/config' // Core
import 'primevue/resources/primevue.min.css' // Prime core css
import 'primeicons/primeicons.css' // Prime icons

// Themes
import 'primevue/resources/themes/saga-blue/theme.css' // Prime theme
// import 'primevue/resources/themes/vela-blue/theme.css' // Prime theme
// import 'primevue/resources/themes/tailwind-light/theme.css' // Tailwind theme
// import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css' // Bootstrap theme
// import 'primevue/resources/themes/mdc-light-indigo/theme.css'
// import 'primevue/resources/themes/mdc-dark-indigo/theme.css'

// Components
import Menubar from 'primevue/menubar'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export const PrimeVuePlugin ={
    install(app) {
        app.use(PrimeVue, {ripple: true})
        app.component('Menubar', Menubar)
        app.component('Card', Card)
        app.component('Dialog', Dialog)
        app.component('Button', Button)
        app.component('InputText', InputText)
    }
}
