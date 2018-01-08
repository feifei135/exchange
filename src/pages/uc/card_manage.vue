<template>
    <!-- 银行卡管理 -->
    <div class="c_card_manage">
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
                    <div class="ucm_title">银行卡管理</div>

                    <!-- 已认证银行卡 -->
                    <div class="has_auth">
                        <p class="tip">现有认证银行卡</p>
                        <div class="card_info">
                            <div class="row hdr">
                                <span class="cell">银行名称</span>
                                <span class="cell">卡号</span>
                                <span class="cell">状态</span>
                            </div>
                            <div class="row">
                                <span class="cell">中国工商银行</span>
                                <span class="cell">62222923*****3434</span>
                                <span class="cell">已认证 <a href="#" class="modify">更改</a></span>
                            </div>
                        </div>
                    </div>

                    <!-- 提醒认证 -->
                    <div class="not_auth">您的银行卡尚未认证,立即开始认证：</div>

                    <!-- 绑定银行卡 -->
                    <div class="bind_card">
                        <p class="tip">XXXX茶叶商品交易中心支持一下银行：</p>
                        <div class="banks">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                            <img src="../../assets/images/bank.png">
                        </div>
                        <form class="common_form">
                            <div class="fm_item">
                                <label>持卡人：</label>
                                <input type="text" v-model="user.name" name="name" v-validate:name.initial="'required'" data-vv-as="持卡人">
                            </div>
                            <div class="fm_err"><span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span></div>
                            <div class="fm_item">
                                <label>持卡人身份证号：</label>
                                <input type="text" v-model="user.idcard" name="idcard" v-validate:idcard.initial="'required'" data-vv-as="持卡人身份证号">
                            </div>
                            <div class="fm_err"><span v-show="errors.has('idcard')" class="help is-danger">{{ errors.first('idcard') }}</span></div>
                            <div class="fm_item">
                                <label>银行卡号：</label>
                                <input type="text" v-model="user.cardnum" name="cardnum" v-validate:cardnum.initial="'required'" data-vv-as="银行卡号">
                            </div>
                            <div class="fm_err"><span v-show="errors.has('cardnum')" class="help is-danger">{{ errors.first('cardnum') }}</span></div>
                            <div class="fm_item">
                                <label>手机号：</label>
                                <input type="text" v-model="user.tel" name="tel" v-validate:tel.initial="'required'" data-vv-as="手机号">
                            </div>
                            <div class="fm_err"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span></div>
                            <div class="fm_item fm_vcode">
                                <label>验证码：</label>
                                <input type="text" v-model="user.vcode" name="vcode" v-validate:vcode.initial="'required'" data-vv-as="验证码">
                                <span class="btn_vcode">获取验证码</span>
                            </div>
                            <div class="fm_err"><span v-show="errors.has('vcode')" class="help is-danger">{{ errors.first('vcode') }}</span></div>
                            <div class="fm_item">
                                <label>交易密码：</label>
                                <input type="text" v-model="user.pwd" name="pwd" v-validate:pwd.initial="'required'" data-vv-as="交易密码">
                            </div>
                            <div class="fm_err"><span v-show="errors.has('pwd')" class="help is-danger">{{ errors.first('pwd') }}</span></div>
                            <div class="fm_btn">
                                <button class="g_btn">保存</button>
                            </div>
                        </form>
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
            return {
                currentView: 'InMoney',
                currentActive: 1,
                user:{
                    name:'',
                    idcard:'',
                    cardnum:'',
                    tel:'',
                    vcode:'',
                    pwd:''
                },
                pwd: '',
                repwd:''
            }
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
    @import "../../assets/css/uc/uc_form.css";
    .c_card_manage .common_form{
        padding-left: 0;
        margin-top: 20px;
    }
    .c_card_manage .fm_item label{
        width: 120px !important;
    }
    .c_card_manage .fm_item input{
        width: 200px !important;
    }
    .c_card_manage .g_btn{
        margin-left: 120px;
    }
    .c_card_manage .uc_main .ucm_title{
        margin-bottom: 25px;
    }
    .c_card_manage .tip{
        margin-bottom: 10px;
    }
    .c_card_manage .not_auth{
        color: #ff0000;
        padding: 20px 0;
    }
    /* 已认证 */
    .has_auth .card_info{
        border: 2px solid #3aa9f2;
    }
    .has_auth .card_info .row {
        height: 60px;
        line-height: 60px;
    }
    .has_auth .card_info .row.hdr{
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: #3aa9f2;
    }
    .has_auth .card_info .cell{
        display: block;
        width: 33.3%;
        float: left;
        text-align: center;
    }
    .has_auth .card_info .modify{
        margin-left: 20px;
        color: #3aa9f2;
    }
    /* 绑卡 */
    .bind_card .banks {
        width: 772px;
        font-size: 0;
    }
    .bind_card .banks img{
        display: inline-block;
        width: 181px;
        height: 37px;
        margin: 0 12px 15px 0;
        border: 1px solid #ccc;
    }
</style>