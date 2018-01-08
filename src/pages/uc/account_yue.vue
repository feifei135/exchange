<template>
    <!-- 账户付款 -->
    <div class="c_account_yue">
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
                    <div class="ucm_title">账户余额 <a href="#">我要出入金</a></div>
                    <!-- 账户余额 -->
                    <div class="yue_list">
                        <div class="list_hd">会员余额查询</div>
                        <ul class="list_bd">
                            <li>
                                <span class="cell1">会员名称</span>
                                <span class="cell2">会员企业名称</span>
                                <span class="cell3">冻结资金</span>
                                <span class="cell4">可用资金</span>
                                <span class="cell5">账户余额</span>
                            </li>
                            <li>
                                <span class="cell1">zhangsan123123</span>
                                <span class="cell2">北京XXX科技有限公司</span>
                                <span class="cell3">560000.00</span>
                                <span class="cell4">100000.00</span>
                                <span class="cell5"><i class="clr_red">52222200.00</i></span>
                            </li>
                        </ul>
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
    /* 账户余额 */
    .yue_list .list_hd{
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        background-color: #3aa9f2;
    }
    .yue_list .list_bd{
        border-left: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
    }
    .yue_list .list_bd li{
        font-size: 0;
        padding: 10px 0 5px;
        border-bottom: 1px solid #e0e0e0;
    }
    .yue_list .list_bd li span{
        display: inline-block;
        font-size: 14px;
        text-align: center;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .yue_list .list_bd .cell1,
    .yue_list .list_bd .cell2{
        width: 25%;
    }
    .yue_list .list_bd .cell3,
    .yue_list .list_bd .cell4{
        width: 16%;
    }
    .yue_list .list_bd .cell5{
        width: 18%;
    }
</style>