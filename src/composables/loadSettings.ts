import { useDarkModeStore } from '@/stores/darkmode'
import { useTeamStore } from '@/stores/teams'
import { useAutoReloadStore } from '@/stores/autoreload'

export default function loadSettings() {
    console.log('[App] -> Load Settings on Startup')

    // Darkmode
    const darkModeStore = useDarkModeStore()
    const darkmode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? true : false // Check if darkmode is enabled by os or localstorage
    document.documentElement.classList.toggle('dark', darkmode) // Sets the darkmode class on the html element
    darkModeStore.setDarkMode(darkmode) // Set the darkmode state in the store

    // Team
    const teamStore = useTeamStore()
    const selectedTeam = localStorage.selectedTeam || false // Check selected team on startup - Default is set in the store
    if (selectedTeam) { teamStore.setSelectedTeam(selectedTeam) } // Set the selected team in the store

    // AutoReload
    const autoReloadStore = useAutoReloadStore()
    const autoreload = localStorage.autoreload || false // Checks autoreload from localstorage - Default is false
    autoReloadStore.setAutoReload(autoreload === 'true' ? true : false) // Set the autoreload state in the store
}
