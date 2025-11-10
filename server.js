// simple server fallback for environments that prefer `node server.js` to preview the build
import serve from 'serve'
const server = serve('dist', { port: process.env.PORT || 3000, ignore: ['node_modules'] })
console.log('Serving dist on port', process.env.PORT || 3000)
