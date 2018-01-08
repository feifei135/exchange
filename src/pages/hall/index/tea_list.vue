<template>
    <!-- 列表 -->
    <div class="c_tea_list">
        <div class="list_top">
            <span class="xs_price" @click="sellerGetPrice">销售报价</span>
            <span class="cg_price" @click="purchaseGetPrice">采购报价</span>
            <a href="#/supply_list" class="more">查看更多</a>
        </div>
        <div class="list_table">
            <table>
                <thead>
                    <tr>
                        <th width="25%">挂单标题</th>
                        <th width="12%" v-if="isInit==0">交易方向</th>
                        <th width="12%" v-else>价格模式</th>
                        <th width="15%">单价</th>
                        <th width="10%">数量</th>
                        <th width="18%">状态</th>
                        <th width="10%">发布时间</th>
                        <th width="10%">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>{{item.listingTitle}}</td>
                        <td v-if="isInit==0">{{item.buyorsell}}</td>
                        <td v-else>{{item.pricePattern}}</td>
                        <td class="clr_blue">{{item.listingPrice}}</td>
                        <td>{{item.listingQtt}} </td>
                        <td>{{item.listingStatus}}</td>
                        <td>{{item.listingDate}}</td>
                        <td><a :href="'#/supply/'+item.listingId" class="clr_blue">查看</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        props:['list','goodsId'],
        data(){
            return {
                isInit:0,
                sellerArgs:{
                    id:this.goodsId,
                    type:2,
                },
                purchaseArgs:{
                    id:this.goodsId,
                    type:1,
                }
            }
        },
        methods:{
            /*  销售报价 */
            sellerGetPrice(){
                this.isInit = 1;
                this.$emit('changeTeaList',this.sellerArgs);
            },
            /* 采购报价 */
            purchaseGetPrice(){
                this.isInit = 1;
                this.$emit('changeTeaList',this.purchaseArgs);
            }
        }
    }
</script>
<style>
    .c_tea_list .list_top{
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_tea_list .list_top span{
        position: relative;
        padding-right: 15px;
        margin-right: 10px;
        cursor: pointer;
    }
    .c_tea_list .list_top span:after{
        position: absolute;
        top: 7px;
        right: 0;
        display: block;
        width: 15px;
        height: 12px;
        content: "";
        background: url("../../../assets/images/hall_icons.png") no-repeat;
    }
    .c_tea_list .list_top .xs_price:after{
        background-position: -156px -42px;
    }
    .c_tea_list .list_top .cg_price:after{
        background-position: -180px -42px;
    }
    .c_tea_list .list_top .xs_price{
        color: #3f8fd8;
    }
    .c_tea_list .list_top .cg_price{
        color: #16afa8;
    }
    .c_tea_list .list_table table{
        width: 100%;
        text-align: center;
    }
    .c_tea_list .list_table table thead{
        height: 30px;
        line-height: 30px;
        background-color: #3f8fd8;
    }
    .c_tea_list .list_table table th{
        text-align: center;
        color: #fff;
        font-size: 12px;
    }
    .c_tea_list .list_table table tr{
        height: 30px;
        line-height: 30px;
    }
    .c_tea_list .list_table table td{
        font-size: 12px;
    }
</style>