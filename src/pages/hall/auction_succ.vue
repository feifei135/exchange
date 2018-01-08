<template>
    <!-- 供应详情 -->
    <div class="c_auction hall_detail auc_succ">
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
                                    <h3>竞拍品种标题信息以及数量</h3>
                                    <p>2016-12-12 10:22:19发布 <span>浏览次数：278</span></p>
                                </div>
                                <div class="prd_info">
                                    <p><label>当前最高价：</label><i class="clr_red">￥1350</i>(元)</p>
                                    <div class="succ_msg">
                                        恭喜您竞拍成功。请在72小时内完成支付，
                                        否则系统自动关闭交易，您的竞拍保证金将
                                        赔付给送拍机构。
                                    </div>
                                </div>
                                <div class="prd_btns">
                                    <a href="#" class="btn_01">支付尾款</a>
                                </div>
                            </div>
                            <div class="top_rt">
                                <h3>出价记录 <span>共计出价10次</span></h3>
                                <div class="detail_table">
                                    <ul>
                                        <li>
                                            <span class="cell">出价时间</span>
                                            <span class="cell">出价人</span>
                                            <span class="cell">出价金额</span>
                                        </li>
                                        <li class="even">
                                            <span class="cell">2017/02/03</span>
                                            <span class="cell">张三三</span>
                                            <span class="cell">15000.00</span>
                                        </li>
                                        <li>
                                            <span class="cell">2017/02/03</span>
                                            <span class="cell">张三三</span>
                                            <span class="cell">15000.00</span>
                                        </li>
                                        <li class="even">
                                            <span class="cell">2017/02/03</span>
                                            <span class="cell">张三三</span>
                                            <span class="cell">15000.00</span>
                                        </li>
                                        <li>
                                            <span class="cell">2017/02/03</span>
                                            <span class="cell">张三三</span>
                                            <span class="cell">15000.00</span>
                                        </li>
                                        <li class="even">
                                            <span class="cell">2017/02/03</span>
                                            <span class="cell">张三三</span>
                                            <span class="cell">15000.00</span>
                                        </li>
                                    </ul>
                                    <page :total="50" :page-size="5" class-name="simple_page" simple></page>
                                </div>
                                <div class="top_rt_num">围观人数：123123人</div>
                            </div>
                        </div>

                        <!-- 竞拍流程 -->
                        <div class="auc_step">
                            <div class="auc_step_lt">竞拍流程</div>
                            <div class="auc_step_rt">
                                <span class="stp_01">交保证金</span>
                                <span class="stp_02">出价竞拍</span>
                                <span class="stp_03">竞拍成功</span>
                                <span class="stp_04">支付货款</span>
                                <span class="stp_05">完成收货</span>
                            </div>
                        </div>


                        <!-- 选项卡 -->
                        <tab-menu></tab-menu>
                    </div>
                </div>
                <!-- 详情页右侧 -->
                <div class="lty_dtl_rt">
                    <!-- 组件：盒子(商家热销品种) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_rmjp"></i><span class="text">热门竞拍</span>
                        </div>
                        <div class="cpt_box_main">
                            <product></product>
                            <product></product>
                            <product></product>
                            <product></product>
                        </div>
                    </div>
                    <!-- 组件：盒子(浏览过的信息) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_lljp"></i><span class="text">浏览过的竞拍信息</span>
                        </div>
                        <div class="cpt_box_main">
                            <product></product>
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
    import TabMenu from './auction/auc_tab_ing.vue'
    import Product from './auction/auc_product.vue'

    export default {
        data(){
            return {}
        },
        components: {
            HeaderBar,
            FooterBar,
            LoopScroll,
            CountDown,
            OptionsBar,
            BackTop,
            TabMenu,
            Product
        }
    }
</script>
<style>
    @import "../../assets/css/home/ui_box.css";
    @import "../../assets/css/hall/detail.css";
    @import "../../assets/css/hall/auction.css";
</style>