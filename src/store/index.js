/**
 * Created by wuwc on 2017/6/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import Cookies from 'js-cookie';

Vue.use(Vuex);

/* 项目全局State */
const state = {
    isLogin: false,
    sessionId: Cookies.get("sessionId"),
    clientId: Cookies.get("clientId"),
    userId:Cookies.get("userId"),
    userName:Cookies.get("userName"),
    userStatus:Cookies.get("userStatus"),
    bizName:Cookies.get("bizName"),
    api: window.c.api,
    loopScrollList: [],
    allTeaList: [],
    allAucList: [],
    allDealList: [],
    allNewsList: [],
    noticeList: [],
    promoteInfo: []
};

/* Store实例 */
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})