<template>
    <!-- 下单页面 -->
    <div class="c_notice_list">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <!-- 订单布局4 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>业务通知</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="notices">
                        <ul>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                            <li>
                                <a href="#">关于开展期权业务全市测试通知</a>
                                <span>2017/02/04</span>
                            </li>
                        </ul>
                    </div>
                    <page :total="1000" size="small" class-name="c_page"></page>
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'

    export default{
        data(){
            return {}
        },
        methods:{},
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
<style>
    @import "../../assets/css/hall/lty_order_box.css";
    @import "../../assets/css/common/page.css";
    .c_notice_list .lty_container{
        padding: 20px 0;
    }
    .c_notice_list .notices li{
        padding: 8px 0;
        border-bottom: 1px dashed #d1d1d1;
    }
    .c_notice_list .notices li span{
        float: right;
    }
    .c_notice_list .notices li a{
        display: inline-block;
        max-width: 550px;
        color: #555;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>