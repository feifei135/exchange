<template>
    <div class="c_login">
        <header-bar :isShowNav="isShowNav"></header-bar>
        <!-- 布局容器 -->
        <div class="lty_container">
            <!-- 布局：login -->
            <div class="lty_box">
                <div class="box_top">会员登录 <span>还没有账号？<a href="#/regist">立即注册</a></span></div>
                    <div class="server_error">{{serverErrMsg}}</div>
                    <form @submit.prevent="loginSubmit">
                        <div class="form_item">
                            <div class="icon icon_tel"></div>
                            <input type="text" v-model="tel" name="tel" v-validate:tel.initial="'required|tel'" data-vv-as="手机号" placeholder="请输入手机号">
                        </div>
                        <div class="form_err"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span></div>
                        <div class="form_item">
                            <div class="icon icon_pwd"></div>
                            <input type="password" v-model="pwd" name="pwd" v-validate:pwd.initial="'required|min:6'" data-vv-as="密码" placeholder="请输入密码">
                        </div>
                        <div class="form_err"><span v-show="errors.has('pwd')" class="help is-danger">{{ errors.first('pwd') }}</span></div>
                        <div class="form_btn">
                            <button type="submit" class="btn_login">登录</button>
                        </div>
                    </form>
                <p class="box_bom"><a href="#/">忘记密码</a></p>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import axios from 'axios'
    import Cookies from 'js-cookie'
    export default {
        data(){
            return {
                isShowNav:false,
                isSubmit:true,
                tel:'',
                pwd:'',
                serverErrMsg:''
            }
        },
        methods: {
            loginSubmit(){
                this.$validator.validateAll(this.stp4).then(()=>{
                    console.log('From Submitted!');
                    if(this.isSubmit){
                        this.isSubmit = false;
                        axios.post(this.$store.state.api,{
                            "head": {
                                "sessionId":"000000",
                                "operatorType":"DoLogin"
                            },
                            "body": {
                                "mbPhone":this.tel,
                                "password":this.pwd
                            }
                        }).then((response)=>{
                            console.log(response);
                            let result = response.data;
                                /* 登录成功 */
                                if(result.head.errCode == 0){
                                    this.isSubmit = true;
                                    this.serverErrMsg = '';
                                    /*
                                    * 1.存seesion_id
                                    * 2.存cookie_id
                                    * 3.存手机号
                                    *
                                    * */
                                    let session_id = result.head.sessionId;
                                    let client_id = result.body[0].clientId;
                                    let user_id = result.body[0].userId;
                                    let user_name = result.body[0].linkMan;
                                    let user_status = result.body[0].status;
                                    let biz_name = result.body[0].bizName;
                                    Cookies.set("sessionId",session_id);
                                    Cookies.set("clientId",client_id);
                                    Cookies.set("userId",user_id);
                                    Cookies.set("userName",user_name);
                                    Cookies.set("userStatus",user_status);
                                    Cookies.set("bizName",biz_name);
                                    this.$store.commit('SESSION_ID',session_id);
                                    this.$store.commit('CLIENT_ID',client_id);
                                    this.$store.commit('USER_ID',user_id);
                                    this.$store.commit('USER_NAME',user_name);
                                    this.$store.commit('USER_STATUS',user_status);
                                    this.$store.commit('BIZ_NAME',biz_name);
                                    if(user_status==1){
                                        this.$router.push('/guide');
                                    }else{
                                        this.$router.push({path: decodeURIComponent(this.$route.query.to || '/hall')})
                                    }
                                }else{
                                    /* 登录失败重新登录 */
                                    this.isSubmit = true;
                                    this.serverErrMsg = result.head.errDesc;
                                }
                        });
                    }

                }).catch(()=>{
                    console.log('Correct them errors!');
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar
        }
    }
</script>
<style lang="less">
    @import '../../assets/css/login/ui_form.css';
    .c_login .lty_container{
        padding: 150px 0 250px;
    }
</style>