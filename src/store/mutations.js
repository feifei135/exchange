/**
 * Created by wuwc on 2017/6/9.
 */
import {
    IS_LOGIN,
    SESSION_ID,
    CLIENT_ID,
    USER_ID,
    USER_NAME,
    USER_STATUS,
    BIZ_NAME,
    API,
    LOOP_SCROLL_LIST,
    ALL_TEA_LIST,
    ALL_AUC_LIST,
    ALL_DEAL_LIST,
    ALL_NEWS_LIST,
    NOTICE_LIST,
    PROMOTE_INFO
} from './mutation-type'

export default {
    [IS_LOGIN](state,bool){
        state.isLogin = bool;
    },
    [SESSION_ID](state,sessionId){
        state.sessionId = sessionId;
    },
    [CLIENT_ID](state,clientId){
        state.clientId = clientId;
    },
    [USER_ID](state,userId){
        state.userId = userId;
    },
    [USER_NAME](state,userName){
        state.userName = userName;
    },
    [USER_STATUS](state,userStatus){
        state.userStatus = userStatus;
    },
    [BIZ_NAME](state,bizName){
        state.bizName = bizName;
    },
    [API](state,api){
        state.api = api;
    },
    [LOOP_SCROLL_LIST](state,list){
        state.loopScrollList = list;
    },
    [ALL_TEA_LIST](state,list){
        state.allTeaList = list;
    },
    [ALL_AUC_LIST](state,list){
        state.allAucList = list;
    },
    [ALL_DEAL_LIST](state,list){
        state.allDealList = list;
    },
    [ALL_NEWS_LIST](state,list){
        state.allNewsList = list;
    },
    [NOTICE_LIST](state,list){
        state.noticeList = list;
    },
    [PROMOTE_INFO](state,list){
        state.promoteInfo = list;
    }
}