const Vue = require('./vue.js');
const VueRouter = require('vue-router');
const routes = require('./routes');

Vue.use(VueRouter);

new Vue({
  router: new VueRouter({
    routes
  })
}).$mount('#app');