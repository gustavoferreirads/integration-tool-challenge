const connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic('dist')).listen(process.env.PORT || 3000, () => {
  console.log('Server running on ', process.env.PORT || 3000);
});