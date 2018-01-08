<template>
    <!-- 行情侧边栏 -->
    <div class="c_quote_sidebar">
        <a :href="item.url" v-for="(item,index) in items" :class="{active:index == activeID}">{{item.text}}</a>
    </div>
</template>
<script>
    export default{
        props:['activeID'],
        data(){
            return {
                items: [
                    {url:"#/day_quotation",text:"日行情数据"},
                    {url:"#/week_quotation",text:"周行情数据"},
                    {url:"#/month_quotation",text:"月行情数据"},
                    {url:"#/delay_quotation",text:"品种延时行情"},
                    {url:"#/warehouse_daily",text:"仓单日报"},
                    {url:"#/delivery_daily",text:"交收日报"},
                    {url:"#/deal_ranking",text:"成交持仓排名"}
                ]
            }
        }
    }
</script>
<style>
    .c_quote_sidebar{
        padding-top: 1px;
        background-color: #fff;
    }
    .c_quote_sidebar a{
        display: block;
        height: 45px;
        line-height: 45px;
        text-indent: 10px;
        margin-top: -1px;
        color: #006c05;
        font-size: 16px;
        font-weight: 600;
        border: 1px solid #e0e0e0;
    }
    .c_quote_sidebar a.active,
    .c_quote_sidebar a:hover{
        color: #fff;
        background-color: #006c05;
    }
</style>