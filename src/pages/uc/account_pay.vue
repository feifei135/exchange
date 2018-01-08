<template>
    <!-- 账户付款 -->
    <div class="c_account_pay">
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
                    <div class="ucm_title">账户付款</div>
                    <!-- 账户付款信息 -->
                    <div class="pay_cont">
                        <div class="pay_cont_top">
                            <p>支付订单(ZL920348034134)款项</p>
                            <p>需支付金额：<i class="clr_red">8000:00</i></p>
                            <p>手续费：100:00</p>
                        </div>
                        <div class="pay_cont_bom">
                            <p>本次您总共需要支付8000.00元，其中，款项8000.00元（含已冻结的履约保证金100.00元）</p>
                            <p>请输入支付密码：<input type="text"> <a href="#" class="forget">忘记支付密码</a></p>
                            <p>当前您的账户余额：82000:00元</p>
                            <a href="#" class="uc_btn">立即支付</a>
                        </div>

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

    export default{
        data(){
            return {}
        },
        methods:{},
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    /* 账户支付 */
    .uc_main .pay_cont {
        border: 1px solid #ccc;
    }
    .uc_main .pay_cont_top,
    .uc_main .pay_cont_bom{
        padding: 20px 60px;
    }
    .uc_main .pay_cont_top p,
    .uc_main .pay_cont_bom p{
        padding: 10px 0;
    }
    .uc_main .pay_cont_bom{
        background-color: #f6f6f6;
    }
    .uc_main .pay_cont_bom input{
        width: 120px;
        margin-right: 10px;
        border: 1px solid #e0e0e0;
    }
    .uc_main .uc_btn{
        display: inline-block;
        padding: 5px 30px;
        color: #fff;
        font-size: 16px;
        margin: 50px 0 20px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        background-color: #f02d2d;
    }
    .uc_main .forget {
        color: #40709f;
    }
</style>