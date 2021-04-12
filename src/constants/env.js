import Constants from 'expo-constants';

export const prodUrl = "http://www.omdbapi.com/?";
export const apiKey = "46bdfa25";
const ENV = {
  dev: {
    apiUrl: prodUrl,
    apiKey: apiKey
  },
  staging: {
    apiUrl: prodUrl,
    apiKey: apiKey
  },
  prod: {
    apiUrl: prodUrl,
    apiKey: apiKey
  }
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") return ENV.dev;
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);