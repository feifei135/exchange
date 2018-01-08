/**
 * Created by wuwc on 2017/6/9.
 */
import axios from 'axios'
import * as types from './mutation-type'
import Cookies from 'js-cookie'

const args = (t,b)=>{
    return {
        "head": {
            "sessionId":"000000",
            "operatorType":t
        },
        "body": b
    }
};



/* 异步操作 */
export default  {
    signOut({commit,state}){
        Cookies.remove("sessionId");
        Cookies.remove("clientId");
        Cookies.remove("userId");
        Cookies.remove("userName");
        Cookies.remove("bizName");
        window.location.reload();
    },
    getLoopScrollList({commit,state}){
        axios.post(state.api,args("DoContractInfoQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.LOOP_SCROLL_LIST,result);
            }
        });
    },
    getAllTeaList({commit,state}){
        /* 茶列表 */
        axios.post(state.api,args("DoListingCommnInitQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.ALL_TEA_LIST,result);
            }
        });
    },
    getAllAucList({commit,state}){
        /* 竞价列表 */
        axios.post(state.api,args("DoListingBidQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.ALL_AUC_LIST,result);
            }
        });
    },
    getAllDealList({commit,state}){
        /* 成交列表 */
        axios.post(state.api,args("DoListingDealQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.ALL_DEAL_LIST,result);
            }
        });
    },
    getAllNewsList({commit,state}){
        /* 新鲜资讯列表 */
        axios.post(state.api,args("DoListingNewsQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.ALL_NEWS_LIST,result);
            }
        });
    },
    getNoticeList({commit,state}){
        /* 竞拍通告 */
        axios.post(state.api,args("DoListingBidNoticeQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.NOTICE_LIST,result);
            }
        });
    },
    getPromoteInfo({commit,state}){
        /* 品牌推广 */
        axios.post(state.api,args("DoPromoteInfoQry",{})).then(function (response) {
            let result = response.data.body;
            if(result){
                commit(types.PROMOTE_INFO,result);
            }
        });
    }
}