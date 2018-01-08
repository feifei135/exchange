<template>
    <!-- 下单页面 -->
    <div class="c_order_info">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <!-- 订单布局4 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>订单信息</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="order_info_main">
                        <p>订单编号：ZF15110484589</p>
                        <p>订单金额：<span class="money">￥<i>1350元</i></span></p>
                        <div class="fix"><span class="btn_red">下一步</span></div>
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

    export default{
        data(){
            return {}
        },
        methods:{},
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
<style>
    @import "../../assets/css/hall/lty_order_box.css";
    .c_order_info .lty_container{
        padding: 20px 0;
    }
    .c_order_info .order_info_main{
        position: relative;
        width: 370px;
        height: 180px;
        margin: 0 auto;
        padding-top: 30px;
    }
</style>