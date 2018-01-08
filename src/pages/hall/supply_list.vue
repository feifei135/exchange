<template>
    <div class="c_supply_list pur_sup_auc">
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
                <h3 class="list_title">挂单列表</h3>
                <!-- 列表上的搜索栏 -->
                <div class="c_list_search">
                    <div class="sch_top">
                        <div class="items">
                            <div class="items_lt">按方向</div>
                            <div class="items_rt">
                                <div class="options">
                                    <span>不限</span>
                                    <span>销售</span>
                                    <span>采购</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="items_lt">按品类</div>
                            <div class="items_rt">
                                <div class="options">
                                    <span>不限</span>
                                    <span>绿茶原茶</span>
                                    <span>红茶绿茶</span>
                                    <span>绿茶极品</span>
                                    <span>红茶极品</span>
                                    <span>其它</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="items_lt">按状态</div>
                            <div class="items_rt">
                                <div class="options">
                                    <span>不限</span>
                                    <span>进行中</span>
                                    <span>已摘牌</span>
                                    <span>已取消</span>
                                    <span>已过期</span>
                                </div>
                            </div>
                        </div>
                        <div class="items" :class="{toggle:isToggle1}">
                            <div class="items_lt">按交收地</div>
                            <div class="items_rt">
                                <div class="options">
                                    <span>不限</span>
                                    <span>北京</span>
                                    <span>天津</span>
                                    <span>河北</span>
                                    <span>内蒙古</span>
                                    <span>吉林</span>
                                    <span>江苏</span>
                                    <span>安徽</span>
                                    <span>江西</span>
                                    <span>河南</span>
                                    <span>湖南</span>
                                    <span>广西</span>
                                    <span>四川</span>
                                    <span>云南</span>
                                    <span>陕西</span>
                                    <span>上海</span>
                                    <span>重庆</span>
                                    <span>山西</span>
                                    <span>辽宁</span>
                                    <span>黑龙江</span>
                                    <span>浙江</span>
                                    <span>福建</span>
                                    <span>山东</span>
                                    <span>湖北</span>
                                    <span>广东</span>
                                    <span>海南</span>
                                    <span>贵州</span>
                                    <span>西藏</span>
                                    <span>青海</span>
                                    <span>新疆</span>
                                    <span>甘肃</span>
                                    <span>宁夏</span>
                                    <span>香港</span>
                                    <span>澳门</span>
                                    <span>台湾</span>
                                </div>
                                <div class="btn_toggle" @click="toggleDown1">{{btnText1}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list_box clearfix">
                    <div class="sort_bar clearfix">
                        <div class="btn_sort active">发布时间 <i class="icon_arrow"></i></div>
                        <div class="btn_sort">供应量 <i class="icon_arrow"></i></div>
                        <div class="btn_sort btn_price">价格 <i class="icon_arrow"></i></div>
                    </div>
                    <div class="c_sup_tab pur_sup">
                        <table style="table-layout:fixed">
                            <thead>
                            <tr>
                                <th width="10%">挂单标题</th>
                                <th width="10%">商家名称</th>
                                <th width="8%">交收地</th>
                                <th width="8%">挂单类型</th>
                                <th width="6%">品类</th>
                                <th width="8%">等级</th>
                                <th width="8%">价格类型</th>
                                <th width="8%">单价(元/吨)</th>
                                <th width="8%">数量(吨)</th>
                                <th width="8%">发布时间</th>
                                <th width="8%">挂单状态</th>
                                <th width="10%">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in list">
                                    <td>{{item.listingTitle}}</td>
                                    <td>{{item.bizName}}</td>
                                    <td>{{item.csgPlace}}</td>
                                    <td>{{item.buyorsell}}</td>
                                    <td>{{item.goodsName}}</td>
                                    <td>{{item.goodsLevel}}</td>
                                    <td>{{item.priceType}}</td>
                                    <td>{{item.listingPrice}}</td>
                                    <td>￥{{item.listingQtt}}</td>
                                    <td>{{item.listingDate}}</td>
                                    <td>{{item.listingStatus}}</td>
                                    <td>
                                        <a :href="'#/supply/'+item.listingId" class="go_detail">详情</a>
                                        <a href="#" class="add_cart">加入购物车</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <page :total="total" :page-size="pageSize" @on-change="switchPage" size="small" class-name="c_page"></page>
            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>

    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import axios from 'axios';

    export default {
        data(){
            return {
                list:[],
                btnText1: '展开',
                isToggle1:false,
                total:0,
                pageSize:6
            }
        },
        mounted(){
            let self = this;
            /* 列表 */
            axios.post(this.$store.state.api,{
                "head": {
                    "sessionId":"000000",
                    "operatorType":"DoListingCommnQry"
                },
                "body": {}
            }).then(function (response) {
                let res = response.data.body[0];
                console.log(res);
                self.list = res.data;
                self.total = res.totalCounts;
            });
        },
        methods: {
            toggleDown1(){
                this.isToggle1 = !this.isToggle1;
                this.isToggle1?this.btnText1 = '收起':this.btnText1 = '展开';
            },
            switchPage(pageIndex){
              this.getListByPageIndex(pageIndex);
            },
            getListByPageIndex(pageIndex){
                axios.post(this.$store.state.api,{
                    "head": {
                        "sessionId":"000000",
                        "operatorType":"DoListingCommnQry"
                    },
                    "body": {
                        "pageSize":this.pageSize,
                        "pageCount":pageIndex
                    }
                }).then((response)=>{
                    let res = response.data.body[0];
                    this.list = res.data;
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar,
        }
    }
</script>
<style>
    @import "../../assets/css/hall/sort_bar.css";
    @import "../../assets/css/hall/pur_sup_list.css";
    @import "../../assets/css/hall/search_bar.css";
    @import "../../assets/css/hall/pur_sup_table.css";
    @import "../../assets/css/common/page.css";

</style>