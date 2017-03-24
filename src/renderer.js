const Vue = require('./vue.js');
const VueRouter = require('vue-router');
const routes = require('./routes');
const store = require('./store');

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes
  })
}).$mount('#app');