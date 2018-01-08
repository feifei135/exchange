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
                    {url:"#/notice",text:"公告通知"},
                    {url:"#/business_notice",text:"业务通知"},
                    {url:"#/active_notice",text:"活动通知"},
                    {url:"#/info_notice",text:"信息披露"},
                    {url:"#/exchange_dynamic",text:"交易所动态"}
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