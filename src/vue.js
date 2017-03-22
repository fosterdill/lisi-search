const env = require('../env.js');
module.exports = env.env === 'development' ? require('vue/dist/vue.js') : require('vue/dist/vue.min.js');