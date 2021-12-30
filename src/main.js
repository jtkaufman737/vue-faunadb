import Vue from 'vue'
import App from './App.vue'
import faunadb from 'faunadb'
import './registerServiceWorker'
import router from './router'

const db = new faunadb.Client({
    secret: process.env.VUE_APP_FAUNADB_SECRET, 
    domain: 'db.us.fauna.com',
    // port: 443,
    // scheme: "https"
});

Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$q = faunadb.query

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
