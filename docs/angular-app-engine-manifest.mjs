
export default {
  basePath: '/',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./server/main.server.mjs')
  },
};
