<template>
    <!-- 账户付款 -->
    <div class="c_find_pay_pwd">
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
                    <div class="ucm_title">忘记支付密码 </div>
                    <form class="common_form" @submit.prevent="findPayPwdSubmit">
                        <div class="fm_item">
                            <label>请输入卡号：</label>
                            <input type="text" v-model="card" name="card" v-validate:card.initial="'required'" data-vv-as="卡号">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('card')" class="help is-danger">{{ errors.first('card') }}</span></div>
                        <div class="fm_item fm_vcode">
                            <label>请输入绑定手机号：</label>
                            <input type="text" v-model="tel" name="tel" v-validate:tel.initial="'required'" data-vv-as="手机号">
                            <span class="btn_vcode">获取验证码</span>
                        </div>
                        <div class="fm_err"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span></div>
                        <div class="fm_item">
                            <label>请输入新密码：</label>
                            <input type="text" v-model="newpwd" name="newpwd" v-validate:newpwd.initial="'required'" data-vv-as="新密码">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('newpwd')" class="help is-danger">{{ errors.first('newpwd') }}</span></div>
                        <div class="fm_item">
                            <label>请输入手机验证码：</label>
                            <input type="text" v-model="vcode" name="vcode" v-validate:vcode.initial="'required'" data-vv-as="手机验证码">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('vcode')" class="help is-danger">{{ errors.first('vcode') }}</span></div>
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
                card:'',
                tel:'',
                newpwd:'',
                vcode:''
            }
        },
        methods:{
            findPayPwdSubmit(){
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
    .c_find_pay_pwd .g_btn{
        margin-left: 130px;
    }
    .c_find_pay_pwd .fm_item label{
        width: 130px !important;
    }
    .c_find_pay_pwd .fm_item input{
        width: 200px !important;
    }
    .c_find_pay_pwd .fm_err{
        text-indent: 130px;
    }
</style>