const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    //ver porta do container no video dele ele passa a default 80 porém eu fiz com a 7171
    baseUrl: 'http://localhost:7171',
  },
  fixturesFolder: false,
  video: false,
})