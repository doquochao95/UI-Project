const port = 7197;
// const ip = `${window.location.hostname}:${port}`;
const ip = `localhost:${port}`;

const apiUrl = `https://${ip}`;

export const environment = {
  production: true,
  appVersion: require('../../package.json').version,
  apiUrl: `${apiUrl}/api/`,
  baseUrl: `${apiUrl}/`,
  allowedDomains: [ip],
  disallowedRoutes: [`${ip}/api/auth`],
};
