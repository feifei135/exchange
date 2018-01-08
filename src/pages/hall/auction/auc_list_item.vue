<template>
    <div class="c_list_item">
        <div class="im_top"><img src="../../../assets/images/banner03.jpg"></div>
        <div class="im_bom">
            <h3 class="im_title"><a href="#">竞拍标题名称</a></h3>
            <p class="im_row">当前价：￥<i class="clr_red">250元</i></p>
            <a href="#" class="im_btn end">
                <i></i>
                已结束
            </a>
        </div>
    </div>
</template>
<style>
    .c_list_item{
        width: 200px;
        height: 300px;
        float: left;
        margin: 0 20px 20px 0;
        border: 1px solid #e0e0e0;
    }
    .c_list_item .im_top{
        height: 130px;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_list_item .im_top img{
        max-width: 100%;
        height: 100%;
    }
    .c_list_item .im_bom{
        position: relative;
        height: 170px;
        padding: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_list_item .im_bom .clr_red{
        color: #ff0000;
    }
    .c_list_item .im_bom .im_title{
        text-align: center;
        color: #000;
        font-weight: 600;
        margin: 5px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .c_list_item .im_bom .im_title a{
        font-size: 16px;
    }
    .c_list_item .im_bom .im_row{
        width: 70%;
        margin: 0 auto 5px auto;
        color: #9d9d9d;
        font-size: 12px;
    }
    .c_list_item .im_bom .im_btn {
        position: absolute;
        bottom: 15px;
        left: 50%;
        display: block;
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin-left: -75px;
        color: #fff;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
    .c_list_item .im_bom .im_btn.ing{
        background-color: #f02d2d;
    }
    .c_list_item .im_bom .im_btn.will{
        background-color: #3e84e4;
    }
    .c_list_item .im_bom .im_btn.end{
        background-color: #a5a5a5;
    }
    .c_list_item .im_bom .im_btn i{
        display: inline-block;
        width: 25px;
        height: 20px;
        margin-left: 25px;
        vertical-align: middle;
        background: url("../../../assets/images/hall_icons.png") no-repeat;
    }
    .c_list_item .im_bom .im_btn.ing i{
        background-position: -332px -182px !important;
    }
    .c_list_item .im_bom .im_btn.end i{
        background-position: -370px -183px !important;
    }
    .c_list_item .im_bom .im_btn.will i{
        margin-left: 15px;
    }
</style>