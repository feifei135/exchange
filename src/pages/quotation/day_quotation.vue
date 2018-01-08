<template>
    <!-- 日行情 -->
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
                    <quot-sidebar :activeID="0"></quot-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="c_quo_rt">
                    <div class="quo_title">日行情数据</div>
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
                                <th width="8%">品种</th>
                                <th width="9%">交割月份</th>
                                <th width="8%">开盘价</th>
                                <th width="8%">最高价</th>
                                <th width="8%">最低价</th>
                                <th width="8%">收盘价</th>
                                <th width="8%">结算价</th>
                                <th width="8%">涨跌率</th>
                                <th width="8%">成交量</th>
                                <th width="8%">持仓量</th>
                                <th width="10%">持仓量变化</th>
                                <th width="9%">成交额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in list">
                                <td>{{item.a}}</td>
                                <td>{{item.b}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.c}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.d}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.e}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.f}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.g}}</td>
                                <td :class="[item.h.substr(0,1)=='-' ? 'gn' : 'rd']">{{item.h}}</td>
                                <td>{{item.i}}</td>
                                <td>{{item.j}}</td>
                                <td>{{item.n}}</td>
                                <td>{{item.l}}</td>
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
        data(){
            return {
                list:[
                    {
                        a:'绿茶',
                        b:'201706',
                        c:100.00,
                        d:112,
                        e:11,
                        f:43,
                        g:23,
                        h:'10%',
                        i:23,
                        j:29,
                        n:123,
                        l:233
                    },
                    {
                        a:'绿茶',
                        b:'201706',
                        c:100.00,
                        d:112,
                        e:11,
                        f:43,
                        g:23,
                        h:'-23%',
                        i:23,
                        j:29,
                        n:123,
                        l:233
                    }
                ]
            }
        },
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