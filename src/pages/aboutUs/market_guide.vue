<template>
    <!-- 入市指南 -->
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
                    <about-sidebar activeID="12"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">入市指南</h3>
                    <dl class="lty_dl">
                        <dt>1.开户</dt>
                        <dd>请登录注册页面填写认证信息，绑定银行卡进行开户。</dd>

                        <dt>2.入市</dt>
                        <dd>
                            <p>（1）XX网将审核用户提交的入市申请文件，审核通过后，申请企业即可在平台进行交易。</p>
                            <p>（2）每个XX网用户企业下拥有三种操作员角色：</p>
                            <p>（a） 系统管理员：负责在系统中执行其企业下账户管理操作的人员，包括系统中创建或撤销账户、更改账户角色、重置密码等。入市时由XX网默认创建，不可添加或删除。</p>
                            <p>（b） 交易员：负责在系统中进行除付款外的各项业务操作的人员，包括在系统中进行挂单、应单、发起签约和交收等。由系统管理员负责创建或删除。</p>
                            <p>（c） 财务员：负责在系统中进行资金相关操作的人员，包括在系统中进行保证金和货款划拨、签约盖章、出入金等操作。由系统管理员负责创建或删除。</p>
                            <p> ※ 系统管理员的初始密码为企业营业执照或统一信用代码证后6位，其他操作员初始密码为身份证号码后6位，字母“X”以0代替，需在首次登录系统后进行密码修改。</p>
                        </dd>
                        <dt>3.出入金管理</dt>
                        <dd>
                            <p>（1）用户交易资金结算账户
                        XX网为每一位入市用户在平台开立专属交易资金结算账户，并提供入金、出金、交易付款、保证金冻结等相关资金操作和交易结算功能。用户入市申请成功后，财务员可通过“用户中心->账户总览”菜单查询到资金结算账户详细信息</p>
                            <p>（2）入金</p>
                            <p>（a）用户可以通过银行柜台汇款、网银转账等方式对自己的交易资金结算账户进行入金操作。</p>
                            <p>（b）入金到账时间，取决资金汇出银行的处理时间。可以通过操作“用户中心->账户总览->入金管理”菜单查看实际入金到帐金额。</p>
                            <p>（c) 在交易过程中，粮达网系统将会根据交易规则，在挂单、签约、交收等环节自动对用户交易资金结算账户进行保证金冻结和交易资金划转操作，用户需要提前向账户入金足额资金，以确保交易顺利进行。</p>
                            <p>（3）出金</p>
                            <p>（a）用户入市申请时需要提供企业对公银行账号信息，作为出金目标账号，用户交易资金结算账户的资金只允许出金到此对公账号中，以确保资金安全。</p>
                            <p>（b）用户办理出金业务，可以通过操作“用户中心->账户总览->出金管理”菜单，选择出金目标账号并点击“出金申请”按钮进入出金申请页面，确认出金目标账号无误并输入出金金额提交后，即可完成出金业务。</p>
                            <p>（c）出金到账时间，在出金目标账户状态正常的情况下可实时到账，如果账户信息错误或者账户状态异常，则次日银行返回出金失败信息，出金资金也将退回用户的交易资金结算账户。</p>
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