<template>
    <div class="c_tea_news">
        <div class="ns_top">
            <a href="#"><img src="http://192.168.101.196:8989/zlebank/image/news.jpg"></a>
            <div class="ns_top_text">新鲜资讯 <a href="#">查看更多</a></div>
        </div>
        <div class="ns_list">
            <a href="#" class="g_ellipsis" v-for="item in list">{{item.newsTitle}}</a>
        </div>
    </div>
</template>
<script>
    export default {
        props:['list']
    }
</script>
<style>
    .c_tea_news .ns_top{
        position: relative;
        height: 230px;
    }
    .c_tea_news .ns_top img{
        height: 100%;
    }
    .c_tea_news .ns_top_text {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        padding: 0 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: url("../../../assets/images/opacity.png");
    }
    .c_tea_news .ns_top_text a{
        color: #fff;
        float: right;
    }
    .c_tea_news .ns_list {
        margin-top: 8px;
    }
    .c_tea_news .ns_list a{
        display: block;
        font-size: 12px;
    }
</style>