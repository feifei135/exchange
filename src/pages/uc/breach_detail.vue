<template>
    <!-- 违约详情 -->
    <div class="c_breach_detail">
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
                <!-- 侧边栏 -->
                <uc-sidebar></uc-sidebar>
                <!-- 用户中心content区域 -->
                <div class="uc_main">
                    <!-- uc_main_title -->
                    <div class="ucm_title">违约信息</div>
                    <dl class="dtl_item">
                        <dt>订单状态：已成交</dt>
                        <dd class="clearfix">
                            <span>违约编号：WU123123123121</span>
                            <span>订单编号：WU123123123121</span>
                            <span>违约理由：卖方不转移货权</span>
                            <span>创建时间：2017/12/12 12:00</span>
                            <span>投诉方：zhangsan001</span>
                            <span>被投诉方：wangwu002</span>
                            <span>状态：判罚结束</span>
                            <span>约凭证：xxx.jpg</span>
                            <span>判罚结果：卖方违约,扣除履约保证金</span>
                        </dd>
                    </dl>
                    <dl class="dtl_item">
                        <dt>交收信息</dt>
                        <dd class="clearfix">
                            <span>订单编号：WU123123123121</span>
                            <span>挂单id：WU123123123121</span>
                            <span>单价：1500.00/吨</span>
                            <span>挂单名称：XXXXXXXX</span>
                            <span>升贴水：9.00/吨</span>
                            <span>挂单数量：1</span>
                            <span>溢短：0.5%</span>
                            <span>挂单方式：保证金挂单</span>
                            <span>买方：张三有限责任公司</span>
                            <span>卖方：王五有限责任公司</span>
                            <span>状态：LK2323423</span>
                            <span>创建时间：2017/12/22</span>
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
    import UcSidebar from './index/uc_sidebar.vue'

    export default{
        data(){
            return {}
        },
        methods:{},
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_detail_lty.css";
</style>