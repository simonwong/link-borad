interface GlobalDarkMode {
  toggle: () => Promise<any>
  system: () => Promise<any>
}

declare global {
  interface Window {
    darkMode: GlobalDarkMode
  }
}

declare module '*.scss' {
  const content: {
    [className: string]: string
  }
  export default content
}
