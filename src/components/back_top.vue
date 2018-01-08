<template>
    <!-- 返回顶部 -->
    <div class="c_back_top" @click="goTop">
        <div class="back_top_icon"></div>
    </div>
</template>
<script>
    import animate from '../utils/animate'
    export default {
        methods: {
            goTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }
</script>
<style>
    .c_back_top{
        position: fixed;
        bottom: 0;
        right: -1000px;
        z-index: 100;
        cursor: pointer;
        transition: right .3s linear 0s;
        -webkit-transition: right .3s linear 0s;
    }
    .c_back_top .back_top_icon{
        width: 40px;
        height: 40px;
        background: url("../assets/images/hall_icons.png") no-repeat;
        background-position: -22px -77px;
    }
</style>