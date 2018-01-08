<template>
    <div class="c_hall">
        <header-bar></header-bar>
        <!-- 无限滚动 -->
        <loop-scroll></loop-scroll>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
                <div class="pos_rt">
                    <count-down :start="true"></count-down>
                </div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <sidebar-nav :cur="sideBarNavCur"></sidebar-nav>
            <back-top></back-top>
            <div class="g_wrap clearfix">
                <!-- 主内容：左侧 -->
                <div class="lty_ctr_lt">
                    <!-- 布局1 -->
                    <div class="lty_01">
                        <options-bar></options-bar>
                    </div>

                    <!-- 布局2 -->
                    <div class="lty_02">
                        <!-- 红茶 -->
                        <div class="c_tea" id="tea_red">
                            <div class="tea_nav">
                                <div class="tea_name"><i class="icon"></i>红茶</div>
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
                                <div class="info_lt"><tea-news :list="allNewsList[0]"></tea-news></div>
                                <!-- 列表 -->
                                <div class="info_cr"><tea-list :list="redTeaList"  :goodsId="1" @changeTeaList="changeTeaList"></tea-list></div>
                                <!-- 实时成交 -->
                                <div class="info_rt"><tea-deal :list="allDealList[0]"></tea-deal></div>
                            </div>

                            <!--竞拍：auction-->
                            <div class="tea_auction clearfix">
                                <div class="auc_sidebar">
                                    <div class="sidebar_title"><i class="icon_auc"></i>竞拍</div>
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
                                            <tea-item v-for="item in allAucList[0]" :list="item"></tea-item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 绿茶 -->
                        <div class="c_tea" id="tea_green">
                            <div class="tea_nav">
                                <div class="tea_name"><i class="icon"></i>绿茶</div>
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
                                <div class="info_lt"><tea-news :list="allNewsList[1]"></tea-news></div>
                                <!-- 列表 -->
                                <div class="info_cr"><tea-list :list="greenTeaList" :goodsId="2" @changeTeaList="changeTeaList"></tea-list></div>
                                <!-- 实时成交 -->
                                <div class="info_rt"><tea-deal :list="allDealList[1]"></tea-deal></div>
                            </div>

                            <!--竞拍：auction-->
                            <div class="tea_auction clearfix">
                                <div class="auc_sidebar">
                                    <div class="sidebar_title"><i class="icon_auc"></i>竞拍</div>
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
                                            <tea-item v-for="item in allAucList[1]" :list="item"></tea-item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 其它 -->
                        <div class="c_tea" id="tea_other">
                            <div class="tea_nav">
                                <div class="tea_name"><i class="icon"></i>其它</div>
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
                                <div class="info_lt"><tea-news :list="allNewsList[2]"></tea-news></div>
                                <!-- 列表 -->
                                <div class="info_cr"><tea-list :list="otherTeaList" :goodsId="4" @changeTeaList="changeTeaList"></tea-list></div>
                                <!-- 实时成交 -->
                                <div class="info_rt"><tea-deal :list="allDealList[2]"></tea-deal></div>
                            </div>

                            <!--竞拍：auction-->
                            <div class="tea_auction clearfix">
                                <div class="auc_sidebar">
                                    <div class="sidebar_title"><i class="icon_auc"></i>竞拍</div>
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
                                            <tea-item v-for="item in allAucList[2]" :list="item"></tea-item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- 主内容：右侧 -->
                <div class="lty_ctr_rt">
                    <!-- 组件：盒子(交易日历) -->
                    <div class="cpt_box lty_jyrl">
                        <div class="cpt_box_title">
                            <i class="icon_jyrl"></i><span class="text">交易日历</span>
                        </div>
                        <div class="cpt_box_main">
                            <calendar type="date" :open="open" :options="dateOptions" placeholder="选择日期" style="width:100px"></calendar>
                        </div>
                    </div>
                    <!-- 组件：盒子(品种延时行情) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_pzhq"></i><span class="text">品种延时行情</span>
                        </div>
                        <div class="cpt_box_main">
                            <charts-bar :chartsStyle="chartsStyle"></charts-bar>
                        </div>
                    </div>
                    <!-- 组件：盒子(竞拍通告) -->
                    <div class="cpt_box lty_jptg">
                        <div class="cpt_box_title">
                            <i class="icon_jptg"></i><span class="text">竞拍通告</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <div class="cpt_list">
                                <ul>
                                    <li v-for="item in noticeList">
                                        <a href="#" class="g_ellipsis">{{item.bidTitile}}</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 组件：盒子(品种推广) -->
                    <div class="cpt_box lty_pptg">
                        <div class="cpt_box_title">
                            <i class="icon_pztg"></i><span class="text">品种推广</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <div v-for="item in promoteInfo">
                                <a href="#"><img :src="item.pictureUrl"></a>
                                <p>{{item.listingTitle}}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>

    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import axios from 'axios'
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import LoopScroll from '../../components/loop_scroll.vue'
    import CountDown from '../../components/count_down.vue'
    import BackTop from '../../components/back_top.vue'
    import OptionsBar from './index/options.vue'
    /*import Tea from './index/tea.vue'*/
    import TeaNews from './index/tea_news.vue'
    import TeaDeal from './index/tea_deal.vue'
    import TeaList from './index/tea_list.vue'
    import TeaItem from './index/tea_item.vue'
    import SidebarNav from './index/sidebar_nav.vue'
    import ChartsBar from '../../components/charts.vue'
    /* all-utils */
    import ScrollTop from '../../utils/scrollTop'


    export default {
        data(){
            return {
                open: true,
                sideBarNavCur: 0,
                redTeaList:[],
                greenTeaList:[],
                otherTeaList:[],
                chartsStyle: {
                    width: '178px',
                    height: '140px'
                },
                dateOptions:{
                    disabledDate:(date)=>{
                        const dis = date.getDate();
                        return dis === 15 || dis===18 || dis === 23;
                    }
                }
            }
        },
        computed: {
            ...mapGetters(['isLogin','allAucList','allDealList','allNewsList','noticeList','promoteInfo'])
        },
        mounted(){
            /* 拉数据函数 */
            this.getAllTeaList();
            this.getAllAucList();
            this.getAllDealList();
            this.getAllNewsList();
            this.getNoticeList();
            this.getPromoteInfo();

            /* 交易通告 */
            ScrollTop(this.$el.querySelector(".lty_jptg"),34,5);

            /* 循环调用滚动组件 */
            const dl_body = this.$el.querySelectorAll(".dl_body");
            for (let i=0,len=dl_body.length;i<len;i++){
                ScrollTop(dl_body[i],30,7);
            }
            /* 根据滚动条显示sidebar_nav以及back_top */
            this.elementIsShowByScroll();


        },
        methods: {
            ...mapActions(['getAllAucList','getAllDealList','getAllNewsList','getNoticeList','getPromoteInfo']),
            /* 元素是否根据滚动显示 */
            elementIsShowByScroll(){
                let that = this;
                let _left = this.$el.querySelector(".g_wrap").offsetLeft;
                let _snav = this.$el.querySelector(".c_sidebar_nav").style;
                let _btop = this.$el.querySelector(".c_back_top").style;

                /* 显示侧边的导航 */
                window.addEventListener("scroll",function(){
                    let _top = document.documentElement.scrollTop || document.body.scrollTop;
                    if(_top>415){
                        _snav.left = (_left-100)+"px";
                        _btop.right = (_left-80)+"px";
                        if(_top<1600){
                            that.sideBarNavCur = 0;
                        }
                        if(_top>1600 && _top<2600){
                            that.sideBarNavCur = 1;
                        }
                        if(_top>2600){
                            that.sideBarNavCur = 2;
                        }
                    }else{
                        _snav.left = "-1000px";
                        _btop.right = "-1000px";
                    }
                },false);

            },
            args(t, b){
                return {
                    "head": {
                        "sessionId": this.$store.state.sessionId,
                        "operatorType": t
                    },
                    "body": b
                }
            },
            /* 挂单列表初始化查询 */
            getAllTeaList(){
                /* 茶列表 */
                axios.post(this.$store.state.api,this.args("DoListingCommnInitQry",{})).then((response)=>{
                    let result = response.data.body;
                    if(result){
                        console.log(result)
                        this.redTeaList = result[0];
                        this.greenTeaList = result[1];
                        this.otherTeaList = result[2];
                    }
                });
            },
            /* 根据条件查询茶叶列表 */
            requestData(buyorsell,goodsId){
                axios.post(this.$store.state.api,this.args("DoListingCommnQry",{
                    "buyorsell":buyorsell,
                    "goodsId":goodsId
                })).then((response)=> {
                    let result = response.data.body[0].data;
                    console.log(result);
                    if(goodsId==1){
                        this.redTeaList = result;
                    }else if(goodsId==2){
                        this.greenTeaList = result;
                    }else{
                        this.otherTeaList = result;
                    }
                });
            },
            /* 监听子组件的的时间 */
            changeTeaList(args){
                this.requestData(args.type,args.id);
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            LoopScroll,
            CountDown,
            OptionsBar,
            BackTop,
            /*Tea,*/
            TeaNews,
            TeaDeal,
            TeaList,
            TeaItem,
            SidebarNav,
            ChartsBar
        }
    }
</script>
<style>
    @import '../../assets/css/home/ui_list.css';
    @import '../../assets/css/common/position_bar.css';
    @import '../../assets/css/hall/hall.css';
    /* 重写分时图那面的内容的间距 */
    .c_hall .c_charts .chs_info_lt span{
        padding: 0 7px !important;
    }
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
        background: url("../../assets/images/hall_icons.png") no-repeat;
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
