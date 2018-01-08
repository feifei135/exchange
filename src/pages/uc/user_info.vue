<template>
    <!-- 账户付款 -->
    <div class="c_uc_info">
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
                    <div class="ucm_title">会员资料 </div>

                    <!-- 普通会员 -->
                    <div class="uc_info_cont clearfix" v-show="userStatus != 3">
                        <div class="info_cont_lt">
                            <img src="../../assets/images/sm_gg1.jpg">
                        </div>
                        <div class="info_cont_rt">
                            <!-- 普通会员 -->
                            <div class="common_form">
                                <div class="fm_item"><label>ID：</label><span>{{user.client_id}}</span></div>
                                <div class="fm_item"><label>用户名：</label><span>{{user.mobile_phone}}</span></div>
                                <div class="fm_btn" v-if="userStatus == 1"><a href="#/identity_auth" class="g_btn">申请成为企业会员</a></div>
                                <div class="fm_btn" v-else-if="userStatus == 2"><span class="g_btn">申请已提交, 等待平台审核！</span></div>
                                <div class="fm_btn" v-else-if="userStatus == 3"><span class="g_btn">认证已通过,恭喜您成为平台会员！</span></div>
                                <div class="fm_btn" v-else="userStatus == 4"><span class="g_btn">您的申请已驳回,请重新申请！</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="info_cont_tip">
                        提示：个人会员未完成认证的企业认证，可在平台上浏览、查看信息。个人会员完成企业身份认证后，经平台审核批通过，
                        可在平台上浏览、发布信息、交易、交收等业务操作资格。
                    </div>


                    <!-- 认证会员 -->
                    <div class="uc_info_cont clearfix" v-show="userStatus == 3">
                        <div class="info_cont_lt">
                            <img src="../../assets/images/sm_gg1.jpg">
                        </div>
                        <div class="info_cont_rt">
                            <div class="common_form" v-show="true">
                                <div class="fm_item"><label>用户名：</label><span>{{user.mobile_phone}}</span><a href="#/modify_info" class="modify">修改个人资料</a></div>
                                <div class="fm_item"><label>真实姓名：</label><span>{{user.link_man}}</span></div>
                                <div class="fm_item">
                                    <label>性别：</label>
                                    <div class="gender">
                                        <label><input type="radio" name="sex" v-model="sex" value="1">男</label>
                                        <label><input type="radio" name="sex" v-model="sex" value="2">女</label>
                                    </div>
                                </div>
                                <div class="fm_item"><label>公司名称：</label><span>{{user.company_name}}</span></div>
                                <div class="fm_item"><label>公司类型：</label><span>{{user.company_type==1?'合资':'民营'}}</span></div>
                                <div class="fm_item"><label>公司地址：</label><span>{{user.company_address}}</span></div>
                                <div class="fm_item"><label>公司联系人：</label><span>{{user.company_link_man}}</span></div>
                                <div class="fm_item"><label>联系电话：</label><span>{{user.company_phone}}</span></div>
                                <div class="fm_item"><label>电子邮箱：</label><span>{{user.company_email}}</span></div>
                                <div class="fm_item">
                                    <label>营业执照：</label>
                                    <img :src="user.business_license_photo" style="width: 91px;height: 91px;">
                                </div>
                                <div class="fm_item">
                                    <label>组织机构代码：</label>
                                    <img :src="user.organization_code_photo" style="width: 91px;height: 91px;">
                                </div>
                                <div class="fm_item">
                                    <label>税务登记本：</label>
                                    <img :src="user.tax_photo" style="width: 91px;height: 91px;">
                                </div>
                                <div class="fm_btn">
                                    <a href="#/create_product" class="g_btn blue">发布信息</a>
                                </div>
                            </div>
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
    import axios from 'axios'

    export default{
        data(){
            return {
                user:'',
                userStatus:'',
                sex:''
            }
        },
        mounted(){
            this.userStatus = this.$store.state.userStatus;
            this.getUserInfo();
        },
        methods:{
            getUserInfo(){
                axios.post(this.$store.state.api,{
                    "head": {
                        "sessionId":this.$store.state.sessionId,
                        "operatorType":"DoClientInfoQry"
                    },
                    "body": {
                        "clientId":this.$store.state.clientId
                    }
                }).then((response)=> {
                    let res = response.data;
                    if(res.head.errCode == 0){
                        this.user = res.body[0];
                        this.sex = res.body[0].sex;
                        console.log(res.body[0])
                    }
                })
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
    .c_uc_info .common_form{
        padding-left: 0;
    }
    .c_uc_info .info_cont_lt{
        width: 120px;
        height: 120px;
        float: left;
    }
    .c_uc_info .info_cont_lt img{
        width: 100%;
        height: 100%;
    }
    .c_uc_info .info_cont_rt{
        width: 600px;
        float: right;
    }
    .c_uc_info .fm_item {
        margin-bottom: 15px;
    }
    .c_uc_info .info_cont_tip{
        color: #f02d2d;
        margin: 30px 0;
    }
    .c_uc_info .modify {
        float: right;
        color: #65d5ff;
    }
    .c_uc_info .blue {
        margin-right: 5px;
        background-color: #3aa9f2 !important;
    }
</style>