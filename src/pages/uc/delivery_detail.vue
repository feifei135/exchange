<template>
    <!-- 交收详情 -->
    <div class="c_delivery_detail">
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
                    <div class="ucm_title">交收信息</div>

                    <!-- 交易状态 -->
                    <div class="dtl_state">
                        <div class="si clearfix" :class="'cs'+currentStatus">
                            <span class="icon1"></span>
                            <span class="line aw1"></span>
                            <span class="icon2"></span>
                            <span class="line aw2"></span>
                            <span class="icon3"></span>
                            <span class="line aw3"></span>
                            <span class="icon4"></span>
                            <span class="line aw4"></span>
                            <span class="icon5"></span>
                        </div>
                        <div class="st clearfix">
                            <span class="sp1">卖家发货</span>
                            <span class="sp2">买家确认收货</span>
                            <span class="sp3">卖家已开票</span>
                            <span class="sp4">买家确认收票</span>
                            <span class="sp5">交易完成</span>
                        </div>
                    </div>

                    <dl class="dtl_item">
                        <dt>交收信息</dt>
                        <dd class="clearfix">
                            <span>交收仓库：浙江杭州</span>
                            <span>交收截止时间：2017-04-30 24:00:00</span>
                            <span>交收批次：1</span>
                            <span>发货时间：2017-04-30 24:00:00</span>
                            <span>交收数量：1</span>
                            <span>发货联系人：张三</span>
                            <span>发货联系人电话：13695552224</span>
                        </dd>
                    </dl>
                    <dl class="dtl_item">
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
            return {
                currentStatus:4
            }
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
    .dtl_state{margin-bottom:50px}
    .dtl_state span{display:block;float:left}
    .dtl_state .si span{width:30px;height:30px;background:url("../../assets/images/delivery_icon.png") no-repeat}
    .dtl_state .si .line{background-position:-10px -66px}
    .dtl_state .si .icon1{background-position:-10px -32px}
    .dtl_state .si .icon2{background-position:-56px -32px}
    .dtl_state .si .icon3{background-position:-97px -32px}
    .dtl_state .si .icon4{background-position:-140px -32px}
    .dtl_state .si .icon5{background-position:-180px -32px}
    .si.cs1 .icon1,.si.cs2 .icon1,.si.cs3 .icon1,.si.cs4 .icon1,.si.cs5 .icon1{background-position:-10px -2px}
    .si.cs2 .icon2,.si.cs3 .icon2,.si.cs4 .icon2,.si.cs5 .icon2{background-position:-56px -2px}
    .si.cs3 .icon3,.si.cs4 .icon3,.si.cs5 .icon3{background-position:-97px -2px}
    .si.cs4 .icon4,.si.cs5 .icon4{background-position:-140px -2px}
    .si.cs5 .icon5{background-position:-180px -2px}
    .si.cs2 .aw1,.si.cs3 .aw1,.si.cs4 .aw1,.si.cs5 .aw1,.si.cs3 .aw2,.si.cs5 .aw2,.si.cs4 .aw2,.si.cs4 .aw3,.si.cs5 .aw3,.si.cs5 .aw4{background-position:-124px -66px}
    .dtl_state .si .line{width:100px;height:15px;margin-top:10px}
    .dtl_state .st{margin-top:20px}
    .dtl_state .st .sp2,.dtl_state .st .sp3{margin-left:50px}
    .dtl_state .st .sp4,.dtl_state .st .sp5{margin-left:60px}
</style>