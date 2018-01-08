<template>
    <!-- 入会指南 -->
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
                    <about-sidebar activeID="10"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">入会指南</h3>
                    <dl class="lty_dl">
                        <dd>
                            （1）发售商会员（卖方）茶叶品交易中心发售商会员为原茶生产企业，包括茶庄、茶园、茶厂等企业或农村合作社，主要为交易中心各类会员在交易规则 的设定下提供原茶（原料）交易。发售商会员准入标准：仅为贵州省的原茶生产企业（合作社）。
                        </dd>
                        <dd>
                            （2）承销商会员（买卖方）茶叶商品交易中心的承销商会员为原茶经销商，参与原茶电子贸易的交易活动。 承销商会员的准入标准：全国具有茶叶销售资格、销售主体（店面） 的茶楼、茶叶店、 茶业市场、 茶城等实体销售企业。承销商会员需 要每年向交易中心缴纳一定金额的席位费和保证金。注：如参加交易 的企业为产供销一体化的企业，可根据实际情况和该企业缴纳席位费 和保证金的数量，将该企业授予交易中心发售商会员、承销商会员等 会员资格。
                        </dd>
                        <dd>
                            （3）经纪商会员 贵州茶叶商品交易中心经纪商会员为全国投资、理财经纪机构，负责开发全国各地的投资人、消费者、承销商会员，通过贵州茶叶商品 交易中心的电子交易系统投资或购买成品茶叶产品的机构或个人。经纪商会员的准入标准：全国具有开展经纪业务资格的机构，交易 中心将根据地域范围将经纪商会员分为：经纪人代表会员（考取执业 证书的自然人经纪人）、区县级经纪商会员、地市级经纪商会员和省 级经纪商会员，区县级以上的经纪商会员均为公司、机构，不同级别的经纪商会员根据级别范围进行开展独家经营业务。不同级别的经纪 商会员需要缴纳不同的席位费用。经纪佣金详见《贵州茶叶商品交易中心会员管理办法》。
                        </dd>
                        <dd>
                            （4）交易会员 贵州茶叶商品交易中心交易会员为全国范围内的原茶（收藏）机构、投资机构、投资人、消费者等，通过交易中心的电子交易系统进行投 资、消费、投机、交易的会员。 交易商会员的准入标准：机构会员和自然人会员均可通过交易系统线 上注册或在交易中心经纪机构会员的营业处注册成为交易商会员。
                        </dd>
                        <dd>
                            （5）服务商会员 贵州茶叶商品交易中心服务会员为全国范围内的茶业协会、会计师事务所、律师事务所、拍卖行、典当行、担保公司、券商、信托公司、 基金公司、商业银行等第三方服务机构，为参与整个交易链条提供金融增值服务。
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