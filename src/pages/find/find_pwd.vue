<template>
    <div class="c_find_pwd">
        <header-bar :isShowNav="isShowNav"></header-bar>
        <!-- 布局容器 -->
        <div class="lty_container">
            <!-- 布局：login -->
            <div class="lty_box" v-show="1==curShowId">
                <div class="box_top">找回密码</div>
                <form @submit.prevent="findPwdOne">
                    <div class="form_item">
                        <div class="icon icon_tel"></div>
                        <input type="text" v-model="tel" name="tel" v-validate:tel.initial="'required|tel'" data-vv-as="手机号" placeholder="请输入手机号">
                    </div>
                    <div class="form_err"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span></div>
                    <div class="form_code">
                        <div class="ipt_code">
                            <div class="icon icon_code"></div>
                            <input type="text" v-model="scode" name="scode" v-validate:scode.initial="'required'" data-vv-as="验证码" placeholder="请输入验证码">
                        </div>
                        <div class="btn_send" data-url="/sms">发送验证码</div>
                    </div>
                    <div class="form_err"><span v-show="errors.has('scode')" class="help is-danger">{{ errors.first('scode') }}</span></div>
                    <div class="form_btn">
                        <button type="submit">下一步</button>
                    </div>
                </form>
            </div>

            <!-- 布局：login -->
            <div class="lty_box" v-show="2==curShowId">
                <div class="box_top">重置密码</div>
                <form @submit.prevent="findPwdTwo">
                    <div class="form_item">
                        <div class="icon icon_pwd"></div>
                        <input type="text" v-model="pwd" name="pwd" v-validate:pwd.initial="'required|min:6'" data-vv-as="密码" placeholder="请输入密码">
                    </div>
                    <div class="form_err"><span v-show="errors.has('pwd')" class="help is-danger">{{ errors.first('pwd') }}</span></div>
                    <div class="form_item">
                        <div class="icon icon_pwd"></div>
                        <input type="text" v-model="repwd" name="repwd" v-validate:repwd.initial="'required|confirmed:pwd'" data-vv-as="确认密码" placeholder="确认密码">
                    </div>
                    <div class="form_err"><span v-show="errors.has('repwd')" class="help is-danger">{{ errors.first('repwd') }}</span></div>
                    <div class="form_btn">
                        <button type="submit">确认</button>
                    </div>
                </form>
            </div>

            <!-- 布局：login -->
            <div class="lty_box find_succ" v-show="3==curShowId">
                <h3>恭喜,重置密码成功</h3>
                <a href="#">直接登录</a>
            </div>

        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    export default {
        data(){
            return {
                isShowNav:false,
                curShowId:1,
                tel:'',
                scode:'',
                pwd:'',
                repwd:''
            }
        },
        methods: {
            /* 找回密码步骤1 */
            findPwdOne(){
                this.$validator.validateAll({ tel: this.tel, scode: this.scode}).then(() => {
                    console.log('From Submitted!');
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            },
            /* 找回密码步骤2 */
            findPwdTwo(){
                this.$validator.validateAll({ pwd: this.pwd, repwd: this.repwd}).then(() => {
                    console.log('From Submitted!');
                }).catch(() => {
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
    .c_find_pwd .lty_container{
        padding: 150px 0 250px;
    }
    .c_find_pwd .find_succ h3{
        text-align: center;
        margin: 80px 0;
    }
    .c_find_pwd .find_succ a{
        display: block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        margin: 50px auto;
        text-align: center;
        color: #fff;
        background-color: #ff7200;
        border-radius: 2px;
    }
</style>