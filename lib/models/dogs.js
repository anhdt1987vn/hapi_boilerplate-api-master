 'use strict';

 module.exports = {
     identity: 'dogs',
     connection:'dogMng',
     attributes: {
       name: {
         type: 'string',
         required: true
       },
       type: {
         type: 'string',
         required: true
       }
     }
 };