const Vue = require('./vue.js');
const VueRouter = require('vue-router');
const Recommended = require('./components/recommended/recommended.js');

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