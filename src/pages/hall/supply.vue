<template>
    <!-- 供应详情 -->
    <div class="c_sup_detail hall_detail">
        <header-bar></header-bar>
        <!-- detail_banner -->
        <div class="big_banner">
            <img src="../../assets/images/big_banner.jpg">
        </div>
        <!-- 无限滚动 -->
        <loop-scroll></loop-scroll>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
                <div class="pos_rt">
                    <count-down :start="true"></count-down>
                </div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <back-top></back-top>
            <div class="g_wrap">
                <!-- 弹出层 -->
                <div class="lty_modal" v-show="isShowModal">
                    <div class="lty_modal_main">
                        <div class="lty_mdl_close" @click="closeModal"></div>
                        <!-- 应价主要内容 -->
                        <div class="lty_mdl_yj">
                            <div class="yj_id">挂单ID：{{res.listingNo}}</div>
                            <div class="yj_info">
                                <div class="info_tit">挂单基本信息</div>
                                <ul class="info_lty01 clearfix">
                                    <li>供应内容：{{res.listingTitle}}</li>
                                    <li>品种：{{res.goodsName}}</li>
                                    <li>库存量：{{res.inventoryQtt}}</li>
                                    <li>级别：{{res.goodsLevel}}</li>
                                    <li>价格：{{res.listingPrice}}</li>
                                    <li>最小交易量：{{res.tradeUnit}}</li>
                                </ul>
                            </div>
                            <div class="yj_line"></div>
                            <div class="yj_info">
                                <div class="info_tit">应价基本信息</div>
                                <form class="yj_form">
                                    <div class="fm_item">
                                        <p>
                                            <label>报价：</label>
                                            <input type="text" v-model="quotePrice" name="quotePrice" v-validate:quotePrice.initial="'required|decimal:2|min_price'" data-vv-as="报价">
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('quotePrice')" class="help is-danger">{{ errors.first('quotePrice') }}</span></p>
                                    </div>
                                    <div class="fm_item">
                                        <p>
                                            <label>购买量：</label>
                                            <input type="text" v-model="quoteQtt" name="quoteQtt" v-validate:quoteQtt.initial="'required|numeric'" data-vv-as="购买量">
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('quoteQtt')" class="help is-danger">{{ errors.first('quoteQtt') }}</span></p>
                                    </div>
                                    <div class="fm_item">
                                        <p>
                                            <label>升贴水等费用：</label>
                                            <input type="text" v-model="quotePremiumFee" name="quotePremiumFee" v-validate:quotePremiumFee.initial="'required|numeric'" data-vv-as="升贴水等费用">
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('quotePremiumFee')" class="help is-danger">{{ errors.first('quotePremiumFee') }}</span></p>
                                    </div>
                                    <div class="fm_item">
                                        <p>
                                            <label>联系人：</label>
                                            <input type="text" name="linkMan" v-model="linkMan" v-validate:linkMan.initial="'required'" data-vv-as="联系人">
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('linkMan')" class="help is-danger">{{ errors.first('linkMan') }}</span></p>
                                    </div>
                                    <div class="fm_item">
                                        <p>
                                            <label>联系电话：</label>
                                            <input type="text" v-model="linkPhone" name="linkPhone" v-validate:linkPhone.initial="'required|tel'" data-vv-as="联系电话">
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('linkPhone')" class="help is-danger">{{ errors.first('linkPhone') }}</span></p>
                                    </div>
                                    <div class="fm_item">
                                        <p>
                                            <label>应价单位：</label>
                                            <input type="text" disabled :value="bizName">
                                        </p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_item full">
                                        <p>
                                            <label>意见：</label>
                                            <textarea v-model="suggestion" name="suggestion" v-validate:suggestion.initial="'required|max:100'" data-vv-as="意见"></textarea>
                                        </p>
                                        <p class="fm_err"><span v-show="errors.has('suggestion')" class="help is-danger">{{ errors.first('suggestion') }}</span></p>
                                    </div>
                                    <div class="fm_btns">
                                        <span class="ok" @click="bidPriceSubmit">提交</span><span class="cancel">返回</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 详情页左侧 -->
                <div class="lty_dtl_lt">
                    <!-- 布局1 -->
                    <div class="lty_01">
                        <options-bar></options-bar>
                    </div>
                    <!-- 布局2 -->
                    <div class="lty_02">
                        <div class="top">
                            <div class="top_lt"><img :src="res.pictureUrl"></div>
                            <div class="top_cr">
                                <div class="prd_name">
                                    <h3>{{res.listingTitle}}</h3>
                                </div>
                                <div class="prd_info">
                                    <ul class="clearfix">
                                        <li>品种：{{res.goodsName}}</li>
                                        <li>发货地：{{res.dispatchPlace}}</li>
                                        <li>品级：{{res.goodsLevel}}</li>
                                        <li>挂牌量：{{res.listingQtt}}</li>
                                        <li>库存量：{{res.inventoryQtt}}</li>
                                        <li>最小成交量：{{res.tradeUnit}}</li>
                                        <li>价格类型：{{res.priceType}}</li>
                                        <li>单价：<i class="clr_red">￥{{res.listingPrice}}</i></li>
                                    </ul>
                                </div>
                                <div class="prd_btns">
                                    <a href="javascript:void(0);" class="btn_01" @click="showModal">应价</a>
                                    <a href="#" class="btn_02">加入购物车</a>
                                    <a href="#" class="btn_03">关注</a>
                                </div>
                            </div>
                        </div>
                        <modal
                                title="提示"
                                v-model="isShowConfimModal"
                                width="260"
                                @on-ok="onConfimOk"
                                class-name="vertical-center-modal">
                            <p style="text-align: center;">确认提交？</p>
                        </modal>
                        <modal
                                title="提示"
                                v-model="isShowLoginTips"
                                width="260"
                                @on-ok="onLogin"
                                class-name="vertical-center-modal">
                            <p style="text-align: center;">请您先登录 ~</p>
                        </modal>
                        <!-- 选项卡 -->
                        <div class="c_detail_tabs">
                            <!-- tab_bar 1030,1186,1314,1504-->
                            <div class="tab_bar" :class="{ fix: isFixed }">
                                <span v-for="(val,key) in tabTitle" @click="goal(key,'#tab_item'+key)" :class="{active:key==isActive}">{{val}}</span>
                            </div>
                            <div class="tab_item" id="tab_item0">
                                <h3>品质属性</h3>
                                <ul class="clearfix">
                                    <li>条索：{{res.trabs}}</li>
                                    <li>整碎：{{res.fullOrBroken}}</li>
                                    <li>净度：{{res.clarity}}</li>
                                    <li>色泽：{{res.colour}}</li>
                                    <li>香气：{{res.smell}}</li>
                                    <li>滋味：{{res.taste}}</li>
                                    <li>汤色：{{res.liquorColor}}</li>
                                    <li>叶底：{{res.infusedLeaf}}</li>
                                </ul>
                            </div>
                            <div class="tab_item" id="tab_item1">
                                <h3>品种信息</h3>
                                <ul class="clearfix">
                                    <li>品种：{{res.goodsName}}</li>
                                    <li>级别：{{res.goodsLevel}}</li>
                                    <li>包装形式：{{res.wrapPattern}}</li>
                                    <li>产地：{{res.origin}}</li>
                                </ul>
                            </div>
                            <div class="tab_item" id="tab_item2">
                                <h3>交易信息</h3>
                                <ul class="clearfix">
                                    <li>挂单总量：{{res.listingQtt}}</li>
                                    <li>价格类型：{{res.priceType}}</li>
                                    <li>最小交易量：{{res.tradeUnit}}</li>
                                </ul>
                            </div>
                            <div class="tab_item" id="tab_item3">
                                <h3>交收信息</h3>
                                <ul class="clearfix">
                                    <li>交收开始时间：{{res.csgBeginDate}}</li>
                                    <li>交收结束时间：{{res.csgEndDate}}</li>
                                    <li>交收仓库：{{res.csgWarehouse}}</li>
                                    <li>数量验收方式：{{res.qttCheckType}}</li>
                                    <li>质量验收方式：{{res.qualityCheckType}}</li>
                                    <li>增值税发票类型：{{res.invoiceType}}</li>
                                    <li>库存地：{{res.storageLocation}}</li>
                                    <li>其他信息：{{res.others}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 详情页右侧 -->
                <div class="lty_dtl_rt">
                    <!-- 组件：盒子(商家信息) -->
                    <div class="cpt_box seller_info">
                        <div class="cpt_box_title">
                            <i class="icon_sjxx"></i><span class="text">商家信息</span>
                        </div>
                        <div class="cpt_box_main">
                            <div class="c_seller_info">
                                <p class="new_line clearfix"><label>名称：</label><span>{{res.bizName}}</span></p>
                                <p class="new_line clearfix"><label>地址：</label><span>{{res.bizAddress}}</span></p>
                                <p>联系方式：{{res.bizPhone}}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 组件：盒子(商家热销品种) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_rxpz"></i><span class="text">商家热销品种</span>
                        </div>
                        <div class="cpt_box_main">
                            <product></product>
                            <product></product>
                            <product></product>
                        </div>
                    </div>
                    <!-- 组件：盒子(同类挂单信息) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_tlxx"></i><span class="text">同类挂单信息</span>
                        </div>
                        <div class="cpt_box_main">
                            <product></product>
                            <product></product>
                            <product></product>
                        </div>
                    </div>
                    <!-- 组件：盒子(浏览过的信息) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_llxx"></i><span class="text">浏览过的信息</span>
                        </div>
                        <div class="cpt_box_main">
                            <product></product>
                            <product></product>
                            <product></product>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
        <success-modal msg="恭喜您！操作成功！" :isShow="isShowSuccessBox"></success-modal>
    </div>
</template>
<script>
    /* 备注：supply/sup_tab_menu.vue组件目前没有用上 */

    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import LoopScroll from '../../components/loop_scroll.vue'
    import CountDown from '../../components/count_down.vue'
    import BackTop from '../../components/back_top.vue'
    import OptionsBar from './index/options.vue'
    import Product from './detail/product.vue'
    import SuccessModal from '../../components/success_modal'
    import axios from 'axios';

    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                isShowConfimModal:false,
                isShowLoginTips: false,
                isShowSuccessBox:false,
                tabTitle:['品质属性','品种信息','交易信息','交收信息'],
                isFixed: false,
                isActive: 0,
                res:{},
                isShowModal: false,
                quotePrice:'',
                quoteQtt:'',
                quotePremiumFee:'',
                linkPhone:'',
                linkMan:'',
                suggestion:''
            }
        },
        computed: {
            ...mapGetters(['bizName', 'userId','userName'])
        },
        mounted(){
            this.linkMan = this.userName;
            let self = this;
            /* 详情 */
            axios.post(this.$store.state.api,{
                "head": {
                    "sessionId":"000000",
                    "operatorType":"DoListingInfoQry"
                },
                "body": {
                    "listingId":this.$route.params.id
                }
            }).then(function (response) {
                let res = response.data.body[0];
                self.res = res;
                console.log(res);
            });

            this.fixedTabBar();
        },
        methods:{
            /* 目标 */
            fixedTabBar(){
                let that = this;
                /* 显示侧边的导航 */
                window.addEventListener("scroll", function () {
                    let pos = document.documentElement.scrollTop || document.body.scrollTop;
                    if (pos >= 1000) {
                        that.isFixed = true;
                        that.switchActive(pos);
                    } else {
                        that.isFixed = false;
                    }
                }, false);
            },
            switchActive(pos){
                if(pos<1189){
                    this.isActive = 0;
                }
                if(pos>1189 && pos<1317){
                    this.isActive = 1;
                }
                if(pos>1317 && pos<1507){
                    this.isActive = 2;
                }
                if(pos>1507){
                    this.isActive = 3;
                }
            },
            goal(i,g){
                let pos = this.$el.querySelector(g).offsetTop;
                pos = this.isFixed?pos-30:pos-60;
                this.isActive = i;
                document.body.scrollTop = pos;
                document.documentElement.scrollTop = pos;
            },
            showModal(){
                if(this.$store.state.sessionId != undefined && this.$store.state.sessionId != "000000"){
                    this.quotePrice = '';
                    this. quoteQtt = '';
                    this.quotePremiumFee = '';
                    this.linkPhone = '';
                    this.suggestion = '';
                    this.isShowModal = true;
                }else{
                    this.isShowLoginTips = true;
                }
            },
            closeModal(){
                this.isShowModal = false;
            },
            onConfimOk(){
                axios.post(this.$store.state.api,{
                    "head": {
                        "sessionId":"000000",
                        "operatorType":"DoQouteOrderInsert"
                    },
                    "body": {
                        "clientId":this.$store.state.clientId,
                        "listingId":this.$route.params.id,
                        "quotePrice":""+this.quotePrice+"",
                        "quoteQtt":""+this.quoteQtt+"",
                        "quotePremiumFee":""+this.quotePremiumFee+"",
                        "linkPhone":""+this.linkPhone+"",
                        "suggestion":""+this.suggestion+"",
                        "linkMan":""+this.linkMan+"",
                        "quoteBizName": ""+this.bizName+"",
                        "operatorId":""+this.userId+""
                    }
                }).then((response) =>{
                    console.log(response)
                    if(response.data.head.errCode == 0){
                        this.isShowSuccessBox = true;
                        let timer = setInterval(()=>{
                            this.isShowSuccessBox = false;
                            clearInterval(timer)
                            this.closeModal();
                            window.location.reload();
                        },1000);
                    }
                });
            },
            onLogin(){
                this.$router.push('/login')
            },
            bidPriceSubmit(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    this.isShowConfimModal = true;
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            LoopScroll,
            CountDown,
            OptionsBar,
            BackTop,
            Product,
            SuccessModal
        }
    }
</script>
<style>
    @import "../../assets/css/home/ui_box.css";
    @import "../../assets/css/hall/detail.css";
    @import "../../assets/css/hall/detail_tab_bar.css";
    @import "../../assets/css/hall/lty_yjia_modal.css";
</style>