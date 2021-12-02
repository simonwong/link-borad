const { spawn } = require('child_process')

// @ts-check
/**
 * @type {import('@yueqing/webpack/lib/build/interface').UserConfig}
 */
module.exports = {
  target: ['web', 'electron16-renderer'],
  htmlWebpack: {
    title: 'link-board',
    meta: {
      'Content-Security-Policy': {
        'http-equiv': 'X-UA-Compatible',
        content: "default-src 'self'; script-src 'self'",
      },
      viewport: undefined,
    },
  },
  devServer: {
    static: {
      publicPath: '/',
    },
    onBeforeSetupMiddleware() {
      console.log(`Starting Main Process...`)

      spawn('pnpm', ['start:main'], {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', code => process.exit(code))
        .on('error', spawnErr => console.error(spawnErr))
    },
  },
}
