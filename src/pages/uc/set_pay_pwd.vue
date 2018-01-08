<template>
    <!-- 账户付款 -->
    <div class="c_set_pay_pwd">
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
                    <div class="ucm_title">支付密码设置 </div>
                    <form class="common_form" @submit.prevent="setPayPwdSubmit">
                        <div class="fm_item">
                            <label>密码：</label>
                            <input type="text" v-model="pwd" name="pwd" v-validate:pwd.initial="'required|min:6'" data-vv-as="密码">
                            <span class="tip">6-12位字母,数字</span>
                        </div>
                        <div class="fm_err"><span v-show="errors.has('pwd')" class="help is-danger">{{ errors.first('pwd') }}</span></div>
                        <div class="fm_item">
                            <label>确认密码：</label>
                            <input type="text" v-model="repwd" name="repwd" v-validate:repwd.initial="'required|confirmed:pwd'" data-vv-as="确认密码">
                            <span class="tip">6-12位字母,数字</span>
                        </div>
                        <div class="fm_err"><span v-show="errors.has('repwd')" class="help is-danger">{{ errors.first('repwd') }}</span></div>
                        <div class="fm_btn">
                            <button class="g_btn">保存</button>
                        </div>
                    </form>
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
            return {
                pwd: '',
                repwd:''
            }
        },
        methods:{
            setPayPwdSubmit(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                }).catch(() => {
                    console.log('Correct them errors!');
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
    @import "../../assets/css/uc/uc_form.css";
    .c_set_pay_pwd .g_btn{
        margin-left: 80px;
        padding: 5px 30px;

        background-color: #f02d2d;
    }
</style>