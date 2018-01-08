<template>
    <!-- 仓单日报 -->
    <div class="c_quotation">
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
                <div class="c_quo_lt">
                    <quot-sidebar :activeID="4"></quot-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="c_quo_rt">
                    <div class="quo_title">仓单日报</div>
                    <!-- 搜索 -->
                    <div class="quo_search clearfix">
                        <div class="sch_item">
                            <label>品类</label>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">春天</option>
                                <option value="2">夏天</option>
                                <option value="3">秋天</option>
                                <option value="4">冬天</option>
                            </select>
                        </div>
                        <div class="sch_item daterange">
                            <label>日期</label>
                            <calendar size="small" type="date" format="yyyy/MM/dd" placeholder="选择日期"></calendar>
                        </div>
                        <div class="sch_btn">查询</div>
                    </div>
                    <!-- 表格 -->
                    <table class="quo_list" style="table-layout: fixed;">
                        <thead>
                        <tr>
                            <th width="20%">品种</th>
                            <th width="20%">仓库名称</th>
                            <th width="20%">昨日仓单量</th>
                            <th width="20%">今日仓单量</th>
                            <th width="20%">增减量</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                            <tr>
                                <td>绿茶</td>
                                <td>201706</td>
                                <td>100.00</td>
                                <td>110.00</td>
                                <td>99.00</td>
                            </tr>
                        </tbody>
                    </table>
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
    import QuotSidebar from './index/quot_sidebar.vue'

    export default {
        components: {
            HeaderBar,
            FooterBar,
            QuotSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/quotation/lty_quotation.css";
</style>