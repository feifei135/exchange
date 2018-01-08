<template>
    <div class="c_charts">
        <div class="chs_top">
            <span class="active">红茶综指</span>
            <span>中小扳指</span>
            <span>创业扳指</span>
        </div>
        <div class="chs_time">2017/05/10 14:50:00</div>
        <div class="chs_cont">
            <!-- item1 -->
            <div class="chs_item" :class="{show:1==isShow}" @mouseover="isShow=1">
                <div class="chs_item_main" id="charts01" :style="chartsStyle"></div>
                <div class="chs_item_info">
                    <div class="chs_info_lt">红茶指数 <span>10556.41</span></div>
                    <div class="chs_icon up"></div>
                    <div class="chs_info_rt">0.84</div>
                </div>
            </div>
            <!-- item2 -->
            <div class="chs_item" :class="{show:2==isShow}" @mouseover="isShow=2">
                <div class="chs_item_main" id="charts02" :style="chartsStyle"></div>
                <div class="chs_item_info">
                    <div class="chs_info_lt">红茶指数 <span>10556.41</span></div>
                    <div class="chs_icon down"></div>
                    <div class="chs_info_rt">0.84</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import dataList from '../utils/dataList'
    import InitCharts from '../utils/initCharts'
    export default {
        props:{
            chartsStyle:{
                type:Object,
                default: function(){
                    return {
                        width:'247px',
                        height:'140px'
                    }
                }
            }
        },
        data(){
            return {
                isShow: 1,
                flag: false
            }
        },
        mounted(){
            /* 插件：1.传Id 2.传数据 */
            InitCharts(document.querySelector("#charts01"),dataList);
            InitCharts(document.querySelector("#charts02"),dataList);
        },
        methods: {}
    }
</script>
<style>
    .c_charts {
        padding: 5px 10px;
    }

    /* top */
    .c_charts .chs_top {
        height: 20px;
        line-height: 20px;
        color: #2379c8;
        background-color: #d7e8ff;
    }

    .c_charts .chs_top span {
        display: block;
        width: 33%;
        float: left;
        text-align: center;
        cursor: pointer;
    }

    .c_charts .chs_top span.active,
    .c_charts .chs_top span:hover {
        background-color: #fff;
    }

    /* time */
    .c_charts .chs_time {
        color: #666;
        font-size: 12px;
        text-align: right;
        padding: 10px 5px 0;
    }

    /* cont */
    .c_charts .chs_item:first-child {
        border-bottom: 1px dashed #e0e0e0;
    }

    .c_charts .chs_item_main {
        display: none;
    }

    .c_charts .chs_item_info {
        height: 28px;
        line-height: 28px;
        padding: 0 5px;
        font-size: 12px;
        cursor: pointer;
    }
    .c_charts .chs_item.show .chs_item_info{
        background-color: #ecf0f5;
    }
    .c_charts .chs_info_lt {
        float: left;
    }

    .c_charts .chs_info_rt {
        float: right;
        color: #65a22b;
    }

    .c_charts .chs_info_lt span {
        padding: 0 25px;
    }

    .c_charts .chs_icon {
        position: relative;
        top: 6px;
        display: inline-block;
        width: 15px;
        height: 20px;
        background: url("../assets/images/index_icons.png") no-repeat;
    }

    .c_charts .chs_icon.up {
        background-position: -440px -43px;
    }

    .c_charts .chs_icon.down {
        background-position: -470px -43px;
    }

    .c_charts .chs_item.show .chs_item_main {
        display: block;
    }

    /* highcharts */
    .highcharts-halo.highcharts-color-0 {
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        transform-origin: center;
        -webkit-animation: am-heartbeat .5s infinite alternate;
        -moz-animation: am-heartbeat .5s infinite alternate;
        animation: am-heartbeat .5s infinite alternate
    }

    @-webkit-keyframes am-heartbeat {
        from {
            -webkit-transform: scale(1.33);
            -moz-transform: scale(1.33);
            transform: scale(1.33)
        }

        to {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            transform: scale(1)
        }

    }

    @-moz-keyframes am-heartbeat {
        from {
            -webkit-transform: scale(1.33);
            -moz-transform: scale(1.33);
            transform: scale(1.33)
        }

        to {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            transform: scale(1)
        }

    }

    @keyframes am-heartbeat {
        from {
            -webkit-transform: scale(1.33);
            -moz-transform: scale(1.33);
            transform: scale(1.33)
        }

        to {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            transform: scale(1)
        }

    }
</style>