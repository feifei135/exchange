<template>
    <!-- 实时 -->
    <div class="loop_scroll">
        <div class="g_wrap">
            <div class="uls">
                <ul>
                    <li v-for="item in loopScrollList">
                        <span>合约：{{item.contractId}}</span>
                        <span>价格：{{item.price}}</span>
                        <span>涨幅：<i :class="[item.increaseRate<0?'gn':'rd']">{{item.increaseRate}}</i></span>
                        <span>成交：{{item.dealQtt}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        computed: {
            //映射State
            ...mapState(['loopScrollList'])
        },
        mounted(){
            let timer = true;
            /* 加载数据函数 */
            this.getLoopScrollList();
            /* 调用滚动函数 */
            if(timer){
                timer = false;
                setTimeout(()=>{
                    this.loop_scroll();
                },1000)
            }
        },
        methods: {
            ...mapActions(['getLoopScrollList']),
            loop_scroll(){
                let el = document.querySelector(".loop_scroll");
                let uls = document.querySelector('.uls');
                let ul = uls.querySelector('ul');
                let wt = ul.offsetWidth;
                let speed = 0,c = 1130;
                let timer = null;

                /* 滚动函数 */
                let scroll = function(){
                    uls.style.marginLeft = speed+"px";
                    speed--;
                    let offset = wt<c?wt-(c-wt):wt;
                    if(speed+offset == 0){
                        speed = 0;
                    }
                };
                let start = function(){
                    timer = setInterval(scroll,20);
                };
                /* 初始化函数 */
                let init = function(){
                    uls.style.width = wt*2+"px";
                    uls.appendChild(ul.cloneNode(true));
                    start();
                    /* 鼠标悬浮滚动停止或者开始 */
                    uls.onmousemove = function(){
                        clearInterval(timer);
                    };
                    uls.onmouseout = function(){
                      start();
                    }
                };
                /* 调用初始化函数 */
                init();
            }
        }
    }
</script>
<style>
    /* 实时滚动信息 */
    .loop_scroll {
        height: 50px;
        line-height: 50px;
        color: #fff;
        overflow: hidden;
        background-color: #115020;
    }
    .loop_scroll ul {
        width: auto;
        font-size: 0;
        float: left;
        white-space: nowrap;
    }
    .loop_scroll ul li{
        display: inline-block;
        padding-right: 10px;
        font-size: 14px;
    }
    .loop_scroll .gn{
        color: #07ed00;
    }
    .loop_scroll .rd{
        color: #ff0000;
    }
</style>