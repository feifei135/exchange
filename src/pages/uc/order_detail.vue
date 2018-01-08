<template>
    <!-- 违约详情 -->
    <div class="c_order_detail">
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
                    <div class="ucm_title">订单信息</div>
                    <dl class="dtl_item">
                        <dt>订单状态：{{orderInfo.deal_status}}</dt>
                        <dd class="clearfix">
                            <span>订单编号：{{orderInfo.deal_id}}</span>
                            <span>挂单id：{{orderInfo.listing_id}}</span>
                            <span>单价：{{orderInfo.deal_price}}/吨</span>
                            <span>挂单名称：{{orderInfo.listing_title}}</span>
                            <span>升贴水：{{orderInfo.deal_premium_fee}}/吨</span>
                            <span>挂单数量：{{orderInfo.listing_qtt}}</span>
                            <span>订单数量：{{orderInfo.deal_qtt}}</span>
                            <span>溢短：{{orderInfo.over_flow_dif}}</span>
                            <span>挂单方式：{{orderInfo.deposit_type}}</span>
                            <span>买方：卖方违约,扣除履约保证金</span>
                            <span>卖方：卖方违约,扣除履约保证金</span>
                            <span>创建时间：{{orderInfo.deal_date}}</span>
                        </dd>
                    </dl>
                    <dl class="dtl_item">
                        <dt>交收信息</dt>
                        <dd class="clearfix">
                            <span>交收批次：1</span>
                            <span>挂单名称：XXX</span>
                            <span>交收数量：100</span>
                            <span>备款备货期：2017-04-30</span>
                            <span class="full">备注：无</span>
                        </dd>
                    </dl>
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
                orderInfo:''
            }
        },
        mounted(){
            this.getInfoById();
        },
        methods:{
            getInfoById(){
                /* 我的订单 */
                axios.post(this.$store.state.api, {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": "DoDealOrderQry"
                    },
                    "body": {
                        "clientId":this.$store.state.clientId,
                        "dealId":this.$route.params.id
                    }
                }).then((response) => {
                    this.orderInfo = response.data.body[0].data[0];
                });
            }
        },
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_detail_lty.css";
</style>