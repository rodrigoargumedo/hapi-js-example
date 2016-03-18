'use strict';

const Blipp = require('blipp');
const Hapi = require("hapi");

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000, host: process.env.IP || "http://localhost" });

function firstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

server.route({
   method: 'GET',
   path: '/',
   handler: function(request, reply) {
       reply("Welcome to Hapi");
   }
});

server.route({
   method: 'GET',
   path: '/{name}',
   handler: function(request, reply) {
      reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
   }
});

server.start((err) => {
   if (err) {
       throw err;
   }
   console.log('Server running at:', server.info.uri);
   });

server.register({ register: Blipp, options: {} }, function(err) {
});