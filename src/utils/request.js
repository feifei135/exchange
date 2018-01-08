/**
 * Created by wuwc on 2017/6/16.
 */

import axios from 'axios'
import store from '../store/index'

const args = (t, b) => {
    return {
        "head": {
            "sessionId": store.state.sessionId,
            "operatorType": t
        },
        "body": b
    }
};

/* 获取用户信息 */
export function getUserInfo(){
    axios.post(store.state.api,args("DoClientInfoQry", {
        "clientId":store.state.clientId
    })).then((response) => {
        console.log(response.data.body[0])
        return response.data.body[0];
    });
}

/* 获取议价数据 */
export function getBargainData() {
    axios.post(store.state.api,args("DoQuoteOrderInfoQry", {
        "clientId":store.state.clientId
    })).then((response) => {
        if(response.status == 200) return response.data;
    });
}

/* 获取订单数据 */
export function getOrderData(pageIndex, pageSize) {
    pageIndex = pageIndex || 1;
    pageSize = pageSize || 2;
    axios.post(store.state.api, args("DoListingCommnQry", {
        "clientId": store.state.clientId,
        "pageSize": pageSize,
        "pageCount": pageIndex
    })).then((response) => {
        if(response.status == 200) return response.data;
    });
}

/* 获取我的关注 */
export function getMyFocus() {
    axios.post(store.state.api,args("DoMyAttentionQry", {
        "clientId":store.state.clientId
    })).then((response) => {
        if(response.status == 200) return response.data;
    });
}

/* 获取我的足迹 */
export function getMyFootmark() {
    axios.post(store.state.api, args("DoMyFootprintQry", {
        "clientId":store.state.clientId
    })).then((response) => {
        if(response.status == 200) return response.data;
    });
}
