<template>
    <!-- 修改密码 -->
    <div class="c_modify_pwd">
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
                    <div class="ucm_title">修改密码 </div>
                    <form class="common_form" @submit.prevent="modifyPwd">
                        <div class="fm_item">
                            <label>现有密码：</label>
                            <input type="password" v-model="oldpwd" name="oldpwd" v-validate:oldpwd.initial="'required'" data-vv-as="现有密码" placeholder="请输入现有密码">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('oldpwd')" class="help is-danger">{{ errors.first('oldpwd') }}</span></div>
                        <div class="fm_item">
                            <label>新密码：</label>
                            <input type="password" v-model="newpwd" name="newpwd" v-validate:newpwd.initial="'required|min:6'" data-vv-as="新密码" placeholder="请输入新密码">

                        </div>
                        <div class="fm_err"><span v-show="errors.has('newpwd')" class="help is-danger">{{ errors.first('newpwd') }}</span></div>
                        <div class="fm_item">
                            <label>重复新密码：</label>
                            <input type="password" v-model="renewpwd" name="renewpwd" v-validate:renewpwd.initial="'required|confirmed:newpwd'" data-vv-as="重复新密码" placeholder="请再次输入新密码">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('renewpwd')" class="help is-danger">{{ errors.first('renewpwd') }}</span></div>
                        <div class="fm_btn">
                            <button class="g_btn">保存</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
        <success-modal msg="密码修改成功,请重新登录 ！" :isShow="isShowModal"></success-modal>
    </div>
</template>
<script>
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import UcSidebar from './index/uc_sidebar.vue'
    import SuccessModal from '../../components/success_modal'

    import axios from 'axios'

    export default{
        data () {
            return {
                isShowModal:false,
                oldpwd:'',
                newpwd:'',
                renewpwd:''
            }
        },
        methods: {
            modifyPwd(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    axios.post(this.$store.state.api,{
                        "head": {
                            "sessionId":this.$store.state.sessionId,
                            "operatorType":"DoPasswordUpdate"
                        },
                        "body":{
                            "clientId": this.$store.state.clientId,
                            "oldPassword": this.oldpwd,
                            "newPassword": this.newpwd,
                            "newPasswordConfirm": this.renewpwd
                        }
                    }).then((response)=> {
                        console.log(response);
                        if(response.data.head.errCode == 0){
                            this.isShowModal = true;
                            let timer = setInterval(()=>{
                                this.isShowModal = false;
                                this.$store.dispatch('signOut');
                                this.$router.push('/login');
                                clearInterval(timer)
                            },1000);
                        }

                    })
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            }
        },
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar,
            SuccessModal
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_form.css";
    .c_modify_pwd .g_btn{
        margin-left: 90px;
    }
</style>