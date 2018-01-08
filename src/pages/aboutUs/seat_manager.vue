<template>
    <!-- 席位管理 -->
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
                    <about-sidebar activeID="11"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <h3 class="title">席位管理</h3>
                    <dl class="lty_dl">
                        <dt>
                            一、申请席位应具备的条件
                        </dt>
                        <dd>
                            <p>1.经营状况良好，无严重违法违规记录；</p>
                            <p>2.通讯、资金划拨条件符合交易所要求；</p>
                            <p>3.配备符合交易所要求的业务系统及相关专业人员；</p>
                            <p>4.具有健全的规章制度和交易管理办法；</p>
                            <p>5.业务系统的建设和管理符合国家、行业和交易所相关技术管理规范的要求。</p>
                        </dd>
                        <dt>二、席位申请办理时间　</dt>
                        <dd>
                            交易所在收到符合要求的申请报告和有关材料之日起15个工作日内，对申请报告做出书面批复。会员应当在收到交易所同意其席位申请的批复后5个工作日内，与交易所签订席位使用协议。无故逾期的，视为放弃。　　
                        </dd>
                        <dt>三、席位使用费</dt>
                        <dd>
                            席位使用费按年收取。席位年申报量不超过20万笔的，年使用费为人民币2万元；席位年申报量超过20万笔的，年使用费为人民币3万元。申报量是指买入、卖出以及撤销委托笔数的总和。席位撤销时，已收取的席位使用费不予退还。　
                        </dd>
                        <dt>四、席位的使用和维护</dt>
                        <dd>
                            <p>会员交易设施安装和系统调试完成之后，达到交易所规定标准且符合开通条件的，方可投入使用。</p>
                            <p>会员应当加强席位管理和交易业务系统维护，主要设施需要更换或者作技术调整时，应当事先征得交易所同意。席位迁移出原登记备案地，应当事先报交易所审批。交易所有权对席位的使用情况进行监督检查。</p>
                        </dd>
                        <dt>五、席位撤销情况</dt>
                        <dd>
                            <P>1.申请撤销席位并经交易所核准；</P>　
                            <P>2.私下转包、转租或者转让席位；　</P>
                            <P>3.管理混乱、存在严重违规行为或者经查实已不符合开通条件；　</P>
                            <P>4.利用席位窃密或者破坏交易所系统；　</P>
                            <P>5.会员资格终止；</P>
                            <P>6.交易所认为其不适宜拥有席位。</P>
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