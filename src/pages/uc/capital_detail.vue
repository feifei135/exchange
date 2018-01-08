<template>
    <!-- 账户付款 -->
    <div class="c_capital_detail">
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
                    <div class="ucm_title">收支明细</div>

                    <!-- 检索区域 -->
                    <div class="cpl_dtl_top">
                        <div class="date">
                            <label>日期：</label>
                            <calendar size="small" type="daterange" format="yyyy/MM/dd" placeholder="选择日期" style="width:200px"></calendar>
                        </div>
                        <div class="type">
                            <label>业务类型：</label>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">收取货款</option>
                                <option value="2">其它款项</option>
                            </select>
                        </div>
                        <div class="btns"><a href="#" class="search">查询</a></div>
                    </div>

                    <!-- table -->
                    <div class="cpl_dtl_tab">
                        <div class="row hdr">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">序号</span>
                            <span class="cell3">日期</span>
                            <span class="cell4">收入</span>
                            <span class="cell5">支出</span>
                            <span class="cell6">结余</span>
                            <span class="cell7">业务单号</span>
                            <span class="cell8">业务类型</span>
                        </div>
                        <div class="row">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">1</span>
                            <span class="cell3">2017/02/23</span>
                            <span class="cell4">1002.00</span>
                            <span class="cell5">44546.00</span>
                            <span class="cell6">8555.00</span>
                            <span class="cell7">ZL12312312312</span>
                            <span class="cell8">支付货款</span>
                        </div>
                        <div class="row">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">1</span>
                            <span class="cell3">2017/02/23</span>
                            <span class="cell4">1002.00</span>
                            <span class="cell5">44546.00</span>
                            <span class="cell6">8555.00</span>
                            <span class="cell7">ZL12312312312</span>
                            <span class="cell8">支付货款</span>
                        </div>
                        <div class="row">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">1</span>
                            <span class="cell3">2017/02/23</span>
                            <span class="cell4">1002.00</span>
                            <span class="cell5">44546.00</span>
                            <span class="cell6">8555.00</span>
                            <span class="cell7">ZL12312312312</span>
                            <span class="cell8">支付货款</span>
                        </div>
                        <div class="row">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">1</span>
                            <span class="cell3">2017/02/23</span>
                            <span class="cell4">1002.00</span>
                            <span class="cell5">44546.00</span>
                            <span class="cell6">8555.00</span>
                            <span class="cell7">ZL12312312312</span>
                            <span class="cell8">支付货款</span>
                        </div>
                        <div class="row">
                            <span class="cell1"><input type="checkbox"></span>
                            <span class="cell2">1</span>
                            <span class="cell3">2017/02/23</span>
                            <span class="cell4">1002.00</span>
                            <span class="cell5">44546.00</span>
                            <span class="cell6">8555.00</span>
                            <span class="cell7">ZL12312312312</span>
                            <span class="cell8">支付货款</span>
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
    .c_capital_detail .cpl_dtl_top {
        height: 24px;
        overflow: hidden;
    }
    .c_capital_detail .cpl_dtl_top > div{
        line-height: 24px;
        float: left;
        margin-right: 50px;
    }
    .c_capital_detail .cpl_dtl_top label{
        display: block;
        float: left;
    }
    .c_capital_detail .ivu-date-picker {
        float: left !important;
    }
    .c_capital_detail .ivu-input {
        outline: none;
        border-color: #ccc !important;
        border-radius: 0 !important;
    }
    .c_capital_detail select {
        width: 130px;
        height: 24px;
        float: left;
        color: #657180;
        font-size: 12px;
        padding-left: 5px;
        border: 1px solid #ccc;
    }
    .c_capital_detail .search{
        display: block;
        width: 80px;
        height: 24px;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        background-color: #ff7200;
    }
    /* 收支明细列表 */
    .cpl_dtl_tab{
        padding-top: 30px;
    }
    .cpl_dtl_tab .row {
        width: 100%;
        height: 45px;
        line-height: 45px;
        margin-top: -1px;
        overflow: hidden;
        border: 1px solid #e0e0e0;
    }
    .cpl_dtl_tab .row.hdr span{
        color: #333;
        font-size: 14px;
    }
    .cpl_dtl_tab .row span{
        display: block;
        float: left;
        color: #555;
        font-size: 12px;
        text-align: center;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .cpl_dtl_tab .row .cell1{
       width: 5%;
    }
    .cpl_dtl_tab .row .cell2{
        width: 5%;
    }
    .cpl_dtl_tab .row .cell3{
        width: 15%;
    }
    .cpl_dtl_tab .row .cell4{
        width: 15%;
    }
    .cpl_dtl_tab .row .cell5{
        width: 15%;
    }
    .cpl_dtl_tab .row .cell6{
        width: 15%;
    }
    .cpl_dtl_tab .row .cell7{
        width: 15%;
    }
    .cpl_dtl_tab .row .cell8{
        width: 15%;
    }
</style>