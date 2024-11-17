const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

function getConfigurationByEnv(env) {
  const pathToConfigFile = path.resolve(`./cypress.env.${env}.json`);
    
    if (fs.existsSync(pathToConfigFile)) {
        console.log(`Loading config from: ${pathToConfigFile}`);
        return JSON.parse(fs.readFileSync(pathToConfigFile, 'utf-8'));
    } else {
        console.error(`Config file not found: ${pathToConfigFile}`);
        return {};
    }
}

module.exports = defineConfig({
  retries: { runMode: 1, openMode: 1 },
  video: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',
  e2e: {

    setupNodeEvents(on, config) {
      const environment = config.env.configFile || 'test';
            
            console.log(`Using environment: ${environment}`);
            const envConfig = getConfigurationByEnv(environment);
            config.env = { ...config.env, ...envConfig };
            if (envConfig.baseUrl) {
                config.baseUrl = envConfig.baseUrl;
            }

            return config;
        },
    baseUrl: "https://qauto.forstudy.space/",
    
  },


});
