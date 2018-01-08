<template>
    <!-- tea-item -->
    <div class="c_tea_item">
        <div class="im_top"><img :src="list.pictureUrl"></div>
        <div class="im_bom">
            <h3><a href="#">{{list.listingTitle}}</a></h3>
            <p class="cur_price">当前价：<i class="clr_red">{{list.curPrice}}</i></p>
            <p class="lst_time">时间剩余：<i>{{list.leftTime}}</i></p>
            <p class="get_price">出价：<i>{{list.bidCounts}}次</i></p>
            <a href="#" class="item_link">
                <i></i>
                我要出价
            </a>
        </div>
    </div>
</template>
<script>
    export default{
        props:['list'],
    }
</script>
<style>
    .c_tea_item {
        float: left;
        width: 180px;
        height: 270px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #e0e0e0;
    }
    .c_tea_item .im_top{
        height: 115px;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_tea_item .im_top img{
        height: 100%;
    }
    .c_tea_item .im_bom{
        padding: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_tea_item .im_bom h3{
        text-align: center;
        color: #000;
        font-weight: 600;
        margin: 5px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .c_tea_item .im_bom p{
        width: 70%;
        margin: 0 auto 5px auto;
        color: #9d9d9d;
        font-size: 12px;
    }
    .c_tea_item .im_bom .item_link {
        display: block;
        width: 135px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto 0 auto;
        color: #fff;
        background-color: #f02d2d;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
    .c_tea_item .im_bom .item_link i{
        display: inline-block;
        width: 25px;
        height: 20px;
        margin-left: 25px;
        vertical-align: middle;
        background: url("../../../assets/images/hall_icons.png") no-repeat;
        background-position: -335px -39px;
    }
</style>