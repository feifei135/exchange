<template>
    <!-- 采购详情 -->
    <div class="c_pur_detail hall_detail">
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
                            <div class="yj_id">挂单ID：HC09820980234</div>
                            <div class="yj_info">
                                <div class="info_tit">挂单基本信息</div>
                                <ul class="info_lty01 clearfix">
                                    <li>求购内容：求购信息标题</li>
                                    <li>过期时间：2017/05/20</li>
                                    <li>品种：红茶</li>
                                    <li>级别：1级</li>
                                    <li>求购量：90吨</li>
                                    <li>交收地：浙江杭州</li>
                                </ul>
                            </div>
                            <div class="yj_line"></div>
                            <div class="yj_info">
                                <div class="info_tit">应价基本信息</div>
                                <form class="yj_form">
                                    <div class="fm_item">
                                        <p><label>报价：</label><input type="text"></p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_item">
                                        <p><label>供应量：</label><input type="text"></p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_item">
                                        <p><label>升贴水等费用：</label><input type="text"></p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_item">
                                        <p><label>联系电话：</label><input type="text"></p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_item ttaa">
                                        <p><label>意见：</label><textarea name=""></textarea></p>
                                        <p class="fm_err"></p>
                                    </div>
                                    <div class="fm_text"><span>应价单位：某某某有限责任公司</span><span>联系人：王先生</span></div>
                                    <div class="fm_btns">
                                        <span class="ok">提交</span><span class="cancel">返回</span>
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
                            <div class="top_lt"><img src="../../assets/images/banner01.jpg"></div>
                            <div class="top_cr">
                                <div class="prd_name">
                                    <h3>买入挂单 供应品种信息标题</h3>
                                    <p>2016-12-12 10:22:19发布 <span>浏览次数：278</span></p>
                                </div>
                                <div class="prd_info">
                                    <ul class="clearfix">
                                        <li>品种：红茶</li>
                                        <li>交收地：浙江宁波</li>
                                        <li>品级：1级</li>
                                        <li>求购量(吨)：1000</li>
                                        <li>价格类型：出库价</li>
                                        <li>最小供货量(吨)：1</li>
                                        <li>参考价：<i class="clr_red">￥500</i>(元/吨)</li>
                                    </ul>
                                </div>
                                <div class="prd_btns">
                                    <a href="javascript:void(0);" class="btn_01" @click="showModal">卖出</a>
                                    <a href="#" class="btn_03">关注</a>
                                </div>
                            </div>
                        </div>

                        <div class="c_detail_tabs">
                            <!-- tab_bar 1030,1186,1314,1504-->
                            <div class="tab_bar" :class="{ fix: isFixed }">
                                <span v-for="(val,key) in tabTitle" @click="goal(key,'#tab_item'+key)" :class="{active:key==isActive}">{{val}}</span>
                            </div>
                            <div class="tab_item" id="tab_item0">
                                <h3>品种信息</h3>
                                <ul class="clearfix">
                                    <li>品种：绿茶</li>
                                    <li>级别：1级</li>
                                    <li>包装形式：袋装</li>
                                    <li>产地：河南信阳</li>
                                </ul>
                            </div>
                            <div class="tab_item" id="tab_item1">
                                <h3>交易信息</h3>
                                <ul class="clearfix">
                                    <li>挂单总量(吨)：500</li>
                                    <li>价格类型：出库价</li>
                                    <li>最小交易量：1</li>
                                </ul>
                            </div>
                            <div class="tab_item" id="tab_item2">
                                <h3>交收信息</h3>
                                <ul class="clearfix">
                                    <li>交收开始时间：2017-05-28</li>
                                    <li>交收结束时间：2017-06-28</li>
                                    <li>交收仓库：XXXX某仓库</li>
                                    <li>数量验收方式：交收地库或港磅单</li>
                                    <li>质量验收方式：交收地库或港出具的检验</li>
                                    <li>数量验收方式：交收地库或港磅单</li>
                                    <li>库存地：河南信阳市</li>
                                    <li>其他信息：XXXXXXX</li>
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
                            <i class="icon_sjxx"></i><span class="text">求购商信息</span>
                        </div>
                        <div class="cpt_box_main">
                            <div class="c_seller_info">
                                <p class="new_line clearfix"><label>名称：</label><span>XXXX茶贸易商城</span></p>
                                <p class="new_line clearfix"><label>地址：</label><span>浙江省某某市</span></p>
                                <p>联系方式：010-5565-9999</p>
                            </div>
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
    </div>
</template>
<script>
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import LoopScroll from '../../components/loop_scroll.vue'
    import CountDown from '../../components/count_down.vue'
    import BackTop from '../../components/back_top.vue'
    import OptionsBar from './index/options.vue'
    import Product from './detail/product.vue'

    export default {
        data(){
            return {
                isShowModal: false,
                tabTitle:['品种信息','交易信息','交收信息'],
                isFixed: false,
                isActive: 0
            }
        },
        mounted(){
            this.fixedTabBar();
        },
        methods: {
            showModal(){
                this.isShowModal = true;
            },
            closeModal(){
                this.isShowModal = false;
            },
            /* 目标 */
            fixedTabBar(){
                let that = this;
                /* 显示侧边的导航 */
                window.addEventListener("scroll", function () {
                    let pos = document.documentElement.scrollTop || document.body.scrollTop;
                    if (pos >= 1000) {
                        that.isFixed = true;
                        if(document.body.clientHeight>2000){
                            that.switchActive(pos);
                        }
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
                console.log(g);
                let pos = this.$el.querySelector(g).offsetTop;
                pos = this.isFixed?pos-30:pos-60;
                this.isActive = i;
                document.body.scrollTop = pos;
                document.documentElement.scrollTop = pos;
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            LoopScroll,
            CountDown,
            OptionsBar,
            BackTop,
            Product
        }
    }
</script>
<style>
    @import "../../assets/css/home/ui_box.css";
    @import "../../assets/css/hall/detail.css";
    @import "../../assets/css/hall/detail_tab_bar.css";
    @import "../../assets/css/hall/lty_yjia_modal.css";
</style>