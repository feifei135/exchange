<template>
    <!-- 议价管理 -->
    <div class="c_order_manager pur_sup_auc">
        <!-- 头部 -->
        <header-bar></header-bar>
        <div class="lty_container">
            <!-- 当前位置 -->
            <div class="position_bar">
                <div class="g_wrap">
                    <div class="pos_lt">您的位置：首页 > 交易大厅</div>
                </div>
            </div>
            <div class="g_wrap list_main">
                <h3 class="list_title">订单管理</h3>
                <div class="uc_search">
                    <div class="search_lt">
                        <div class="item">
                            <span>订单编号</span><input type="text">
                        </div>
                        <div class="item">
                            <span>状态</span>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">春天</option>
                                <option value="2">夏天</option>
                                <option value="3">秋天</option>
                                <option value="4">冬天</option>
                            </select>
                        </div>
                        <div class="item daterange">
                            <span>起止时间</span>
                            <calendar size="small" type="daterange" format="yyyy/MM/dd" placeholder="选择日期"></calendar>
                        </div>
                    </div>
                    <div class="search_rt">
                        <a href="#" class="g_btn">查询</a>
                    </div>
                </div>
                <div class="pur_sup">
                    <table style="table-layout:fixed">
                        <thead>
                        <tr>
                            <th width="15%">订单编号</th>
                            <th width="15%">商品</th>
                            <th width="15%">单价</th>
                            <th width="15%">数量</th>
                            <th width="15%">创建时间</th>
                            <th width="15%">状态</th>
                            <th width="10%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orderList">
                                <td>{{item.deal_id}}</td>
                                <td>{{item.listing_title}}</td>
                                <td>￥{{item.deal_price}}</td>
                                <td>{{item.deal_qtt}}</td>
                                <td>{{item.deal_date}}</td>
                                <td>{{item.deal_status}}</td>
                                <td><a :href="'#/order_detail/'+item.deal_id">查看详情</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <page :total="total" :page-size="6" @on-change="switchPage" size="small" class-name="c_page"></page>

            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'

    import axios from 'axios'

    export default {
        data(){
            return {
                orderList:[],
                total:0,
                pageSize:6
            }
        },
        mounted(){
            this.getOrderList(1);
        },
        methods: {
            switchPage(pageIndex){
                this.getOrderList(pageIndex);
            },
            getOrderList(pageIndex){
                /* 我的订单 */
                axios.post(this.$store.state.api,{
                    "head": {
                        "sessionId":this.$store.state.sessionId,
                        "operatorType":"DoDealOrderQry"
                    },
                    "body": {
                        "clientId":this.$store.state.clientId,
                        "pageSize":this.pageSize,
                        "pageCount":pageIndex
                    }
                }).then((response) => {
                    let result = response.data.body[0];
                    if(result){
                        this.orderList = result.data;
                        this.total = result.totalCounts;
                    }
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar
        }
    }
</script>
<style>
    @import "../../assets/css/hall/pur_sup_table.css";
    @import "../../assets/css/uc/uc_search.css";
    .c_order_manager a:hover{
        color: #3aa9f2;
    }
</style>