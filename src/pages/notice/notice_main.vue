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
                    <quot-sidebar :activeID="activeID"></quot-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="c_notice_rt">
                    <h3 class="notice_main_title">文章标题</h3>
                    <p class="notice_main_date">发布时间：2017/02/04</p>
                    <div class="notice_main_cont">
                        <p>各会员单位：</p>
                    　　<p>我所定于12月24日（周六）上午进行交易系统期权业务联网测试。请各单位提前安排出市代表、远程席位的交易和结算系统相关人员参加测试。现将有关事项通知如下：</p>
                    　　<p>一、本次测试验证期权、期货交易及结算功能。请暂未完成升级工作的会员单位根据《关于开展期权行权相关业务专项测试及会员端系统升级的通知》（大商所发〔2016〕105号）要求，联系开发商索取必要的升级补丁，完成交易及结算系统升级工作。</p>
                    　　<p>二、测试人员需根据《测试合约信息及参数》（附件1）和《测试内容及时间安排》（附件2）完成测试任务。收市结算后，核对结算数据是否正确。</p>
                    　　<p>三、请各单位认真做好测试前后生产数据的备份、恢复和柜台系统日志的清理工作。</p>
                    　　<p>本次测试相关文件：《测试合约信息及参数》（附件1），《测试内容及时间安排》（附件2）和《测试反馈表（样表）》（附件3、4）可在交易所网站（www.dce.com.cn）首页-“交易所通知”-“业务通知”中《关于开展期权业务全市场测试的通知》进行下载。</p>
                        <p>特此通知。</p>
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

    let active_id = 0;
    export default {
        data(){
            return {
                activeID:active_id
            }
        },
        beforeRouteEnter(to, from, next){
            let from_router = from.fullPath.substr(1);
            switch (from_router){
                case 'notice':
                    active_id = 0;
                    break;
                case 'business_notice':
                    active_id = 1;
                    break;
                case 'active_notice':
                    active_id = 2;
                    break;
                case 'info_notice':
                    active_id = 3;
                    break;
                case 'exchange_dynamic':
                    active_id = 4;
                    break;
            }
            next();
        },
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