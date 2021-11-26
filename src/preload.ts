// eslint-disable-next-line import/no-extraneous-dependencies
import { contextBridge, ipcRenderer } from 'electron'

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector: string, text: string) => {
//     const element = document.getElementById(selector)
//     if (element) {
//       element.innerText = text
//     }
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency] as string)
//   }
// })

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
})
