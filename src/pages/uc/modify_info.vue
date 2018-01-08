<template>
    <!-- 账户付款 -->
    <div class="c_modify_info">
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
                    <div class="ucm_title">修改资料 </div>

                    <!-- 认证会员 -->
                    <div class="uc_info_cont clearfix">
                        <div class="info_cont_lt">
                            <img :src="photo">
                            <vue-core-image-upload
                                    class="btn btn-primary"
                                    :crop="false"
                                    text="修改图像"
                                    @imageuploaded="imageuploaded0"
                                    :max-file-size="5242880"
                                    url="http://192.168.11.142:8989/zlebank/uploadFileService" >
                            </vue-core-image-upload>
                        </div>
                        <div class="info_cont_rt">
                            <form class="common_form" @submit.prevent="submitModifyInfo">
                                <div class="fm_item">
                                    <label>真实姓名：</label>
                                    <input type="text" v-model="company.linkMan" name="linkMan" v-validate:linkMan.initial="'required'" data-vv-as="真实姓名">
                                    <span v-show="errors.has('linkMan')" class="help is-danger">{{ errors.first('linkMan') }}</span>
                                </div>
                                <div class="fm_item">
                                    <label>性别：</label>
                                    <div class="gender">
                                        <label><input type="radio" v-model="company.sex" name="sex" value="1">男</label>
                                        <label><input type="radio" v-model="company.sex" name="sex" value="2">女</label>
                                    </div>
                                </div>
                                <div class="fm_item">
                                    <label>公司名称：</label>
                                    <input type="text" v-model="company.companyName" name="companyName" v-validate:companyName.initial="'required'" data-vv-as="公司名称">
                                    <span v-show="errors.has('companyName')" class="help is-danger">{{ errors.first('companyName') }}</span>
                                </div>
                                <div class="fm_item"><label>公司类型：</label>
                                    <select name="companyType" v-model="company.companyType" v-validate:companyType.initial="'min_value:1'" data-vv-as="公司类型">
                                        <option value="0">请选择</option>
                                        <option value="1">合资</option>
                                        <option value="2">民营</option>
                                    </select>
                                    <span v-show="errors.has('companyType')" class="help is-danger">请选择企业类型</span>
                                </div>
                                <div class="fm_item">
                                    <label>公司地址：</label>
                                    <input type="text" v-model="company.companyAddress" name="companyAddress" v-validate:companyAddress.initial="'required'" data-vv-as="公司地址">
                                    <span v-show="errors.has('companyAddress')" class="help is-danger">{{ errors.first('companyAddress') }}</span>
                                </div>
                                <div class="fm_item">
                                    <label>公司联系人：</label>
                                    <input type="text" v-model="company.companyLinkMan" name="companyLinkMan" v-validate:companyLinkMan.initial="'required'" data-vv-as="公司联系人">
                                    <span v-show="errors.has('companyLinkMan')" class="help is-danger">{{ errors.first('companyLinkMan') }}</span>
                                </div>
                                <div class="fm_item">
                                    <label>联系电话：</label>
                                    <input type="text" v-model="company.companyPhone" name="companyPhone" v-validate:companyPhone.initial="'required'" data-vv-as="联系电话">
                                    <span v-show="errors.has('companyPhone')" class="help is-danger">{{ errors.first('companyPhone') }}</span>
                                </div>
                                <div class="fm_item">
                                    <label>电子邮箱：</label>
                                    <input type="text" v-model="company.companyEmail" name="companyEmail" v-validate:companyEmail.initial="'required'" data-vv-as="电子邮箱">
                                    <span v-show="errors.has('companyEmail')" class="help is-danger">{{ errors.first('companyEmail') }}</span>
                                </div>
                                <div class="fm_item">
                                    <label>营业执照：</label>
                                    <vue-core-image-upload
                                            :crop="false"
                                            @imageuploaded="imageuploaded1"
                                            :max-file-size="5242880"
                                            url="http://192.168.11.142:8989/zlebank/uploadFileService" >
                                        <img :src="upload1.src" width="91" height="91">
                                    </vue-core-image-upload>
                                    <span class="fm_err" v-show="upload1.flag">请上传证件</span>
                                </div>
                                <div class="fm_item">
                                    <label>组织机构代码：</label>
                                    <vue-core-image-upload
                                            :crop="false"
                                            @imageuploaded="imageuploaded2"
                                            :max-file-size="5242880"
                                            url="http://192.168.11.142:8989/zlebank/uploadFileService" >
                                        <img :src="upload2.src" width="91" height="91">
                                    </vue-core-image-upload>
                                    <span class="fm_err" v-show="upload2.flag">请上传证件</span>
                                </div>
                                <div class="fm_item">
                                    <label>税务登记本：</label>
                                    <vue-core-image-upload
                                            :crop="false"
                                            @imageuploaded="imageuploaded3"
                                            :max-file-size="5242880"
                                            url="http://192.168.11.142:8989/zlebank/uploadFileService" >
                                        <img :src="upload3.src" width="91" height="91">
                                    </vue-core-image-upload>
                                    <span class="fm_err" v-show="upload3.flag">请上传证件</span>
                                </div>
                                <div class="fm_btn">
                                    <button href="#" class="g_btn">修改</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
        <success-modal msg="修改资料成功！" :isShow="isShowModal"></success-modal>
    </div>
</template>
<script>
    import VueCoreImageUpload from 'vue-core-image-upload'
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import UcSidebar from './index/uc_sidebar.vue'
    import SuccessModal from '../../components/success_modal'

    import photo from '../../assets/images/banner02.jpg'
    import plus from '../../assets/images/plus.jpg'
    import axios from 'axios'

    export default{
        data(){
            return {
                isShowModal: false,
                photo:photo,
                upload1:{
                    flag:false,
                    src:plus
                },
                upload2:{
                    flag:false,
                    src:plus
                },
                upload3:{
                    flag:false,
                    src:plus
                },
                company:{
                    linkMan:'',
                    sex: 1,
                    companyName:'',
                    companyType:0,
                    companyAddress:'',
                    companyLinkMan:'',
                    companyPhone:'',
                    companyEmail:''
                }
            }
        },
        mounted(){
            /* 获取用户信息并显示 */
            axios.post(this.$store.state.api, {
                "head": {
                    "sessionId": this.$store.state.sessionId,
                    "operatorType": "DoClientInfoQry"
                },
                "body": {
                    "clientId":this.$store.state.clientId
                }
            }).then((response) => {
                if(response.data.head.errCode == 0){
                    let res = response.data.body[0];
                    console.log(res)
                    this.company.linkMan = res.link_man;
                    this.company.sex = res.sex;
                    this.company.companyName = res.company_name;
                    this.company.companyType = res.company_type;
                    this.company.companyAddress = res.company_address;
                    this.company.companyLinkMan = res.company_link_man;
                    this.company.companyPhone = res.company_phone;
                    this.company.companyEmail = res.company_email;

                    this.upload1.src = res.business_license_photo;
                    this.upload2.src = res.organization_code_photo;
                    this.upload3.src = res.tax_photo;
                }

            });
        },
        methods:{
            imageuploaded0(res){
                this.photo = res.body.pictureUrl;
            },
            imageuploaded1(res) {
                this.upload1.src = res.body.pictureUrl;
                this.upload1.flag = false;
            },
            imageuploaded2(res) {
                this.upload2.src = res.body.pictureUrl;
                this.upload2.flag = false;
            },
            imageuploaded3(res) {
                this.upload3.src = res.body.pictureUrl;
                this.upload3.flag = false;
            },
            /* 提交修改信息 */
            submitModifyInfo(){
                if(this.upload1.src == plus){
                    this.upload1.flag = true;
                }
                if(this.upload2.src == plus){
                    this.upload2.flag = true;
                }
                if(this.upload3.src == plus){
                    this.upload3.flag = true;
                }
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    this.company.businessLicensePhoto = this.upload1.src;
                    this.company.organizationCodePhoto = this.upload2.src;
                    this.company.taxPhoto = this.upload3.src;
                    this.company.clientId = this.$store.state.clientId;
                    axios.post(this.$store.state.api,{
                        "head": {
                            "sessionId":this.$store.state.sessionId,
                            "operatorType":"DoAssociatorUpdate"
                        },
                        "body": this.company
                    }).then((response)=> {
                        console.log(response);
                        if(response.data.head.errCode == 0){
                            this.isShowModal = true;
                            let timer = setInterval(()=>{
                                this.isShowModal = false;
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
            VueCoreImageUpload,
            SuccessModal
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_form.css";
    .c_modify_info .fm_item > label{
        width: 110px;
    }
    .c_modify_info .fm_item > input,
    .c_modify_info .fm_item > select{
        width: 220px;
    }
    .c_modify_info .fm_item{
        margin-bottom: 15px;
    }
    .c_modify_info .fm_err{
        float: left;
        margin-top: 20px;
    }
    .c_modify_info .g-core-image-upload-btn,
    .c_modify_info .g-core-image-upload-form{
        float: left;
        width: 91px !important;
        height: 91px !important;
    }
    .c_modify_info .common_form{
        padding-left: 0;
    }
    .c_modify_info .info_cont_lt{
        width: 120px;
        height: 120px;
        float: left;
    }
    .c_modify_info .info_cont_lt img{
        width: 100%;
        height: 100%;
    }
    .c_modify_info .info_cont_rt{
        width: 600px;
        float: right;
    }
    .c_modify_info .btn-primary{
        width: 100% !important;
        height: 27px !important;
        line-height: 27px;
        text-align: center;
        color: #65d5ff;
        margin-top: 10px;
        cursor: pointer;
        border: 1px solid #65d5ff;
        border-radius: 3px;
    }
    .c_modify_info .g_btn{
        margin-left: 110px;
    }
</style>