<template>
    <div class="c_header">
        <!-- g:top -->
        <div class="g_top">
            <div class="g_wrap">
                <div class="top_lt"><a>入市有风险，投资须谨慎</a></div>
                <div class="top_rt" v-if="sessionId">
                    <a href="#/user_center">{{userId}}</a>
                    <a href="javascript:void(0);" @click="signOut">退出</a>
                </div>
                <div class="top_rt" v-else><a href="#/login">登录</a><a href="#/regist">注册</a></div>
            </div>
        </div>

        <!--g:header-->
        <div class="g_header">
            <div class="g_wrap">
                <!-- logo -->
                <div class="header_logo">
                    <h1 class="logo_title"><a href="#" class="logo_link"></a></h1>
                </div>
                <!-- search -->
                <div class="header_search">
                    <div class="search_main">
                        <div class="search_box"><input type="text" name="keyword" placeholder="输入关键字，搜栏目、行情、公告、规则...">
                        </div>
                        <div class="search_btn">搜索</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- g:nav -->
        <div class="g_nav" v-show="isShowNav">
            <div class="g_wrap">
                <ul class="clearfix">
                    <li v-for="(item,$index) in nav">
                        <router-link :to="item.url" :class="{active:$index==isActive}">{{item.text}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Cookies from 'js-cookie'
    export default{
        props: {
            isShowNav: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                nav: [
                    {text: "首页", url: "/index"},
                    {text: "交易大厅", url: "/hall"},
                    {text: "市场资讯", url: "/index"},
                    {text: "行情数据", url: "/day_quotation"},
                    {text: "通知公告", url: "/notice"},
                    {text: "关于我们", url: "/about_us"}
                ],
                isActive: 0
            }
        },
        computed: {
            ...mapGetters(['sessionId', 'userId'])
        },
        beforeMount(){
            this.addActiveClass(this.$router.currentRoute.name);
        },
        methods: {
            signOut(){
                this.$store.dispatch('signOut');
            },
            addActiveClass(name){
                switch (name) {
                    case "Home":
                        this.isActive = 0;
                        break;
                    case "Hall":
                        this.isActive = 1;
                        break;
                    case "DayQuotation":
                        this.isActive = 3;
                        break;
                    case "Notice":
                        this.isActive = 4;
                        break;
                    case "AboutUs":
                        this.isActive = 6;
                        break;
                    default:
                        this.isActive = 0;
                }
            }
        }
    }
</script>
<style>
    .g_top {
        height: 40px;
        line-height: 40px;
        background-color: #44a84b
    }

    .g_top a {
        color: #fff
    }

    .g_top .top_lt, .g_top .top_rt {
        width: 50%;
        float: left
    }

    .g_top .top_rt {
        text-align: right
    }

    .g_top .top_rt a {
        margin-left: 25px
    }

    .g_header {
        height: 125px
    }

    .g_header .header_logo {
        float: left
    }

    .g_header .header_logo .logo_link {
        display: block;
        width: 468px;
        height: 122px;
        background: url("../assets/images/logo.jpg") no-repeat
    }

    .g_header .header_search {
        float: right;
        margin-top: 44px
    }

    .g_header .search_main {
        width: 470px;
        height: 36px
    }

    .g_header .header_search .search_box {
        width: 386px;
        height: 36px;
        float: left;
        padding-left: 10px;
        border: 2px solid #44a84b
    }

    .g_header .header_search input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        width: 100%;
        margin-top: 5px
    }

    .g_header .header_search .search_btn {
        width: 70px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        color: #fff;
        float: left;
        background-color: #44a84b
    }

    .g_nav {
        height: 50px;
        line-height: 50px;
        background-color: #e5e5e5
    }

    .g_nav ul li {
        float: left
    }

    .g_nav ul li a {
        display: block;
        color: #0c582a;
        font-size: 16px;
        font-weight: 600;
        padding: 0 40px;
        border-right: 1px solid #fff;
    }

    .g_nav ul li:last-child a {
        border-right: none
    }

    .g_nav ul li a.active, .g_nav ul li a:hover {
        color: #fff;
        background-color: #0c582a
    }
</style>