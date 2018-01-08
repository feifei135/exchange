<template>
    <div class="c_sidebar_nav">
        <a href="javascript:void(0);" @click="goTarget('#tea_red')" :class="{active:0==cur}">红茶</a>
        <a href="javascript:void(0);" @click="goTarget('#tea_green')" :class="{active:1==cur}">绿茶</a>
        <a href="javascript:void(0);" @click="goTarget('#tea_other')" :class="{active:2==cur}">其它</a>
    </div>
</template>
<script>
    export default {
        props:["cur"],
        methods: {
            goTarget(t){
                let os_top = document.querySelector(t).offsetTop;
                document.body.scrollTop = os_top;
                document.documentElement.scrollTop = os_top;
            }
        }
    }
</script>
<style>
    .c_sidebar_nav{
        position: fixed;
        top: 50%;
        left: -1000px;
        z-index: 10;
        width: 90px;
        height: 150px;
        padding: 15px;
        margin-top: -75px;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        transition: left .3s linear 0s;
        -webkit-transition: left .3s linear 0s;
    }
    .c_sidebar_nav a{
        display: block;
        color: #999999;
        text-align: center;
        padding-top: 10px;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_sidebar_nav a.active,
    .c_sidebar_nav a:hover{
        color: #27b600;
        border-color: #27b600;
    }
</style>