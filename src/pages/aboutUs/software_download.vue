<template>
    <!-- 软件下载 -->
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
                    <about-sidebar activeID="21"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">软件下载</h3>
                    <dl class="lty_dl">
                        <dt>交易客户端下载</dt>
                        <dd>
                            <p>1.使用安装有Window7/windows8/XP操作系统的电脑；</p>
                            <p>2.粮达网系统支持IE8~IE11、谷歌（Chrome）、火狐（Firefox）、以及使用以上浏览器内核的第三方浏览器，不支持IE8以下的浏览器；</p>
                            <p>※ 为了让您更好的体验粮达网的服务，我们推荐您使用IE11浏览器；</p>
                            <p>3.更新电脑的操作系统补丁；</p>
                            <p>4.准备好粮达网为您分配的粮盾，用于电子合同签章、资金管理使用。粮盾极为重要，请妥善保管；</p>
                            <p>5.PDF文件查看器，可用于查看您下载的电子合同。</p>
                        </dd>
                        <dt>交易手机端下载</dt>
                        <dd>
                            <p>1.使用安装有Window7/windows8/XP操作系统的电脑；</p>
                            <p>2.粮达网系统支持IE8~IE11、谷歌（Chrome）、火狐（Firefox）、以及使用以上浏览器内核的第三方浏览器，不支持IE8以下的浏览器；
                            ※ 为了让您更好的体验粮达网的服务，我们推荐您使用IE11浏览器；</p>
                            <p>3.更新电脑的操作系统补丁；</p>
                            <p>4.准备好粮达网为您分配的粮盾，用于电子合同签章、资金管理使用。粮盾极为重要，请妥善保管；</p>
                            <p>5.PDF文件查看器，可用于查看您下载的电子合同。</p>
                        </dd>
                        <dt>系统安装说明</dt>
                        <dd>
                            <p>1.使用安装有Window7/windows8/XP操作系统的电脑；</p>

                            <p>2.粮达网系统支持IE8~IE11、谷歌（Chrome）、火狐（Firefox）、以及使用以上浏览器内核的第三方浏览器，不支持IE8以下的浏览器；
                            ※ 为了让您更好的体验粮达网的服务，我们推荐您使用IE11浏览器；</p>

                            <p>3.更新电脑的操作系统补丁；</p>

                            <p>4.准备好粮达网为您分配的粮盾，用于电子合同签章、资金管理使用。粮盾极为重要，请妥善保管；</p>

                            <p>5.PDF文件查看器，可用于查看您下载的电子合同。</p>
                        </dd>
                    </dl>
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