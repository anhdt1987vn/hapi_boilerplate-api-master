'use strict';

module.exports = [
  {
    method: 'get',
    path: '/dogs',
    config: {
      tags: ['api'],
      handler: (request, reply) => {

        const Dogs = request.collections().dogs;

        reply(Dogs.find());
      }
    }
  },
  {
    method: 'post',
    path: '/dogs',
    config: {
      tags: ['api'],
      handler: (request, reply) => {

        const Dogs = request.collections().dogs;

        reply(Dogs.create({
          type: request.payload.type,
          name: request.payload.name
        }));
      }
    }
  },
];