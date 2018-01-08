<template>
    <!-- 议价详情 -->
    <div class="c_bargain_detail">
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
                    <div class="ucm_title">议价信息</div>

                    <!-- 议价详情main -->
                    <div class="bgn_dtl_main">
                        <div class="clearfix"><span class="cell">议价流水编号：{{info.quote_order_no}}</span><span class="cell">状态：{{info.quote_status}}</span>
                        </div>
                        <dl>
                            <dt>挂单基本信息</dt>
                            <dd class="clearfix">
                                <span class="cell">挂单标题：{{info.listing_title}}</span>
                                <span class="cell">挂单价格：{{info.listing_price}}/吨</span>
                                <span class="cell">挂单数量：{{info.listing_qtt}}</span>
                                <span class="cell">升贴水等费用：￥{{info.premium_fee}}/吨</span>
                                <span class="cell">交收地：{{info.csg_place}}</span>
                            </dd>
                        </dl>
                        <dl>
                            <dt>当前议价基本信息</dt>
                            <dd class="clearfix">
                                <span class="cell">子议价流水编号：{{info.quote_orderId}}</span>
                                <span class="cell">供应量：{{info.listing_qtt}}</span>
                                <span class="cell">报价：{{info.quote_price}}</span>
                                <span class="cell">联系电话：{{info.link_phone}}</span>
                                <span class="cell">升贴水等费用：{{info.quote_premium_fee}}</span>
                                <span class="cell full">备注意见：{{info.suggestion}}</span>
                                <span class="cell">应价单位：{{info.quote_biz_name}}</span>
                                <span class="cell">联系人：{{info.link_man}}</span>
                            </dd>
                        </dl>
                        <div class="old_info">
                            <dl v-show="isShowOld">
                                <dt>历史议价信息</dt>
                                <dd class="clearfix" v-for="item in historyInfo">
                                    <span class="cell">子议价流水编号：{{item.quote_order_id}}</span>
                                    <span class="cell">议价时间：{{item.quote_date}}</span>
                                    <span class="cell">报价：{{item.quote_price}}</span>
                                    <span class="cell">供应量：{{item.listing_qtt}}</span>
                                    <span class="cell">升贴水等费用：{{item.quote_premium_fee}}</span>
                                    <span class="cell">联系电话：{{item.link_phone}}</span>
                                    <span class="cell full">备注意见：{{item.suggestion}}</span>
                                    <span class="cell">应价单位：{{item.biz_name}}</span>
                                    <span class="cell">联系人：{{item.link_man}}</span>
                                </dd>
                            </dl>
                            <div class="btn" @click="toggle">{{btnText}}</div>
                        </div>

                        <div class="feedback">
                            <h3>处理意见</h3>
                            <div class="option">
                                <label><input type="radio" name="suggest" value="2" v-model="suggest">同意</label>
                                <label><input type="radio" name="suggest" value="3" v-model="suggest">驳回</label>
                                <label><input type="radio" name="suggest" value="1" v-model="suggest">再议</label>
                            </div>
                            <!-- 同意：输入内容 -->
                            <div class="opt_ok" v-show="2==suggest">
                                <textarea name="suggestion" v-model="option1.suggestion" v-validate:suggestion.initial="'required'" data-vv-as="意见" placeholder="如有意见请输入"></textarea>
                                <p><span v-show="errors.has('suggestion')" class="help is-danger">{{ errors.first('suggestion') }}</span></p>
                            </div>
                            <!-- 驳回：输入内容 -->
                            <div class="opt_no" v-show="3==suggest">
                                <textarea name="suggestion" v-model="option2.suggestion" v-validate:suggestion.initial="'required'" data-vv-as="意见" placeholder="如有意见请输入"></textarea>
                                <p><span v-show="errors.has('suggestion')" class="help is-danger">{{ errors.first('suggestion') }}</span></p>
                            </div>
                            <!-- 再议：输入内容 -->
                            <div class="opt_think" v-show="1==suggest">
                                <form class="common_form">
                                    <div class="fm_item">
                                        <label>报价：</label>
                                        <input type="text" v-model="option3.price" name="price" v-validate:price.initial="'required'" data-vv-as="报价">
                                    </div>
                                    <div class="fm_err">
                                        <span v-show="errors.has('price')" class="help is-danger">{{ errors.first('price') }}</span>
                                    </div>
                                    <div class="fm_item">
                                        <label>交易量：</label>
                                        <input type="text" v-model="option3.number" name="number" v-validate:number.initial="'required'" data-vv-as="交易量">
                                    </div>
                                    <div class="fm_err">
                                        <span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span>
                                    </div>
                                    <div class="fm_item">
                                        <label>升贴水等费用：</label>
                                        <input type="text" v-model="option3.money" name="money" v-validate:money.initial="'required'" data-vv-as="升贴水等费用">
                                    </div>
                                    <div class="fm_err">
                                        <span v-show="errors.has('money')" class="help is-danger">{{ errors.first('money') }}</span>
                                    </div>
                                    <div class="fm_item">
                                        <label>反馈意见：</label>
                                        <textarea name="suggestion" v-model="option3.suggestion" v-validate:suggestion.initial="'required'" data-vv-as="意见" placeholder="如有意见请输入"></textarea>
                                    </div>
                                    <div class="fm_err">
                                        <p><span v-show="errors.has('suggestion')" class="help is-danger">{{ errors.first('suggestion') }}</span></p>
                                    </div>
                                </form>
                            </div>
                            <button class="g_btn" @click="submitSuggest">提交</button>
                        </div>
                    </div>
                    <modal
                            title="提示"
                            v-model="isShowSuccessBox"
                            width="260"
                            @on-ok="onConfimOk"
                            class-name="vertical-center-modal">
                        <p style="text-align: center;">{{successText}}</p>
                    </modal>
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
                isShowSuccessBox:false,
                successText:'确认提交吗？',
                info: '',
                historyInfo:[],
                isShowOld: false,
                btnText: '展开历史议价',
                isAjax: true,
                suggest: 2,
                option1:{
                    suggestion:''
                },
                option2:{
                    suggestion:''
                },
                option3:{
                    price: '',
                    number: '',
                    money: '',
                    suggestion:''
                }
            }
        },
        mounted(){
            this.getBargainDetail();
        },
        methods: {
            toggle(){
                this.isShowOld = !this.isShowOld;
                if (this.isShowOld) {
                    this.btnText = '收起历史议价'
                    if(this.historyInfo.length == 0){
                        this.getBargainHistoryInfo();
                    }
                } else {
                    this.btnText = '展开历史议价'
                }

            },
            /* 获取议价详情 */
            getBargainDetail(){
                axios.post(this.$store.state.api, {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": "DoQuoteOrderInfoQry"
                    },
                    "body": {"quoteOrderId": this.$route.params.id}
                }).then((response) => {
                    let result = response.data.body[0];
                    if (result) {
                        this.info = result.data[0];
                    }
                })
            },
            /* 获取议价历史信息 */
            getBargainHistoryInfo(){
                axios.post(this.$store.state.api, {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": "DoQuoteOrderInfoQry"
                    },
                    "body": {
                        "listingId": this.$route.params.id,
                        "clientId": this.$store.state.clientId,
                        "quoteStatus": "3"
                    }
                }).then(function (response) {
                    console.log(response)
                })
            },
            submitSuggest(){

                this.successText = "确认提交吗！"
                this.isShowSuccessBox = true;
            },
            onConfimOk(){
                let self = this;
                /* 第一种情况 */
                if(this.suggest == 2){
                    this.$validator.validateAll(this.option1).then(()=>{
                        this.option1.quoteStatus = this.suggest;
                        this.sendRequest(self.option1);
                       /* if(this.isAjax){
                            this.isAjax = false;
                        }*/
                    }).catch(()=>{});
                    /* 第二种情况  */
                }else if(this.suggest == 3){
                    this.$validator.validateAll(this.option2).then(()=>{
                        self.option2.quoteStatus = self.suggest;
                        self.sendRequest(self.option2);
                       /* if(self.isAjax){
                            self.isAjax = false;
                        }*/
                    }).catch(()=>{});
                    /* 第三种情况  */
                }else{
                    this.$validator.validateAll(this.option3).then(()=>{
                        self.option3.quoteStatus = self.suggest;
                        self.sendRequest(self.option3);
                     /*   if(self.isAjax){
                            self.isAjax = false;
                        }*/
                    }).catch(function () {});
                }
            },
            /* 发送应价单处理请求 */
            sendRequest(bd){
                bd.quoteOrderId = this.$route.params.id;
                console.log(bd)
                axios.post(this.$store.state.api, {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": "DoQuoteOrderHandle"
                    },
                    "body": bd
                }).then((response)=>{
                    this.isAjax = true;
                    if(response.data.head.errCode == 0){
                        this.successText = "提交成功！"
                        this.isShowSuccessBox = true;
                        let timer = setInterval(()=>{
                            this.$router.push('/order_manager');
                            clearInterval(timer)
                        },1000);

                    }else{
                        this.successText = "提交失败！"
                        this.isShowSuccessBox = true;
                    }
                })
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_form.css";

    .c_bargain_detail .bgn_dtl_main .cell {
        display: block;
        width: 50%;
        float: left;
        margin-bottom: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .c_bargain_detail .cell.full {
        width: 100% !important;
    }

    .c_bargain_detail .bgn_dtl_main dl {
        margin-top: 20px;
    }

    .c_bargain_detail .bgn_dtl_main dt {
        color: #44a84b;
        margin-bottom: 30px;
    }

    .c_bargain_detail .old_info {
        padding-bottom: 30px;
        border-bottom: 1px solid #e0e0e0;
    }

    .c_bargain_detail .btn {
        color: #3499db;
        cursor: pointer;
    }

    .c_bargain_detail .feedback h3 {
        padding: 25px 0;
        font-weight: 600;
    }

    .c_bargain_detail .option {
        margin-bottom: 10px;
    }

    .c_bargain_detail .option label {
        margin-right: 20px;
    }

    .c_bargain_detail .option label input {
        position: relative;
        top: 2px;
        margin-right: 5px;
    }

    .c_bargain_detail .feedback textarea {
        width: 320px;
        height: 100px;
        padding: 5px 0 0 5px;
        resize: none;
        overflow-y: hidden;
        border: 1px solid #e0e0e0;
    }

    .c_bargain_detail .common_form {
        padding-left: 0;
    }

    .c_bargain_detail .fm_item > label {
        width: 100px;
    }
    .c_bargain_detail .opt_think .fm_err{
        text-indent: 100px;
    }
    .c_bargain_detail .opt_ok p,
    .c_bargain_detail .opt_no p{
        height: 20px;
    }
    .c_bargain_detail .g_btn {
        padding: 5px 35px;
        margin: 30px 0 0 100px;
        background-color: #f02d2d;
    }
</style>