<template>
    <!-- 茶叶详情：红茶,绿茶,其它 -->
   <div class="c_tea" :id="id">
       <div class="tea_nav">
           <div class="tea_name"><i class="icon"></i>{{name}}</div>
           <div class="tea_area">
               <ul>
                   <li><a href="#" class="active">华南地区</a></li>
                   <li><a href="#">东北地区</a></li>
                   <li><a href="#">华北地区</a></li>
                   <li><a href="#">华中地区</a></li>
                   <li><a href="#">西南地区</a></li>
                   <li><a href="#">西北地区</a></li>
               </ul>
           </div>
       </div>
       <!-- 资讯,列表,实时成交 -->
       <div class="tea_info clearfix">
            <!-- 资讯 -->
            <div class="info_lt">
                <tea-news></tea-news>
            </div>
            <!-- 列表 -->
            <div class="info_cr">
                <tea-list></tea-list>
            </div>
            <!-- 实时成交 -->
            <div class="info_rt">
                <tea-deal></tea-deal>
            </div>
       </div>

       <!--竞拍：auction-->
       <div class="tea_auction clearfix">
           <div class="auc_sidebar">
               <div class="sidebar_title">
                   <i class="icon_auc"></i>
                   竞拍
               </div>
               <!-- 竞拍状态 -->
               <div class="auc_state">
                   <span class="ste_ing">进行中</span>
                   <span class="ste_will">未开始</span>
                   <span class="ste_end">已结束</span>
               </div>
           </div>
           <div class="auc_main">
               <div class="main_top"><a href="#" class="more">查看更多</a></div>
               <div class="main_list">
                   <div class="main_wrap">
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                       <tea-item></tea-item>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
    import TeaNews from './tea_news.vue'
    import TeaDeal from './tea_deal.vue'
    import TeaList from './tea_list.vue'
    import TeaItem from './tea_item.vue'

    export default {
        props: {
            id:String,
            name:{
                type:String,
                default:"红茶"
            }
        },
        components: {
            TeaNews,
            TeaDeal,
            TeaList,
            TeaItem
        }
    }
</script>
<style>
    .c_tea {
        margin-bottom: 30px;
    }
    .c_tea .more{
        float: right;
        color: #c8191f;
    }
    .c_tea .clr_red{
        color: #f02d2d;
    }
    .c_tea .clr_blue{
        color: #3f8fd8;
    }
    /* nav */
    .c_tea .tea_nav{
        height: 48px;
        overflow: hidden;
        border-bottom: 2px solid #3f8fd8;
    }
    .c_tea .tea_name{
        width: 140px;
        height: 50px;
        line-height: 50px;
        float: left;
        color: #019b07;
        font-size: 20px;
        font-weight: 600;
    }
    .c_tea .tea_name .icon{
        display: block;
        float: left;
        width: 50px;
        height: 35px;
        margin-top: 10px;
        background: url("../../../assets/images/hall_icons.png") no-repeat;
        background-position: -228px -30px;
    }
    .c_tea .tea_area{
        width: 760px;
        height: 48px;
        line-height: 48px;
        float: right;
    }
    .c_tea .tea_area ul li{
        float: left;
        margin-right: 45px;
    }
    .c_tea .tea_area ul li:last-child{
        margin-right: 0;
    }
    .c_tea .tea_area ul li a{
        display: block;
        height: 46px;
        padding: 0 15px;
    }
    .c_tea .tea_area ul li a.active,
    .c_tea .tea_area ul li a:hover{
        color: #3f8fd8;
        border-bottom: 2px solid #3f8fd8;
    }
    /* info */
    .c_tea .tea_info{
        height: 300px;
    }
    /* 资讯 */
    .c_tea .info_lt {
        width: 135px;
        height: 300px;
        float: left;
        overflow: hidden;
        border: 1px solid #e0e0e0;
    }
    /* 列表 */
    .c_tea .info_cr {
        width: 550px;
        height: 300px;
        float: left;
        margin-left: 5px;
        overflow: hidden;
        border: 1px solid #e0e0e0;
    }
    /* 实时成交 */
    .c_tea .info_rt {
        float: right;
        width: 215px;
        height: 100%;
    }
    /* 竞拍 */
    .c_tea .tea_auction{
        margin-top: 20px;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_tea .auc_sidebar{
        width: 135px;
        height: 100%;
        float: left;
    }
    .c_tea .auc_sidebar .sidebar_title{
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: 600;
    }
    .c_tea .auc_state span{
        display: block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        margin-bottom: 15px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
    .c_tea .auc_state .ste_ing{
        background-color: #f02d2d;
    }
    .c_tea .auc_state .ste_will{
        background-color: #3e84e4;
    }
    .c_tea .auc_state .ste_end{
        background-color: #a5a5a5;
    }
    .c_tea .auc_main{
        width: 765px;
        float: right;
    }
    .c_tea .auc_main .main_top{
        height: 50px;
        line-height: 50px;
    }
    .c_tea .main_list{
        overflow: hidden;
    }
    .c_tea .main_list .main_wrap {
        width: 780px;
    }
</style>