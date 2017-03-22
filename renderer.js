const Vue = require('./vue.js');
const VueRouter = require('vue-router');
const Recommended = require('./recommended');

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Recommended},
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');