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
                    <about-sidebar activeID="03"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">加入我们</h3>
                    <dl class="lty_dl c_join_us">
                        <dt>联系方式</dt>
                        <dd>简历及作品请发送至邮箱：HR@zlebank.com</dd>
                        <dd>邮件标题注明：“姓名+应聘岗位+手机号码”。</dd>
                        <dd>为了更加全面地了解您，建议您在附件中加上您的个人作品（如有）。</dd>
                        <dt>寻觅这样的你</dt>
                        <dd><span>总账会计</span><span>业务经理</span><span>英语翻译</span></dd>
                        <dt>总账会计</dt>
                        <dd>
                            <h3>岗位职责：</h3>
                            <p>1、负责公司全面会计核算及财务管理，及时、准确地编制会计报表；</p>
                            <p>2、负责国税、地税的申报及季报、年报、年度所得税申报等各项工作；</p>
                            <p>3、根据公司业务情况组织制定、完善财务管理制度，并监督执行业务各项流程；</p>
                            <p>4、负责成本核算、财务分析工作；</p>
                            <p>5、根据公司管理层决策需要，提供数据支持；</p>
                        </dd>
                        <dt>业务经理</dt>
                        <dd>
                            <h3>岗位职责：</h3>
                            <p>1、负责公司全面会计核算及财务管理，及时、准确地编制会计报表；</p>
                            <p>2、负责国税、地税的申报及季报、年报、年度所得税申报等各项工作；</p>
                            <p>3、根据公司业务情况组织制定、完善财务管理制度，并监督执行业务各项流程；</p>
                            <p>4、负责成本核算、财务分析工作；</p>
                            <p>5、根据公司管理层决策需要，提供数据支持；</p>
                        </dd>
                        <dt>英语翻译</dt>
                        <dd>
                            <h3>岗位职责：</h3>
                            <p>1、负责公司全面会计核算及财务管理，及时、准确地编制会计报表；</p>
                            <p>2、负责国税、地税的申报及季报、年报、年度所得税申报等各项工作；</p>
                            <p>3、根据公司业务情况组织制定、完善财务管理制度，并监督执行业务各项流程；</p>
                            <p>4、负责成本核算、财务分析工作；</p>
                            <p>5、根据公司管理层决策需要，提供数据支持；</p>
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
    .c_join_us dt{
        color: #006c05;
        padding: 20px 0;
    }
</style>