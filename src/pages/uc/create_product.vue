<template>
    <!-- 账户付款 -->
    <div class="c_create_product">
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
                    <div class="ucm_title">发布信息</div>

                    <!-- 发布步骤 -->
                    <div class="create_step">
                        <span class="stp1" :class="{active:1==activeID}">第一步:基本信息</span>
                        <span class="stp2" :class="{active:2==activeID}">第二步:品种信息</span>
                        <span class="stp3" :class="{active:3==activeID}">第三步:交易信息</span>
                        <span class="stp4" :class="{active:4==activeID}">第四步:交收信息</span>
                    </div>

                    <!-- 发布信息-表单 -->
                    <div class="create_product_step1" v-show="1==activeID">
                        <div class="common_form">
                            <div class="fm_item"><label>交易模式：</label>
                                <select name="tradePattern" v-model="stp1.tradePattern" v-validate:tradePattern.initial="'min_value:1'" data-vv-as="交易模式">
                                    <option value="0">请选择</option>
                                    <option value="1">挂牌</option>
                                    <option value="2">竞价</option>
                                </select>
                                <span v-show="errors.has('tradePattern')" class="help is-danger">请选择交易模式</span>
                            </div>
                            <div class="fm_item"><label>交易方向：</label>
                                <select name="buyorsell" v-model="stp1.buyorsell" v-validate:buyorsell.initial="'min_value:1'" data-vv-as="交易方向">
                                    <option value="0">请选择</option>
                                    <option value="1">采购</option>
                                    <option value="2">销售</option>
                                </select>
                                <span v-show="errors.has('buyorsell')" class="help is-danger">请选择交易方向</span>
                            </div>
                            <div class="fm_item"><label>挂单方式：</label>
                                <select name="depositType" v-model="stp1.depositType" v-validate:depositType.initial="'min_value:1'" data-vv-as="挂单方式">
                                    <option value="0">请选择</option>
                                    <option value="1">保证金</option>
                                </select>
                                <span v-show="errors.has('depositType')" class="help is-danger">请选择挂单方式</span>
                            </div>
                            <div class="fm_item">
                                <label>挂单标题：</label>
                                <input type="text" name="listingTitle" v-model="stp1.listingTitle" v-validate:listingTitle.initial="'required'" data-vv-as="挂单标题">
                                <span v-show="errors.has('listingTitle')" class="help is-danger">{{ errors.first('listingTitle') }}</span>
                            </div>
                            <div class="fm_item"><label>挂单品类：</label>
                                <select name="goodsId" v-model="stp1.goodsId" v-validate:goodsId.initial="'min_value:1'" data-vv-as="挂单品类">
                                    <option value="0">请选择</option>
                                    <option value="1">红茶</option>
                                    <option value="2">绿茶</option>
                                    <option value="4">其它</option>
                                </select>
                                <span v-show="errors.has('goodsId')" class="help is-danger">请选择挂单品类</span>
                            </div>
                            <div class="fm_item"><label>价格模式：</label>
                                <select name="pricePattern" v-model="stp1.pricePattern" v-validate:pricePattern.initial="'min_value:1'" data-vv-as="价格模式">
                                    <option value="0">请选择</option>
                                    <option value="1">一口价模式</option>
                                    <option value="2">可议价模式</option>
                                </select>
                                <span v-show="errors.has('pricePattern')" class="help is-danger">请选择挂单方式</span>
                            </div>
                            <div class="fm_item"><label>价格类型：</label>
                                <select name="priceType" v-model="stp1.priceType" v-validate:priceType.initial="'min_value:1'" data-vv-as="价格类型">
                                    <option value="0">请选择</option>
                                    <option value="1">库内价</option>
                                    <option value="1">出库价</option>
                                    <option value="1">车板价</option>
                                    <option value="1">到港价</option>
                                    <option value="1">平仓价</option>
                                    <option value="1">大船板</option>
                                    <option value="1">小船板</option>
                                </select>
                                <span v-show="errors.has('priceType')" class="help is-danger">请选择价格类型</span>
                            </div>
                            <div class="fm_item">
                                <label>升贴水等费用：</label>
                                <input type="text" name="premiumFee" v-model="stp1.premiumFee" v-validate:premiumFee.initial="'required'" data-vv-as="升贴水等费用">
                                <span v-show="errors.has('premiumFee')" class="help is-danger">{{ errors.first('premiumFee') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>挂单信息失效日期：</label>
                                <calendar size="small" format="yyyy/MM/dd" placeholder="选择日期" @on-change="onChange1" style="width:200px;"></calendar>
                                <input type="hidden" name="validityDate" v-model="stp1.validityDate" v-validate:validityDate.initial="'required'" data-vv-as="挂单信息失效日期">
                                <span v-show="errors.has('validityDate')" class="help is-danger">{{ errors.first('validityDate') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>缩略图：</label>
                                <vue-core-image-upload
                                        :crop="false"
                                        @imageuploaded="imageuploaded1"
                                        :max-file-size="5242880"
                                        url="http://192.168.11.142:8989/zlebank/uploadFileService" >
                                    <img :src="upload1.src" width="91" height="91">
                                </vue-core-image-upload>
                                <span class="fm_err upload_err" v-show="upload1.flag">请上传缩略图</span>
                            </div>
                            <div class="tip">（请在此补充品种属性，系统默认为红茶国标GB/T 13738.1-2008，品种属性只可填写在标准属性，特殊属性请在备注中说明。）</div>
                            <div class="fm_item"><label>国标等级：</label>
                                <select name="goodsLevel" v-model="stp1.goodsLevel" v-validate:goodsLevel.initial="'min_value:1'" data-vv-as="国标等级">
                                    <option value="0">请选择</option>
                                    <option value="1">特级</option>
                                    <option value="2">一级</option>
                                    <option value="3">二级</option>
                                    <option value="4">三级</option>
                                    <option value="5">四级</option>
                                    <option value="6">五级</option>
                                    <option value="7">六级</option>
                                </select>
                                <span v-show="errors.has('goodsLevel')" class="help is-danger">国标等级</span>
                            </div>
                            <div class="fm_item">
                                <label>条索：</label>
                                <input type="text" name="people">

                            </div>
                            <div class="fm_item">
                                <label>整碎：</label>
                                <input type="text" name="people">

                            </div>
                            <div class="fm_item">
                                <label>净度：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>色泽：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>香气：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>滋味：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>汤色：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>叶底：</label>
                                <input type="text" name="people">
                            </div>
                            <div class="fm_item">
                                <label>备注：</label>
                                <textarea name=""></textarea>
                            </div>
                            <div class="fm_btn">
                                <button class="g_btn" type="button" @click="createProductSubmit1">下一步</button>
                            </div>
                        </div>
                    </div>
                    <div class="create_product_step2" v-show="2==activeID">
                        <div class="common_form">
                            <div class="fm_item"><label>包装形式：</label>
                                <select name="wrapPattern" v-model="stp2.wrapPattern" v-validate:wrapPattern.initial="'min_value:1'" data-vv-as="包装形式">
                                    <option value="0">请选择</option>
                                    <option value="1">袋装</option>
                                    <option value="2">散装</option>
                                    <option value="3">集装箱</option>
                                </select>
                                <span v-show="errors.has('wrapPattern')" class="help is-danger">请选择包装形式</span>
                            </div>
                            <div class="fm_item">
                                <label>产地：</label>
                                <input type="text" name="origin" v-model="stp2.origin" v-validate:origin.initial="'required'" data-vv-as="产地">
                                <span v-show="errors.has('origin')" class="help is-danger">{{ errors.first('origin') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>年份：</label>
                                <input type="text" name="vintage" v-model="stp2.vintage" v-validate:vintage.initial="'required'" data-vv-as="年份">
                                <span v-show="errors.has('vintage')" class="help is-danger">{{ errors.first('vintage') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>备注：</label>
                                <textarea name="listingGoodsOther" v-model="listingGoodsOther"></textarea>
                            </div>

                            <div class="fm_btn">
                                <button type="button" @click="prevStep" class="g_btn">上一步</button>
                                <button type="button" class="g_btn" @click="createProductSubmit2">下一步</button>
                            </div>
                        </div>
                    </div>
                    <div class="create_product_step3" v-show="3==activeID">
                        <form class="common_form">
                            <div class="fm_item">
                                <label>挂单总量：</label>
                                <input type="text" name="listingQtt" v-model="stp3.listingQtt" v-validate:listingQtt.initial="'required'" data-vv-as="挂单总量">
                                <span v-show="errors.has('listingQtt')" class="help is-danger">{{ errors.first('listingQtt') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>商品单价：</label>
                                <input type="text" name="listingPrice" v-model="stp3.listingPrice" v-validate:listingPrice.initial="'required'" data-vv-as="商品单价">
                                <span v-show="errors.has('listingPrice')" class="help is-danger">{{ errors.first('listingPrice') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>保证金支付比例：</label>
                                <input type="text" name="depositRate" v-model="stp3.depositRate" v-validate:depositRate.initial="'required'" data-vv-as="保证金支付比例">
                                <span v-show="errors.has('depositRate')" class="help is-danger">{{ errors.first('depositRate') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>最小交易量：</label>
                                <input type="text" name="tradeUnit" v-model="stp3.tradeUnit" v-validate:tradeUnit.initial="'required'" data-vv-as="最小交易量">
                                <span v-show="errors.has('tradeUnit')" class="help is-danger">{{ errors.first('tradeUnit') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>溢短装(%)：</label>
                                <input type="text" name="overFlowDif" v-model="stp3.overFlowDif" v-validate:overFlowDif.initial="'required'" data-vv-as="溢短装">
                                <span v-show="errors.has('overFlowDif')" class="help is-danger">{{ errors.first('overFlowDif') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>其它：</label>
                                <textarea name="listingTradeOther" v-model="listingTradeOther"></textarea>
                            </div>

                            <div class="fm_btn">
                                <button type="button" @click="prevStep" class="g_btn">上一步</button>
                                <button type="button" @click="createProductSubmit3" class="g_btn">下一步</button>
                            </div>
                        </form>
                    </div>
                    <div class="create_product_step4" v-show="4==activeID">
                        <form class="common_form">
                            <div class="fm_item">
                                <label>交收开始时间：</label>
                                <calendar size="small" format="yyyy/MM/dd"  placeholder="选择日期" @on-change="onChange2" style="width:200px;"></calendar>
                                <input type="hidden" name="csgBeginDate" v-model="stp4.csgBeginDate" v-validate:csgBeginDate.initial="'required'" data-vv-as="交收开始时间">
                                <span v-show="errors.has('csgBeginDate')" class="help is-danger">{{ errors.first('csgBeginDate') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>交收结束时间：</label>
                                <calendar size="small" format="yyyy/MM/dd" placeholder="选择日期" @on-change="onChange3" style="width:200px;"></calendar>
                                <input type="hidden" name="csgEndDate" v-model="stp4.csgEndDate" v-validate:csgEndDate.initial="'required'" data-vv-as="交收结束时间">
                                <span v-show="errors.has('csgEndDate')" class="help is-danger">{{ errors.first('csgEndDate') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>交收仓库：</label>
                                <input type="text" name="csgWarehouse" v-model="stp4.csgWarehouse" v-validate:csgWarehouse.initial="'required'" data-vv-as="交收仓库">
                                <span v-show="errors.has('csgWarehouse')" class="help is-danger">{{ errors.first('csgWarehouse') }}</span>
                            </div>
                            <div class="fm_item"><label>数量验收方式：</label>
                                <select name="qttCheckType" v-model="stp4.qttCheckType" v-validate:qttCheckType.initial="'min_value:1'" data-vv-as="数量验收方式">
                                    <option value="0">请选择</option>
                                    <option value="1">第三方检验(国家检验资质)</option>
                                    <option value="2">交收地库或港出具检验</option>
                                    <option value="3">其它</option>
                                </select>
                                <span v-show="errors.has('qttCheckType')" class="help is-danger">请选择数量验收方式</span>
                            </div>
                            <div class="fm_item"><label>质量验收方式：</label>
                                <select name="qualityCheckType" v-model="stp4.qualityCheckType" v-validate:qualityCheckType.initial="'min_value:1'" data-vv-as="质量验收方式">
                                    <option value="0">请选择</option>
                                    <option value="1">交收地库或港榜单</option>
                                    <option value="2">卖方出库榜单</option>
                                    <option value="3">买方出库榜单</option>
                                    <option value="4">其它</option>
                                </select>
                                <span v-show="errors.has('qualityCheckType')" class="help is-danger">请选择挂质量验收方式</span>
                            </div>
                            <div class="fm_item"><label>增值税发票类型：</label>
                                <select name="invoiceType" v-model="stp4.invoiceType" v-validate:invoiceType.initial="'min_value:1'" data-vv-as="增值税发票类型">
                                    <option value="0">请选择</option>
                                    <option value="1">乙方应在双方约定的最后提货日后45日内向甲方开具增值税普通发票</option>
                                    <option value="2">乙方应在双方约定的最后提货日后45日内向甲方开具增值税专用发票</option>
                                    <option value="3">其它</option>
                                </select>
                                <span v-show="errors.has('invoiceType')" class="help is-danger">请选择增值税发票类型</span>
                            </div>
                            <div class="fm_item">
                                <label>库存地：</label>
                                <input type="text" name="storageLocation" v-model="stp4.storageLocation" v-validate:storageLocation.initial="'required'" data-vv-as="库存地">
                                <span v-show="errors.has('storageLocation')" class="help is-danger">{{ errors.first('storageLocation') }}</span>
                            </div>
                            <div class="fm_item">
                                <label>其它：</label>
                                <textarea name="listingCsgOther" v-model="listingCsgOther"></textarea>
                            </div>
                            <div class="fm_btn">
                                <button type="button" @click="prevStep" class="g_btn">上一步</button>
                                <button type="button" class="g_btn" @click="createProductSubmit4">提交</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
        <success-modal :msg="successModalText" :isShow="isShowSuccessBox"></success-modal>
        <modal
                title="提示"
                v-model="isShowConfimModal"
                width="260"
                @on-ok="onConfimOk"
                class-name="vertical-center-modal">
            <p style="text-align: center;">确认提交？</p>
        </modal>
    </div>
</template>
<script>

    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import UcSidebar from './index/uc_sidebar.vue'
    import CreateProductStep1 from './index/create_product_step1.vue'
    import CreateProductStep2 from './index/create_product_step2.vue'
    import CreateProductStep3 from './index/create_product_step3.vue'
    import CreateProductStep4 from './index/create_product_step4.vue'
    import SuccessModal from '../../components/success_modal'

    import VueCoreImageUpload from 'vue-core-image-upload'
    import plus from '../../assets/images/plus.jpg'

    import axios from 'axios';


    export default{
        data(){
            return {
                isShowConfimModal: false,
                isShowSuccessBox: false,
                successModalText: '恭喜您！操作成功！',
                activeID:1,
                upload1:{
                    flag:false,
                    src:plus
                },
                stp1:{
                    tradePattern:0,
                    buyorsell:0,
                    depositType:0,
                    listingTitle:'',
                    goodsId:0,
                    pricePattern:0,
                    priceType:0,
                    premiumFee:'',
                    validityDate:'',
                    goodsLevel:0
                },
                stp2:{
                    wrapPattern:0,
                    origin:'',
                    vintage:''
                },
                stp3:{
                    listingQtt:'',
                    listingPrice:'',
                    depositRate:'',
                    tradeUnit:'',
                    overFlowDif:''
                },
                stp4:{
                    csgBeginDate:'',
                    csgEndDate:'',
                    csgWarehouse:'',
                    qttCheckType:0,
                    qualityCheckType:0,
                    invoiceType:0,
                    storageLocation:''
                },
                listingGoodsOther:'',
                listingTradeOther:'',
                listingCsgOther:''

            }
        },
        mounted(){
            /*$.post('http://192.168.12.161:8080/excg/testServlet',{
                "test":"123"
            }).then(function (response) {
                console.log(response);
            });*/
        },
        methods:{
            imageuploaded1(res){
                console.log(res);
                this.upload1.src = res.body.pictureUrl;
                this.upload1.flag = false;
            },
            onChange1(v){
                this.stp1.validityDate = v;
                this.$validator.errorBag.remove("validityDate");
            },
            onChange2(v){
                this.stp4.csgBeginDate = v;
                this.$validator.errorBag.remove("csgBeginDate");
            },
            onChange3(v){
                this.stp4.csgEndDate = v;
                this.$validator.errorBag.remove("csgEndDate");
            },
            createProductSubmit1(){
                if(!this.upload1.flag){
                    this.upload1.flag = true;
                }
                this.$validator.validateAll(this.stp1).then(() => {
                    console.log('From Submitted!');
                    console.log(this.stp1);
                    this.activeID = 2;
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            },
            createProductSubmit2(){
                this.$validator.validateAll(this.stp2).then(() => {
                    console.log('From Submitted!');
                    console.log(this.stp2);
                    this.activeID = 3;
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            },
            createProductSubmit3(){
                this.$validator.validateAll(this.stp3).then(() => {
                    console.log('From Submitted!');
                    console.log(this.stp3);
                    this.activeID = 4;
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            },
            onConfimOk(){
                console.log(Object.assign(this.stp1,this.stp2,this.stp3,this.stp4));
                let args = Object.assign(this.stp1,this.stp2,this.stp3,this.stp4);
                args.pictureUrl = this.upload1.src;
                args.listingGoodsOther = this.listingGoodsOther;
                args.listingTradeOther = this.listingTradeOther;
                args.listingCsgOther = this.listingCsgOther;
                args.clientId = this.$store.state.clientId;

                axios.post(this.$store.state.api,{
                    "head": {
                        "sessionId":"000000",
                        "operatorType":"DoListingInsert"
                    },
                    "body": args
                }).then((response)=> {
                    console.log(response);
                    if(response.data.head.errCode == 0){
                        this.successModalText = '恭喜您！，操作成功！';
                        this.isShowSuccessBox = true;
                        let timer = setInterval(()=>{
                            this.isShowSuccessBox = false;
                            clearInterval(timer);
                            this.$router.push('/demand_info');
                        },1000);
                    }else{
                        this.successModalText = '提交失败，请重新提交！';
                        this.isShowSuccessBox = true;
                        let timer = setInterval(()=>{
                            this.isShowSuccessBox = false;
                            clearInterval(timer);
                        },1000);
                    }
                });
            },
            createProductSubmit4(){
                this.$validator.validateAll(this.stp4).then(() => {
                    console.log('From Submitted!');
                    this.isShowConfimModal = true;
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            },
            prevStep(){
                if(this.activeID>1){
                    this.activeID = this.activeID-1;
                }
            },
            testFileUpload(){
                this.$el.querySelector("#formFileUpload").submit();
            }

        },
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar,
            CreateProductStep1,
            CreateProductStep2,
            CreateProductStep3,
            CreateProductStep4,
            VueCoreImageUpload,
            SuccessModal
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_form.css";
    /* 步骤 */
    .create_step{
        width: 100%;
        height: 40px;
        line-height: 38px;
    }
    .create_step span{
        display: block;
        width: 165px;
        height: 40px;
        float: left;
        text-align: center;
        margin-right: 25px;
        background: url("../../assets/images/create_step.png") no-repeat;
        background-position: -184px -8px;
    }
    .create_step span.active{
        color: #fff;
        background-position: -8px;
    }

    /* 表单 */
    .c_create_product .common_form{
        padding-left: 0;
        margin-top: 60px;
    }
    .c_create_product .common_form .tip{
        color: #f02d2d;
        font-size: 12px;
        margin-bottom: 20px;
    }
    .c_create_product .fm_item{
        margin-bottom: 20px;
    }
    .c_create_product .fm_item > label{
        width: 130px;
        text-align: right;
        margin-right: 20px;
    }
    .c_create_product .fm_item > input,
    .c_create_product .fm_item > select {
        width: 200px;
    }
    .c_create_product .fm_item textarea{
        width: 200px;
        height: 80px;
        float: left;
    }
    .c_create_product .ivu-date-picker{
        float: left;
    }
    .c_create_product .ivu-input-small{
        height: 25px;
    }
    .c_create_product .ivu-input{
        color: #333;
        font-size: 14px;
        border-radius: 0;
        border-color: #ccc;
    }
    .c_create_product .fm_btn{
        padding-left: 150px;
    }
    .c_create_product .fm_btn .g_btn{
        margin-right: 15px;
    }

    .c_create_product .is-danger{
        float: left;
        margin-left: 10px;
    }
    .c_create_product .upload_err{
        margin-left: 120px;
    }
</style>