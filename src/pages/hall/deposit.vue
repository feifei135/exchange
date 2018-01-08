<template>
    <!-- 缴纳保证金 -->
    <div class="c_deposit">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <!-- 订单布局1 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>保证金金额</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="deposit_cont ct1">
                        <span class="money">￥<i>1350元</i></span>
                    </div>
                </div>
            </div>
            <!-- 订单布局2 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>支付方式</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="deposit_cont ct2">
                        <p><label><input type="radio" value="0" name="payway" checked><span>证联支付</span></label></p>
                        <p><label><input type="radio" value="1" name="payway"><span>网银支付</span></label></p>
                        <p><label><input type="radio" value="2" name="payway"><span>第三方支付</span></label></p>
                        <p><label><input type="radio" value="3" name="payway"><span>其它支付方式</span></label></p>
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
    .c_deposit .lty_container{
        padding: 20px 0;
    }
    .c_deposit .deposit_cont{
        position: relative;
        width: 380px;
        margin: 0 auto;
    }
    .c_deposit .deposit_cont .fix{
        bottom: 0;
    }
    .c_deposit .deposit_cont.ct1{
        padding-top: 30px;
    }
    .c_deposit .deposit_cont.ct2{
        height: 230px;
    }
    .c_deposit .deposit_cont.ct2 p{
        height: 40px;
        line-height: 40px;
    }
    .c_deposit .deposit_cont.ct2 input{
        vertical-align: middle;
        margin-right: 20px;
    }
</style>