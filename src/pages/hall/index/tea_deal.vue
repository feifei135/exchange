<template>
    <!-- 实时成交 -->
    <div class="c_tea_deal">
        <div class="dl_top"><span>实时成交</span></div>
        <div class="dl_main">
            <div class="dl_head">
                <span class="cell">品种</span>
                <span class="cell">价格(元/吨)</span>
                <span class="cell">状态</span>
            </div>

            <div class="dl_body">
                <ul>
                    <li v-for="item in list">
                        <span class="cell">{{item.listingTitle}}</span>
                        <span class="cell">{{item.dealPrice}}</span>
                        <span class="cell">{{item.status==1?'未交收':'已交收'}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['list']
    }
</script>
<style>
    .c_tea_deal .dl_top{
        height: 45px;
        line-height: 45px;
    }
    .c_tea_deal .dl_main{
        height: 255px;
        overflow: hidden;
        background-color: #ebf5ff;
    }
    .c_tea_deal .dl_main .dl_head{
        height: 30px;
        height: 30px;
        color: #fff;
        font-size: 12px;
        background-color: #3f8fd8;
    }
    .c_tea_deal .dl_main .cell {
        display: block;
        width: 33.3%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        float: left;
        font-size: 12px;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .c_tea_deal .dl_main .dl_body{
        height: 220px;
        padding-top: 10px;
        overflow: hidden;
    }
    .c_tea_deal .dl_main .dl_body ul li{
        height: 30px;
    }
</style>