<template>
    <div class="c_home">
        <header-bar></header-bar>
        <big-slider></big-slider>
        <infinite-scroll></infinite-scroll>

        <!-- 布局容器 -->
        <div class="lty_container">
            <div class="g_wrap">
                <!-- 布局1 -->
                <div class="lyt_01 clearfix">
                    <!-- 组件：盒子(动态) -->
                    <div class="cpt_box dynamic">
                        <div class="cpt_box_title">
                            <i class="icon_xwdt"></i><span class="text">新闻动态</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <small-slider></small-slider>
                        </div>
                    </div>
                    <!-- 组件：盒子(公告) -->
                    <div class="cpt_box notice">
                        <div class="cpt_box_title">
                            <i class="icon_jygg"></i><span class="text">交易所公告</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <div class="cpt_list">
                                <div class="scroll_top">
                                    <ul>
                                        <li>
                                            <a href="#" class="g_ellipsis">111关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">222关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">333关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">444关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">555关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">666关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">777关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">888关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">999关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">100关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                            <i class="icon_new"></i>
                                            <span>2017-04-20</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 组件：盒子(行情) -->
                    <div class="cpt_box market">
                        <div class="cpt_box_title">
                            <i class="icon_hqzs"></i><span class="text">行情指数</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <charts-bar></charts-bar>
                        </div>
                    </div>
                </div>

                <!-- 布局2：公告 -->
                <div class="lty_02"><img src="../../assets/images/gonggao1.jpg"></div>

                <!-- 布局3 -->
                <div class="lty_03 clearfix">
                    <!-- 布局3：左侧 -->
                    <div class="lty_03_lt">
                        <!-- 组件：盒子(市场资讯) -->
                        <div class="cpt_box information">
                            <div class="cpt_box_title">
                                <i class="icon_sczx"></i><span class="text">市场资讯</span><a href="#" class="more">更多</a>
                            </div>
                            <div class="cpt_box_main">
                                <!-- 资讯top -->
                                <div class="inf_top clearfix">
                                    <a href="#" class="inf_top_img"><img src="../../assets/images/news.png" alt=""></a>
                                    <div class="inf_top_rt">
                                        <h3><a href="#">沉稳如山的仁者心态在日益快速的消费社会里，成为新时代的精神符号</a></h3>
                                        <p>成为新时代的精神符号。世世代代的匠人们将对自然的敬畏和感悟融入物件中，沉静守护茶山的制茶大师用日复一</p>
                                    </div>
                                </div>

                                <!-- 资讯list -->
                                <div class="inf_list">
                                    <div class="cpt_list">
                                        <ul>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                            <li>
                                                <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                                <span>2017-04-20</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 布局3：中间 -->
                    <div class="lty_03_cr">
                        <!-- 组件：盒子(交易所动态) -->
                        <div class="cpt_box">
                            <div class="cpt_box_title">
                                <i class="icon_jydt"></i><span class="text">交易所动态</span><a href="#" class="more">更多</a>
                            </div>
                            <div class="cpt_box_main">
                                <div class="cpt_list">
                                    <ul>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 组件：盒子(交易服务) -->
                        <div class="cpt_box">
                            <div class="cpt_box_title">
                                <i class="icon_jyfw"></i><span class="text">交易服务</span><a href="#" class="more">更多</a>
                            </div>
                            <div class="cpt_box_main">
                                <div class="cpt_list">
                                    <ul>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 布局3：右侧 -->
                    <div class="lty_03_rt">
                        <!-- 组件：盒子(延时行情) -->
                        <div class="cpt_box">
                            <div class="cpt_box_title">
                                <i class="icon_yshq"></i><span class="text">延时行情</span><a href="#" class="more">更多</a>
                            </div>
                            <div class="cpt_box_main">
                                <div class="defer">(行情延时30分钟)</div>
                                <div class="mkt_tab">
                                    <span class="active">红茶</span>
                                    <span>绿茶</span>
                                    <span>碧螺春</span>
                                    <span>铁观音</span>
                                </div>
                                <div class="mkt_tab_wrap">
                                    <div class="">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th width="25%">合约</th>
                                                <th width="25%">最新价</th>
                                                <th width="25%">涨跌</th>
                                                <th width="25%">成交量</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>IF1710</td>
                                                <td>3241.00</td>
                                                <td><i class="icon_up"></i>2.00</td>
                                                <td><i class="icon_down"></i>2.00</td>
                                            </tr>
                                            <tr>
                                                <td>IF1710</td>
                                                <td>3241.00</td>
                                                <td><i class="icon_up"></i>2.00</td>
                                                <td><i class="icon_down"></i>2.00</td>
                                            </tr>
                                            <tr>
                                                <td>IF1710</td>
                                                <td>3241.00</td>
                                                <td><i class="icon_up"></i>2.00</td>
                                                <td><i class="icon_down"></i>2.00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 组件：盒子(会员服务) -->
                        <div class="cpt_box vip">
                            <div class="cpt_box_title">
                                <i class="icon_hyfw"></i><span class="text">会员服务</span><a href="#" class="more">更多</a>
                            </div>
                            <div class="cpt_box_main">
                                <div class="cpt_list">
                                    <ul>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                        <li>
                                            <a href="#" class="g_ellipsis">关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 布局4 -->
                <div class="lty_04">
                    <a href="#"><img src="../../assets/images/sm_gg1.jpg"></a>
                    <a href="#"><img src="../../assets/images/sm_gg2.jpg"></a>
                    <a href="#"><img src="../../assets/images/sm_gg3.jpg"></a>
                    <a href="#"><img src="../../assets/images/sm_gg4.jpg"></a>1120 230*4
                </div>
            </div>
        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import ChartsBar from '../../components/charts.vue'
    import InfiniteScroll from '../../components/loop_scroll.vue'
    import BigSlider from './index/big_slider.vue'
    import SmallSlider from './index/small_slider.vue'
    import ScrollTop from '../../utils/scrollTop'

    export default {
        data(){
            return {
                t: 0
            }
        },
        mounted(){
            ScrollTop(document.querySelector(".scroll_top"), 34, 7);
        },
        methods: {},
        components: {
            HeaderBar,
            FooterBar,
            ChartsBar,
            BigSlider,
            InfiniteScroll,
            SmallSlider
        }
    }
</script>
<style>
    @import '../../assets/css/home/ui_box.css';
    @import '../../assets/css/home/ui_list.css';
    /*  layout_container
    ====================================================*/
    .c_home .lty_container .g_wrap {
        padding: 20px 5px 0 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #fff;
    }

    /*  layout_1
    ====================================================*/
    .c_home .lyt_01 .cpt_box {
        height: 298px;
        float: left;
    }

    /* 大banner */
    .c_home .c_big_slider .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        opacity: 0.5;
        background-color: #7f99cf;
    }

    .c_home .c_big_slider .swiper-pagination-bullet-active {
        opacity: 1 !important;
        background-color: #00349f !important;
    }

    /* 动态 */
    .c_home .lyt_01 .dynamic {
        width: 358px;
    }

    .c_home .lyt_01 .dynamic .swiper-pagination {
        bottom: 30px !important;
    }

    .c_home .lyt_01 .dynamic .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        opacity: 0.5;
        background-color: #fff;
    }

    .c_home .lyt_01 .dynamic .swiper-pagination-bullet-active {
        opacity: 1 !important;
    }


    /* 通知 */

    .c_home .lyt_01 .notice {
        width: 458px;
        margin: 0 15px;
    }

    .c_home .lyt_01 .notice .cpt_box_main {
        padding: 0 10px;
        box-sizing: border-box;
    }

    .c_home .lyt_01 .cpt_list ul li a {
        max-width: 270px;
    }

    .c_home .lyt_01 .cpt_list .scroll_top {
        width: 100%;
        height: 245px;
        overflow: hidden;
    }

    /* 行情 */
    .c_home .lyt_01 .market {
        width: 268px;
    }

    /*  layout_2
    ====================================================*/
    .c_home .lty_02 {
        margin: 15px 0;
    }

    /*  layout_3
    ====================================================*/
    .c_home .lty_03 .lty_03_lt {
        width: 490px;
        float: left;
    }

    .c_home .lty_03 .lty_03_cr {
        width: 260px;
        float: left;
        margin: 0 15px;
    }

    .c_home .lty_03 .lty_03_rt {
        width: 340px;
        float: left;
    }

    .c_home .lty_03 .lty_03_cr .cpt_box:first-child,
    .c_home .lty_03 .lty_03_rt .cpt_box:first-child {
        margin-bottom: 15px;
    }

    /* 左侧 */
    .c_home .lty_03 .lty_03_lt .cpt_box_main {
        height: 490px;
        padding: 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_home .lty_03 .inf_top .inf_top_img {
        display: block;
        width: 258px;
        height: 157px;
        float: left;
        overflow: hidden;
        border: 1px solid #e0e0e0;
    }

    .c_home .lty_03 .inf_top .inf_top_rt {
        float: right;
        width: 180px;
    }

    .c_home .lty_03 .inf_top_rt h3 {
        max-height: 54px;
        line-height: 18px;
        color: #000;
        margin-bottom: 5px;
        overflow: hidden;
    }

    .c_home .lty_03 .inf_top_rt p {
        max-height: 100px;
        line-height: 20px;
        color: #7d7d7d;
        font-size: 12px;
        overflow: hidden;
    }

    .c_home .lty_03 .inf_list {
        margin-top: 15px;
    }

    .c_home .lty_03 .inf_list ul li {
        border-bottom: none;
    }

    .c_home .lty_03 .inf_list ul li a {
        max-width: 340px;
    }

    /* 中间 */
    .c_home .lty_03 .lty_03_cr .cpt_box_main,
    .c_home .lty_03 .lty_03_rt .vip .cpt_box_main {
        padding: 5px 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .c_home .lty_03 .lty_03_cr .cpt_list ul li,
    .c_home .lty_03 .lty_03_rt .vip ul li {
        border-bottom: none;
    }

    .c_home .lty_03 .lty_03_cr .cpt_list ul li a {
        max-width: 210px;
    }

    /* 右边 */
    .c_home .lty_03 .lty_03_rt .defer {
        height: 60px;
        line-height: 60px;
        text-align: center;
    }

    .c_home .lty_03 .lty_03_rt .mkt_tab {
        height: 25px;
        line-height: 25px;
        padding: 0 15px;
        background-color: #d7e8ff;
    }

    .c_home .lty_03 .lty_03_rt .mkt_tab span {
        display: block;
        width: 25%;
        float: left;
        text-align: center;
        color: #2379c8;
        cursor: pointer;
    }

    .c_home .lty_03 .lty_03_rt .mkt_tab span.active,
    .c_home .lty_03 .lty_03_rt .mkt_tab span:hover {
        background-color: #fff;
    }

    .c_home .lty_03 .lty_03_rt .mkt_tab_wrap {
        padding: 0 20px 23px 20px;
    }

    .c_home .lty_03 .mkt_tab_wrap table {
        width: 100%;
    }

    .c_home .lty_03 .mkt_tab_wrap thead th {
        text-align: center;
        padding: 15px 0;
    }

    .c_home .lty_03 .mkt_tab_wrap tbody td {
        height: 30px;
        line-height: 30px;
        text-align: center;
    }

    .c_home .lty_03 .lty_03_rt .cpt_list ul li a {
        max-width: 290px;
    }

    /*  layout_4
    ====================================================*/
    .c_home .lty_04 {
        font-size: 0;
        text-align: center;
        margin: 15px 0 80px;
    }

    .c_home .lty_04 a {
        display: inline-block;
        width: 272px;
        height: 150px;
        margin-right: 10px;
    }

    .c_home .lty_04 a:last-child {
        margin-right: 0;
    }

    .c_home .lty_04 img {
        width: 100%;
        height: 100%;
    }
</style>