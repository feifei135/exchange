<template>
    <!-- 我的购物车 -->
    <div class="c_my_order">
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
                    <div class="ucm_title">我的购物车</div>

                    <!-- 商品列表 -->
                    <div class="carts">
                        <table class="uc_table" style="table-layout:fixed">
                            <thead>
                                <tr>
                                    <th width="10%"><input type="checkbox" v-model="checkedAllModel" @change="checkedAll"></th>
                                    <th width="30%">挂单商品</th>
                                    <th width="10%">挂单单价</th>
                                    <th width="10%">挂单数量</th>
                                    <th width="10%">价格模式</th>
                                    <th width="15%">升贴水等费用</th>
                                    <th width="15%">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in productList">
                                    <td><input type="checkbox" class="chkbox" :value="item.id" v-model="checkedProduct"></td>
                                    <td>
                                        <img src="../../assets/images/sm_gg2.jpg" alt="">
                                        <span>{{item.name}}</span>
                                    </td>
                                    <td>{{item.price}}</td>
                                    <td>{{item.number}}</td>
                                    <td>{{item.model}}</td>
                                    <td>{{item.money}}</td>
                                    <td>
                                        <a href="#">查看</a>
                                        <a href="#">删除</a>
                                        <a href="#">应价</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
            return {
                checkedAllModel: false,
                checkedProduct:[],
                productList:[
                    {
                        id:'1',
                        name:'高山绿茶',
                        price:'1000',
                        number:'10',
                        model:'一口价',
                        money:'50/吨'
                    },
                    {
                        id:'2',
                        name:'高山绿茶',
                        price:'1000',
                        number:'10',
                        model:'一口价',
                        money:'50/吨'
                    },
                    {
                        id:'3',
                        name:'高山绿茶',
                        price:'1000',
                        number:'10',
                        model:'一口价',
                        money:'50/吨'
                    },
                    {
                        id:'4',
                        name:'高山绿茶',
                        price:'1000',
                        number:'10',
                        model:'一口价',
                        money:'50/吨'
                    },
                    {
                        id:'5',
                        name:'高山绿茶',
                        price:'1000',
                        number:'10',
                        model:'一口价',
                        money:'50/吨'
                    }
                ]
            }
        },
        methods:{
            checkedAll(){
                let _this = this;
                if(this.checkedAllModel){
                    _this.checkedProduct = [];
                    this.productList.forEach(function(item){
                        _this.checkedProduct.push(item.id);
                    })
                }else{
                    this.checkedProduct = [];
                }
            }
        },
        watch: {
            'checkedProduct':{
                handler:function(val, oldVal){
                    if(this.checkedProduct.length === this.productList.length) {
                        this.checkedAllModel =true;
                    }else{
                        this.checkedAllModel =false;
                    }
                }
            },
            deep: true
        },
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    .uc_table {
        width: 100%;
    }
    .uc_table thead {
        height: 50px;
        line-height: 50px;
        background-color: #3aa9f2;
    }
    .uc_table thead th{
        color: #fff;
        text-align: center;
    }
    .uc_table tbody tr{
        border: 1px solid #e0e0e0;
    }
    .uc_table tbody td{
        height: 80px;
        line-height: 80px;
        text-align: center;
        padding: 10px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .uc_table tbody td img{
        display: block;
        width: 100px;
        height: 80px;
        float: left;
    }
    .uc_table tbody td a{
        margin-right: 5px;
    }
    .uc_table tbody td a:hover{
        color: #3aa9f2;
    }
</style>