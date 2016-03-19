'use strict';

const Blipp = require('blipp');
const Hapi = require("hapi");

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || "http://localhost" });

server.register(require("inert"), (err) => {
   if (err) {
      throw err;
   }
   server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
         reply.file('./public/index.html');
      }
   })
});

server.start((err) => {
   if (err) {
       throw err;
   }
   console.log('Server running at:', server.info.uri);
});

server.register({ register: Blipp, options: {} }, function(err) {
});