<template>
    <!-- 我的足迹 -->
    <div class="c_my_footmark">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <div class="g_wrap">
                <!-- 侧边栏 -->
                <uc-sidebar></uc-sidebar>
                <!-- 用户中心content区域 -->
                <div class="uc_main">
                    <!-- uc_main_title -->
                    <div class="ucm_title">我的足迹</div>

                    <!-- 我的足迹列表 -->
                    <div class="uc_list_lty">
                        <ul class="clearfix">
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
                            </li>
                            <li>
                                <img src="../../assets/images/sm_gg1.jpg">
                                <h3><span>挂单标题</span><a href="#">查看</a></h3>
                                <p>￥2600.00 <span>删除</span></p>
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
    import UcSidebar from './index/uc_sidebar.vue'

    export default{

        components:{
            HeaderBar,
            FooterBar,
            UcSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/uc/uc_list_lty.css";
</style>