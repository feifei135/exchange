<template>
    <!-- 供求信息 -->
    <div class="c_demand_info pur_sup_auc">
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
                <h3 class="list_title">供求信息</h3>
                <div class="uc_search">
                    <div class="search_lt">
                        <div class="item">
                            <span>挂单id</span><input type="text">
                        </div>
                        <div class="item">
                            <span>类型</span>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">春天</option>
                                <option value="2">夏天</option>
                                <option value="3">秋天</option>
                                <option value="4">冬天</option>
                            </select>
                        </div>
                        <div class="item">
                            <span>状态</span>
                            <select name="status">
                                <option value="0">请选择</option>
                                <option value="1">红色</option>
                                <option value="2">黄色</option>
                                <option value="3">灰色</option>
                            </select>
                        </div>
                    </div>
                    <div class="search_rt">
                        <a href="#" class="g_btn">查询</a>
                        <a href="#/create_product" class="g_btn">发布信息</a>
                    </div>
                </div>
                <div class="pur_sup">
                    <table style="table-layout:fixed">
                        <thead>
                        <tr>
                            <th width="15%">挂单id</th>
                            <th width="20%">商品名称</th>
                            <th width="10%">交易方向</th>
                            <th width="10%">单价</th>
                            <th width="10%">数量</th>
                            <th width="15%">创建时间</th>
                            <th width="20%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>zl123123123</td>
                                <td>XXXXX红茶</td>
                                <td>销售</td>
                                <td>￥1500.00</td>
                                <td>33吨</td>
                                <td>2017/05/10 10:20:21</td>
                                <td class="operation">
                                    <a href="javascript:void(0);" @click="btn_cancel">取消</a>
                                    <a href="#">修改</a>
                                    <a href="#">详情</a>
                                </td>
                            </tr>
                            <tr>
                                <td>zl123123123</td>
                                <td>XXXXX红茶</td>
                                <td>销售</td>
                                <td>￥1500.00</td>
                                <td>33吨</td>
                                <td>2017/05/10 10:20:21</td>
                                <td class="operation">
                                    <a href="javascript:void(0);" @click="btn_cancel">取消</a>
                                    <a href="#">修改</a>
                                    <a href="#">详情</a>
                                </td>
                            </tr>
                            <tr>
                                <td>zl123123123</td>
                                <td>XXXXX红茶</td>
                                <td>销售</td>
                                <td>￥1500.00</td>
                                <td>33吨</td>
                                <td>2017/05/10 10:20:21</td>
                                <td class="operation">
                                    <a href="javascript:void(0);" @click="btn_cancel">取消</a>
                                    <a href="#">修改</a>
                                    <a href="#">详情</a>
                                </td>
                            </tr>
                            <tr>
                                <td>zl123123123</td>
                                <td>XXXXX红茶</td>
                                <td>销售</td>
                                <td>￥1500.00</td>
                                <td>33吨</td>
                                <td>2017/05/10 10:20:21</td>
                                <td class="operation">
                                    <a href="javascript:void(0);" @click="btn_cancel">取消</a>
                                    <a href="#">修改</a>
                                    <a href="#">详情</a>
                                </td>
                            </tr>
                            <tr>
                                <td>zl123123123</td>
                                <td>XXXXX红茶</td>
                                <td>销售</td>
                                <td>￥1500.00</td>
                                <td>33吨</td>
                                <td>2017/05/10 10:20:21</td>
                                <td class="operation">
                                    <a href="javascript:void(0);" @click="btn_cancel">取消</a>
                                    <a href="#">修改</a>
                                    <a href="#">详情</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <page :total="1000" size="small" class-name="c_page"></page>


                <!-- 取消的弹出层 -->
                <modal
                        title="提示"
                        width="300"
                        v-model="modal01"
                        :scrollable="true"
                        @on-ok="onOk"
                        class-name="vertical-center-modal">
                    <p class="confirm_text">您确定取消发布信息吗？</p>
                </modal>
                <!-- 成功 -->
                <div class="c_modal_success" v-show="modal02">
                    <div class="mdl_succ_cont">取消成功</div>
                </div>

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
                modal01:false,
                modal02:false
            }
        },
        methods: {
            btn_cancel(){
                this.modal01 = true;
            },
            onOk(){
                this.modal02 = true;
                setTimeout(() => {
                    this.modal02 = false;
                }, 1000);
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
    .c_demand_info .operation a{
        padding: 0 5px;
    }
    .c_demand_info .operation a:hover{
        color: #3f8fd8;
    }
    .confirm_text {
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
    }
</style>