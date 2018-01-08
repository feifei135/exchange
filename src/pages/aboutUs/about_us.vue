<template>
    <!-- 关于我们 -->
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
                    <about-sidebar activeID="00"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">贵州茶叶商品交易中心介绍</h3>
                    <div class="area_img"><img src="../../assets/images/big_banner.jpg"></div>
                    <div class="area_info">
                        <div class="area_video">视频</div>
                        <div class="area_text">
                            <p>贵州茶叶商品交易中心创建于2017年1月，总部设立在
                            贵阳市，注册资本X亿元，中心采取"互联网+茶产业+金融+
                            现代物流"运营模式，通过互联网技术搭建交易平台，通过
                            价格发布、挂牌拍卖、企业融资等手段，引导茶叶交易逐步
                            向集中、规范、统一的交易方式转型，转变“一对一”交易
                            模式为“一对多”、“多对多”的竞价交易方式，通过整合
                            茶叶类商品现货交易的商流、信息流、物流、资金流，减少
                            交易中间环节、降低</p>

                            <p>贵州是全国唯一兼具低纬度、高海拔、日照的茶叶产区
                            ，是全国最适宜种茶的区域之一，所产茶叶内含物质丰富，具有香高馥郁、鲜爽醇厚、汤色明亮等品质。独特优质的茶叶
                            资源一定要利用好，贵州茶叶商品交易中心通过提供专业的茶交易场所、专业的运营管理模式，促进贵州茶叶由产品到商
                            品、资源到资本的规模转化。贵州茶叶商品交易中心不仅仅是一个单纯意义上的“互联网+茶”的交易平台，而是依托贵
                            州的茶产业优势，立足西部、辐射全国，为广大茶农、茶企、投资者、消费者构建的一个公开、公平、公正、高效的投融
                                资大宗商品交易平台，优化茶交易整个产业链，使茶产业链形成良性循环，实现茶产业产销两旺!</p>
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
    .c_about_us .area_img {
        margin: 50px 0;
    }
    .c_about_us .area_img img{
        height: 200px;
    }
    .c_about_us .area_video{
        width: 350px;
        height: 230px;
        line-height: 230px;
        text-align: center;
        color: #ff0000;
        font-size: 30px;
        float: left;
        margin-right: 30px;
        background-color: gray;
    }
    .c_about_us .area_text{
        color: #666;
    }
</style>