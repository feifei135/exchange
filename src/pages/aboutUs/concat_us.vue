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
                    <about-sidebar activeID="04"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">联系我们</h3>
                    <div class="lty_concat_us">
                        <p>地址：贵州贵阳市XXXX区XXXXX</p>
                        <p>电话：0851-0000000</p>
                        <p>传真：0851-0000000</p>
                        <p>邮箱：XXXXXX@126.com</p>
                        <div class="map"></div>
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
    .lty_concat_us p{
        line-height: 30px;
    }
    .lty_concat_us .map{
        width: 500px;
        height: 300px;
        margin-top: 30px;
        background-color: gray;
    }
</style>