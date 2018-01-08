<template>
    <!-- 企业文化 -->
    <div class="c_about_us">
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
                <div class="about_us_lt">
                    <about-sidebar activeID="01"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">贵州茶叶商品交易中心企业文化</h3>
                    <div class="lty_dl">
                        <dl>
                            <dt>愿景</dt>
                            <dd>
                                立足西部、辐射全国，为广大茶农、茶企、投资者、消费者构建的一个公开、公平、公正、高效的投融资大宗商品交易平台。
                            </dd>
                            <dt>使命</dt>
                            <dd>促进中国茶叶产业的转型升级和创新发展，发扬光大中华茶文化。</dd>
                            <dt>核心价值观</dt>
                            <dd>诚信服务为本，创新进取为魂。</dd>
                            <dt>经营原则</dt>
                            <dd>公开、公平、公正、高效。</dd>
                            <dt>经营理念</dt>
                            <dd>
                                采取"互联网+茶产业+金融+现代物流"运营模式，通过互联网技术搭建交易平台，优化茶交易整个产业链，使茶产业链形成良性循环，实现茶产业产销两旺。
                            </dd>
                            <dt>用人观念</dt>
                            <dd>德才兼备，以德为先。</dd>
                            <dt>管理理念</dt>
                            <dd>教育培养为主，制度管理为辅，温馨关怀为重。</dd>
                        </dl>
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
    import AboutSidebar from './index/about_sidebar.vue'

    export default {
        components: {
            HeaderBar,
            FooterBar,
            AboutSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/aboutUs/about_us.css";
</style>