<template>
    <!-- 日行情 -->
    <div class="c_notice">
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
                <!-- 左侧导航 -->
                <div class="c_notice_lt">
                    <quot-sidebar :activeID="1"></quot-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="c_notice_rt">
                    <div class="notice_title">业务通知</div>
                    <div class="notice_list">
                        <ul>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                            <li>
                                <a href="#/notice_main">关于开展期权业务全市场测试的公告</a>
                                <i>2017-06-28</i>
                            </li>
                        </ul>
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
    import QuotSidebar from './index/notice_sidebar.vue'

    export default {
        components: {
            HeaderBar,
            FooterBar,
            QuotSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/notice/notice.css";
</style>