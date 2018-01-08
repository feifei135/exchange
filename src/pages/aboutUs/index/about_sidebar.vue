<template>
    <div class="c_about_sidebar">
        <dl v-for="(item,index) in sidebar" @click="toggleMenu(item)">
            <dt><i :class="'icon'+index"></i>{{item.title}}</dt>
            <dd v-show="item.isShow"><a :href="list.url" v-for="(list,ind) in item.list" :class="{active:'cur'+index+ind == 'cur'+activeID}">{{list.text}}</a></dd>
        </dl>
    </div>
</template>
<script>
    export default {
        props:['activeID'],
        data(){
            return {
                sidebar:[
                    {
                        title:"中心概况",
                        isShow:false,
                        list:[
                            {url:"#/about_us",text:"中心简介"},
                            {url:"#/company_culture",text:"企业文化"},
                            {url:"#/law_statement",text:"法律声明"},
                            {url:"#/join_us",text:"加入我们"},
                            {url:"#/concat_us",text:"联系我们"}
                        ]
                    },
                    {
                        title:"会员服务",
                        isShow:false,
                        list:[
                            {url:"#/initiation_guide",text:"入会指南"},
                            {url:"#/seat_manager",text:"席位管理"},
                            {url:"#/market_guide",text:"入市指南"}
                        ]
                    },
                    {
                        title:"交易指南",
                        isShow:false,
                        list:[
                            {url:"#/deal_rules",text:"交易规则"},
                            {url:"#/software_download",text:"软件下载"},
                            {url:"#/technology_service",text:"技术服务"}
                        ]
                    },
                    {
                        title:"常见问题",
                        isShow:false,
                        list:[
                            {url:"#/how_deal",text:"如何成为交易商"},
                            {url:"#/online_deal",text:"在线交易"},
                            {url:"#/delivery_closing",text:"交收结算"}
                        ]
                    },
                    {
                        title:"相关链接",
                        isShow:false,
                        list:[
                            {url:"#",text:"贵州人民政府"},
                            {url:"#",text:"北京人民政府"}
                        ]
                    }
                ]
            }
        },
        mounted(){
            let id = this.activeID.substr(0,1);
            this.sidebar[id].isShow = true;
        },
        methods:{
            toggleMenu(item){
                item.isShow = !item.isShow;
            }
        }
    }
</script>
<style>
    .c_about_sidebar {
        width: 100%;
        background-color: #fff;
        border: 1px solid #e0e0e0;
    }
    .c_about_sidebar dl dt{
        width: 100%;
        height: 45px;
        line-height: 45px;
        color: #006c05;
        font-size: 16px;
        cursor: pointer;
        margin-top: -1px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_about_sidebar dl dt i{
        display: block;
        width: 25px;
        height: 25px;
        float: left;
        margin: 10px 5px 0 10px;
        background: url("../../../assets/images/aboutus_icon.png") no-repeat;
    }
    .c_about_sidebar dl dt .icon0{
        background-position: -7px -10px;
    }
    .c_about_sidebar dl dt .icon1{
        background-position: -37px -10px;
    }
    .c_about_sidebar dl dt .icon2{
        background-position: -67px -10px;
    }
    .c_about_sidebar dl dt .icon3{
        background-position: -97px -10px;
    }
    .c_about_sidebar dl dt .icon4{
        background-position: -127px -10px;
    }
    .c_about_sidebar dl dd.test{
        display: none;
    }
    .c_about_sidebar dl.menu dd{
        display: block;
    }
    .c_about_sidebar dl dd a{
        display: block;
        height: 45px;
        line-height: 45px;
        text-indent: 30px;
        color: #555555;
        font-size: 14px;
    }
    .c_about_sidebar dl dd a:hover,
    .c_about_sidebar dl dd a.active{
        color: #fff;
        background-color: #60a311;
    }
</style>