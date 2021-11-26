interface GlobalDarkMode {
  toggle: () => Promise<any>
  system: () => Promise<any>
}

declare global {
  interface Window {
    darkMode: GlobalDarkMode
  }
}
