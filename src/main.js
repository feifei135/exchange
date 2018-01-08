// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import './utils/validator'


/* All-Iview-UI */
import Datapicker from 'iview/src/components/date-picker';
import Page from 'iview/src/components/page';
import Modal from 'iview/src/components/modal';
import Rate from 'iview/src/components/rate';

/* All-Style */
import 'iview/dist/styles/iview.css';
import './assets/css/common/base.css'

/* All-Regist-Component */
Vue.component("calendar", Datapicker);
Vue.component("page", Page);
Vue.component("modal", Modal);
Vue.component("rate", Rate);


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.sessionId) {  // 通过vuex state获取当前的token是否存在
            next();
        }else {
            next({
                path: '/login',
                query: {to: to.fullPath}
            });
        }
    } else {
        next();
    }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
