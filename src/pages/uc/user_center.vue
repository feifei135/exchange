<template>
    <!-- 账户付款 -->
    <div class="c_user_center">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <div class="g_wrap">
                <!-- 侧边栏 -->
                <uc-sidebar></uc-sidebar>
                <!-- 用户中心content区域 -->
                <div class="uc_main">
                    <!-- uc_main_title -->
                    <div class="ucm_title">
                        <div class="ucm_title_lt">
                            <a href="#">会员中心</a>
                            <a href="#">系统消息</a>
                        </div>
                        <div class="ucm_title_rt">
                            <a href="#/outin_money" class="in_m">出入金</a>
                        </div>
                    </div>
                    <!-- ucenter -->
                    <div class="ucenter">
                        <div class="my_info">
                            <div class="my_photo"><img :src="ucInfo.headPoraitUrl"></div>
                            <div class="my_name">{{ucInfo.company_name}}</div>
                        </div>
                        <dl class="uc_item my_money">
                            <dt>我的资金</dt>
                            <dd>
                                <div class="ky_yu_e">
                                    <h3>可用余额：</h3>
                                    <p>{{ucInfo.avlbMny}}</p>
                                </div>
                                <div class="dj_yu_e">
                                    <h3>冻结余额：</h3>
                                    <p>{{ucInfo.frzMny}}</p>
                                </div>
                                <div class="zh_yu_e">
                                    <h3>账户余额：</h3>
                                    <p>{{ucInfo.balance}}</p>
                                </div>
                            </dd>
                        </dl>

                        <dl class="uc_item">
                            <dt>我的议价 <a href="#/bargain_manager" class="more">查看更多</a></dt>
                            <dd>
                                <div class="row" v-for="item in bargainInfo">
                                    <span class="cell1">{{item.listing_title}}</span>
                                    <span class="cell2">{{item.listing_price}}</span>
                                    <span class="cell3">{{item.listing_qtt}}</span>
                                    <span class="cell4">{{item.quote_premium_fee}}</span>
                                    <span class="cell5">{{item.quote_status}}</span>
                                    <span class="cell6"><a :href="'#/bargain_detail/'+item.quote_order_id">进入详情</a></span>
                                </div>
                            </dd>
                        </dl>

                        <dl class="uc_item">
                            <dt>我的订单 <a href="#/order_manager" class="more">查看更多</a></dt>
                            <dd>
                                <div class="row" v-for="item in orderInfo">
                                    <span class="cell1">{{item.deal_id}}</span>
                                    <span class="cell2">{{item.deal_price}}</span>
                                    <span class="cell3">{{item.deal_qtt}}</span>
                                    <span class="cell4">{{item.deal_premium_fee}}</span>
                                    <span class="cell5">{{item.deal_status}}</span>
                                    <span class="cell6"><a :href="'#/order_detail/'+item.deal_id">进入详情</a></span>
                                </div>
                            </dd>
                        </dl>

                        <dl class="uc_item my_focus">
                            <dt>我的关注 <a href="#" class="more">查看更多</a></dt>
                            <dd class="clearfix">
                                <div class="figure" v-for="item in focusInfo">
                                    <img :src="item.pictureUrl">
                                    <h3>{{item.listingTitle}}</h3>
                                    <p>当前价：<i>{{item.listingPrice}}/吨</i></p>
                                </div>
                            </dd>
                        </dl>

                        <dl class="uc_item my_foot">
                            <dt>我的足迹 <a href="#" class="more">查看更多</a></dt>
                            <dd class="clearfix">
                                <div class="figure" v-for="item in footmarkInfo">
                                    <img :src="item.pictureUrl">
                                    <h3>{{item.listingTitle}}</h3>
                                    <p>当前价：<i>{{item.listingPrice}}/吨</i></p>
                                </div>
                            </dd>
                        </dl>

                    </div>

                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import UcSidebar from './index/uc_sidebar.vue'

    import axios from 'axios'

    export default{
        data(){
            return {
                ucInfo: {},
                bargainInfo:[],
                orderInfo:[],
                focusInfo:[],
                footmarkInfo:[]
            }
        },
        mounted(){
            this.getUcInfo();
            this.getBargainInfo();
            this.getOrderInfo();
            this.myFocus();
            this.myFootmark();
        },
        methods: {
            args(t, b){
                return {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": t
                    },
                    "body": b
                }
            },
            getUcInfo(){
                /* 用户信息 */
                axios.post(this.$store.state.api, this.args("DoClientInfoQry", {
                    "clientId":this.$store.state.clientId
                })).then((response) => {
                    let result = response.data.body[0];
                    if (result) {
                        this.ucInfo = result;
                    }
                });
            },
            getBargainInfo(){
                /* 议价信息 */
                axios.post(this.$store.state.api, this.args("DoQuoteOrderInfoQry", {
                    "clientId":this.$store.state.clientId
                })).then((response) => {
                    let result = response.data.body[0].data;
                    if(result){
                        this.bargainInfo = result.slice(0,2);
                    }
                });
            },
            getOrderInfo(){
                /* 我的订单 */
                axios.post(this.$store.state.api, {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": "DoDealOrderQry"
                    },
                    "body": {
                        "clientId":this.$store.state.clientId
                    }
                }).then((response) => {
                    let result = response.data.body[0].data;
                    if(result){this.orderInfo = result.slice(0,2);}

                    console.log(this.orderInfo)
                });
            },
            myFocus(){
                /* 我的关注 */
                axios.post(this.$store.state.api, this.args("DoMyAttentionQry", {
                    "clientId":this.$store.state.clientId
                })).then((response) => {
                    let result = response.data.body;
                    if(result){
                        this.focusInfo = result;
                    }
                });
            },
            myFootmark(){
                /* 我的足迹 */
                axios.post(this.$store.state.api, this.args("DoMyFootprintQry", {
                    "clientId":this.$store.state.clientId
                })).then((response) => {
                    let result = response.data.body;
                    if(result){
                        this.footmarkInfo = result;
                    }
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    .c_user_center .ucm_title_lt {
        float: left;
    }

    .c_user_center .ucm_title .ucm_title_lt a {
        display: inline-block;
        float: none;
        border: none;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        text-align: left;
    }

    .c_user_center .ucm_title .ucm_title_rt a {
        width: 70px;
        color: #fff;
        border: none;
        margin-left: 10px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }

    .c_user_center .in_m {
        background-color: #ff7200;
    }

    .c_user_center .ot_m {
        background-color: #3aa9f2;
    }

    .c_user_center .ucm_title {
        margin-bottom: 30px !important;
    }

    /* 个人信息 */
    .c_user_center .my_info {
        height: 60px;
    }

    .c_user_center .my_info .my_photo {
        width: 60px;
        height: 60px;
        float: left;
        overflow: hidden;
    }

    .c_user_center .my_info .my_photo img {
        width: 60px;
        height: 60px;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
    }

    .c_user_center .my_info .my_name {
        width: 650px;
        line-height: 60px;
        float: left;
        margin-left: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    /* 我的资金 */
    .c_user_center .uc_item {
        padding: 30px 0;
        border-bottom: 1px solid #e0e0e0;
    }

    .c_user_center .uc_item dt {
        margin-bottom: 50px;
        font-size: 14px;
        font-weight: 600;
    }

    .c_user_center .my_money dd > div {
        display: inline-block;
        width: 30%;
    }

    .c_user_center .my_money dd h3 {
        color: #777;
        margin-bottom: 10px;
    }

    .c_user_center .my_money dd p {
        color: #f02d2d;
    }

    .uc_item .more {
        float: right;
        color: #999;
        font-size: 12px;
        font-weight: normal;
    }

    .uc_item a:hover {
        color: #3aa9f2;
    }

    .uc_item .row {
        height: 30px;
        line-height: 30px;
        margin-bottom: 25px;
    }
    .uc_item .row:last-child {
        margin-bottom: 0;
    }
    .uc_item .row span {
        display: block;
        float: left;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .uc_item .row .cell1 {
        width: 160px;
    }
    .uc_item .row .cell2 {
        width: 110px;
        margin: 0 15px;
    }
    .uc_item .row .cell3 {
        width: 110px;
    }
    .uc_item .row .cell4 {
        width: 110px;
    }
    .uc_item .row .cell5 {
        width: 110px;
    }
    .uc_item .row .cell6 {
        width: 120px;
        text-align: right;
    }
    .uc_item .figure {
        width: 120px;
        float: left;
        margin: 0 15px 20px 0;
    }
    .uc_item .figure img {
        width: 100%;
        height: 80px;
    }
    .uc_item .figure h3 {
        color: #555;
        font-size: 12px;
        margin: 8px 0 2px;
    }
    .uc_item .figure p {
        color: #999;
        font-size: 12px;
    }
    .uc_item .figure p i {
        color: #f02d2d;
    }
    .uc_item.my_focus {
        padding-bottom: 10px;
    }
    .uc_item.my_foot {
        padding-bottom: 0;
        border-bottom: none;
    }
</style>