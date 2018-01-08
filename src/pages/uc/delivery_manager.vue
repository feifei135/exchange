<template>
    <!-- 交收管理 -->
    <div class="c_delivery_manager pur_sup_auc">
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
                <h3 class="list_title">交收管理</h3>
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
                            <th width="5%">序号</th>
                            <th width="10%">订单编号</th>
                            <th width="20%">商品</th>
                            <th width="10%">单价</th>
                            <th width="10%">数量</th>
                            <th width="10%">总价格</th>
                            <th width="10%">创建时间</th>
                            <th width="10%">状态</th>
                            <th width="15%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#/delivery_detail">详情</a>
                                    <a href="javascript:void(0);" @click="confirmOrder">确认收货</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#/delivery_detail">详情</a>
                                    <a href="javascript:void(0);" @click="confirmBill">确认收票</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#/delivery_detail">详情</a>
                                    <a href="javascript:void(0);" @click="confirmOrder">确认收货</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#/delivery_detail">详情</a>
                                    <a href="javascript:void(0);" @click="confirmBill">确认收票</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#">详情</a>
                                    <a href="javascript:void(0);" @click="rated">我要评价</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zl111212</td>
                                <td>挂单标题</td>
                                <td>￥1500.00</td>
                                <td>10</td>
                                <td>￥530.00</td>
                                <td>2017/05/27</td>
                                <td>卖家已发货</td>
                                <td>
                                    <a href="#">详情</a>
                                    <a href="javascript:void(0);" @click="rated">我要评价</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <page :total="1000" size="small" class-name="c_page"></page>

                <modal
                    title="提示"
                    width="200"
                    v-model="confirmOrderModal"
                    class-name="vertical-center-modal">
                    <p style="text-align: center;">您确认收货吗?</p>
                </modal>
                <modal
                    title="提示"
                    width="200"
                    v-model="confirmBillModal"
                    class-name="vertical-center-modal">
                    <p style="text-align: center;">您确认收票吗?</p>
                </modal>
                <modal
                    title="评价"
                    width="350"
                    v-model="ratedModal"
                    class-name="vertical-center-modal">
                    <p style="text-align: center;"><span class="rate_text">商品描述</span><rate v-model="rate1"></rate></p>
                    <p style="text-align: center;"><span class="rate_text">物流服务</span><rate v-model="rate2"></rate></p>
                    <p style="text-align: center;"><span class="rate_text">服务态度</span><rate v-model="rate3"></rate></p>
                </modal>


            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'


    export default {
        data(){
            return {
                confirmOrderModal:false,
                confirmBillModal:false,
                ratedModal: false,
                rate1:1,
                rate2:2,
                rate3:3
            }
        },
        methods: {
            confirmOrder(){
                this.confirmOrderModal = !this.confirmOrderModal;
            },
            confirmBill(){
                this.confirmBillModal = !this.confirmBillModal;
            },
            rated(){
                this.ratedModal = !this.ratedModal;
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
    .c_delivery_manager a{
        margin-right: 10px;
    }
    .c_delivery_manager a:hover{
        color: #3aa9f2;
    }
    .rate_text{
        position: relative;
        top: 3px;
        margin-right: 20px;
    }

</style>