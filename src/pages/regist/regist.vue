<template>
    <div class="c_regist">
        <header-bar :isShowNav="isShowNav"></header-bar>
        <!-- 布局容器 -->
        <div class="lty_container">
            <!-- 布局：login -->
            <div class="lty_box" id="regist">
                <div class="box_top">会员注册 <span>已有账号？<a href="#/login">直接登录</a></span></div>
                <div class="server_error">{{serverErrMsg}}</div>
                <form @submit.prevent="registSubmit">
                    <div class="form_item">
                        <div class="icon icon_tel"></div>
                        <input type="text" v-model="tel" name="tel" v-validate:tel.initial="'required|tel'"
                               data-vv-as="手机号" placeholder="请输入手机号">
                    </div>
                    <div class="form_err"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span>
                    </div>
                    <div class="form_item">
                        <div class="icon icon_pwd"></div>
                        <input type="text" v-model="pwd" name="pwd" v-validate:pwd.initial="'required|min:6'"
                               data-vv-as="密码" placeholder="请输入密码">
                    </div>
                    <div class="form_err"><span v-show="errors.has('pwd')" class="help is-danger">{{ errors.first('pwd') }}</span>
                    </div>
                    <div class="form_item">
                        <div class="icon icon_pwd"></div>
                        <input type="text" v-model="repwd" name="repwd"
                               v-validate:repwd.initial="'required|confirmed:pwd'" data-vv-as="确认密码" placeholder="确认密码">
                    </div>
                    <div class="form_err"><span v-show="errors.has('repwd')" class="help is-danger">{{ errors.first('repwd') }}</span>
                    </div>
                    <div class="form_code">
                        <div class="ipt_code">
                            <div class="icon icon_code"></div>
                            <input type="text" v-model="vcode" name="vcode" v-validate:vcode.initial="'required'"
                                   data-vv-as="验证码" placeholder="请输入验证码">
                        </div>
                        <div class="btn_send" :class="{dis:sms.gray}" data-url="/sms" @click="sendSmsCode">
                            {{sms.text}}
                        </div>
                    </div>
                    <div class="form_err"><span v-show="errors.has('vcode')" class="help is-danger">{{ errors.first('vcode') }}</span>
                    </div>
                    <div class="form_bargin">
                        <input type="checkbox" checked="checked" name="bargin" class="bargin">
                        <span>同意并接受,</span>
                        <a href="#">注册用户协议</a>
                    </div>
                    <div class="form_err"></div>
                    <div class="form_btn">
                        <button type="submit" class="btn_regist">注册</button>
                    </div>
                </form>
                <p class="box_bom"><a href="#">忘记密码</a></p>
            </div>
        </div>
        <footer-bar></footer-bar>
        <success-modal msg="注册成功!" :isShow="isShowModal"></success-modal>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import SuccessModal from '../../components/success_modal'
    import axios from 'axios'
    export default {
        data(){
            return {
                isShowNav: false,
                isSubmit: true,
                isShowModal: false,
                serverErrMsg:'',
                sms: {
                    text: '发送验证码',
                    code: '',
                    time: '',
                    gray: false,
                    flag: true
                },
                tel: '',
                pwd: '',
                repwd: '',
                vcode: ''
            }
        },
        methods: {
            /* 表单提交函数 */
            registSubmit(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    /* 判断验证码是否正确 */
                    if(this.sms.code == this.vcode){
                        /* 判断验证码是否在有效时间内 */
                        if(this.smsExpires(new Date().getTime(),this.sms.time)){
                            /* 提交表单的锚 */
                            if(this.isSubmit) {
                                this.isSubmit = false;
                                axios.post(this.$store.state.api, {
                                    "head": {
                                        "sessionId": "000000",
                                        "operatorType": "DoAssociatorRegister"
                                    },
                                    "body": {
                                        "mbPhone": this.tel,
                                        "password": this.pwd,
                                        "passwordConfirm": this.repwd,
                                        "smscode": this.vcode
                                    }
                                }).then((response) => {
                                    this.serverErrMsg = '';
                                    this.isShowModal = true;
                                    let timer = setInterval(()=>{
                                        this.isShowModal = false;
                                        this.$router.push("/login");
                                        clearInterval(timer)
                                    },1000);
                                });
                            }
                        }else{
                            this.serverErrMsg = '验证码已过期';
                        }

                    }else{
                        this.serverErrMsg = '验证码不正确';
                    }
                }).catch(()=> {console.log('Correct them errors!');});
            },
            /* 倒计时函数 */
            sendSmsCode(){
                let tel_valid = this.fields.valid('tel');
                /* 点击发送验证码 */
                if (tel_valid) {
                    if(this.sms.flag){
                        this.sms.flag = false;
                        let t = 60;
                        /* 获取随机码和当前时间以及置灰按钮 */
                        this.sms.code = (Math.random() + "").substr(2, 6);
                        this.sms.time = new Date().getTime();
                        this.sms.gray = true;
                        console.log(this.sms.code);
                        console.log(this.sms.time);
                        let timer = setInterval(()=>{
                            if(t>-1){
                                this.sms.text = (t--) + 's';
                            }else{
                                clearInterval(timer);
                                this.sms.gray = false;
                                this.sms.text = '发送验证码';
                                this.sms.flag = true;
                            }
                        },1000);
                    }
                } else {
                    this.$validator.validate('tel',this.tel).catch(()=> {});
                }
            },
            /* 检测验证码是否在有效期函数 */
            smsExpires(n, o){
                return Math.floor((n - o) / 1000) < 120;
            },
        },
        components: {
            HeaderBar,
            FooterBar,
            SuccessModal
        }
    }
</script>
<style lang="less">
    @import '../../assets/css/login/ui_form.css';

    .c_regist .lty_container {
        padding: 150px 0 250px;
    }
</style>