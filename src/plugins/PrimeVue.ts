import type { App } from 'vue'

// Core + CSS
import PrimeVue from 'primevue/config' // Core
import 'primevue/resources/primevue.min.css' // Prime core css
import 'primeicons/primeicons.css' // Prime icons

// Themes are loaded through the "loadTheme" helper/composable
// This will make sure the theme pay attention to the selected dark mode
// import 'primevue/resources/themes/lara-light-blue/theme.css'
// import 'primevue/resources/themes/lara-dark-blue/theme.css'

// Components
import Tooltip from 'primevue/tooltip'
import Menubar from 'primevue/menubar'
import Sidebar from 'primevue/sidebar'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import Knob from 'primevue/knob'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import InputSwitch from 'primevue/inputswitch'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ContextMenu from 'primevue/contextmenu'

// Toast service + component
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

export const PrimeVuePlugin = {
    install(app: App) {
        app.use(PrimeVue, { ripple: true })
        app.directive('tooltip', Tooltip)
        app.component('Menubar', Menubar)
        app.component('Sidebar', Sidebar)
        app.component('Card', Card)
        app.component('Divider', Divider)
        app.component('Dialog', Dialog)
        app.component('Knob', Knob)
        app.component('Button', Button)
        app.component('Dropdown', Dropdown)
        app.component('InputText', InputText)
        app.component('InputSwitch', InputSwitch)
        app.component('DataTable', DataTable)
        app.component('Column', Column)
        app.component('ContextMenu', ContextMenu)

        // Toast service + component
        app.use(ToastService)
        app.component('Toast', Toast)
    }
}
