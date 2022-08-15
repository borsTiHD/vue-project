import { useDarkModeStore } from '@/stores/darkmode'

export default function loadTheme(theme?: string) {
    // Load theme specified in 'theme' parameter
    // If no theme is specified, load the default theme for the current dark/light mode
    let themeLink
    if (theme === undefined) {
        const darkModeStore = useDarkModeStore()
        const isDarkMode = darkModeStore.isDarkMode
        themeLink = `themes/${isDarkMode ? 'mdc-dark-indigo' : 'mdc-light-indigo'}/theme.css`
    } else {
        themeLink = `themes/${theme}/theme.css`
    }

    // If no theme is specified, create a new link element and append it to the head
    const themeElement = document.getElementById('theme-link')
    if (themeElement) {
        themeElement.setAttribute('href', themeLink)
    } else {
        // Create a new link element to the stylesheet
        const link = document.createElement('link')
        link.id = 'theme-link'
        link.rel = 'stylesheet'
        link.href = themeLink
        document.head.appendChild(link)
    }
}
