const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rq9zsx",
  env: {},
  e2e: {
    setupNodeEvents(on, config) {
      animationDistanceThreshold: 5;
      arch: "x64";
      baseUrl: "https://testsheepnz.github.io/BasicCalculator.html#main-body";
      blockHosts: null;
      browsers: [
        {
          name: "chrome",
          family: "chromium",
          channel: "stable",
          displayName: "Chrome",
          version: "107.0.5304.107",
          path: "C:Program Files (x86)GoogleChromeApplicationchrome.exe",
          minSupportedVersion: 64,
          majorVersion: "107",
        },
        {
          name: "electron",
          channel: "stable",
          family: "chromium",
          displayName: "Electron",
          version: "106.0.5249.51",
          path: "",
          majorVersion: 106,
        },
      ];
      chromeWebSecurity: true;
      clientCertificates: [];
      defaultCommandTimeout: 4000;
      downloadsFolder: "cypress/downloads";
      defaultCommandTimeout: 30000;
      reporter: "cypress-mochawesome-reporter";
      reporterOptions: {
        reportDir: "cypress/reports";
        charts: true;
        reportPageTitle: "My Test Suite";
        embeddedScreenshots: true;
        inlineAssets: true;
      }
      video: false;
      screenshotFolder: "screenshots";
      excludeSpecPattern: "*.hot-update.js";
      execTimeout: 60000;
      experimentalFetchPolyfill: false;
      experimentalInteractiveRunEvents: false;
      experimentalModifyObstructiveThirdPartyCode: false;
      experimentalSessionAndOrigin: false;
      experimentalSingleTabRunMode: false;
      experimentalSourceRewriting: false;
      experimentalStudio: false;
      experimentalWebKitSupport: false;
      fileServerFolder: "";
      fixturesFolder: "cypress/fixtures";
      hosts: null;
      includeShadowDom: false;
      isInteractive: true;
      keystrokeDelay: 0;
      modifyObstructiveCode: true;
      nodeVersion: null;
      numTestsKeptInMemory: 50;
      pageLoadTimeout: 60000;
      platform: "win32";
      port: null;
      projectId: "rq9zsx";
      redirectionLimit: 20;
      reporter: "spec";
      reporterOptions: null;
      requestTimeout: 5000;
      resolvedNodePath: null;
      resolvedNodeVersion: null;
      responseTimeout: 30000;
      retries: {
        runMode: 0;
        openMode: 0;
      }
      screenshotOnRunFailure: true;
      screenshotsFolder: "cypress/screenshots";
      scrollBehavior: "top";
      slowTestThreshold: 10000;
      specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}";
      supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}";
      supportFolder: false;
      taskTimeout: 60000;
      testIsolation: null;
      trashAssetsBeforeRuns: true;
      userAgent: null;
      video: true;
      videoCompression: 32;
      videosFolder: "cypress/videos";
      videoUploadOnPasses: true;
      viewportHeight: 660;
      viewportWidth: 1000;
      waitForAnimations: true;
      watchForFileChanges: true;
    },
  },
});
