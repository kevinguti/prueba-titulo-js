//playwright configuraciones

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'
    },
    projects:[
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
//        {
//            name: 'firefox',
//            use: { browserName: 'firefox' },
//        },
//        {
//            name: 'webkit',
//            use: { browserName: 'webkit' },
//        },
    ],
  testDir: './test',
  timeout: 30000,
  expect: {
      timeout: 5000
  },

};

module.exports = config;