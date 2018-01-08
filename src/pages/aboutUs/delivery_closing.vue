<template>
    <!-- 交收结算 -->
    <div class="c_about_us">
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
                <!-- 左侧导航 -->
                <div class="about_us_lt">
                    <about-sidebar activeID="32"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <div class="lty_question">
                        <h3><i class="icon_question"></i>交收与结算</h3>
                        <dl v-for="item in ques" @click="toggle(item)">
                            <dt><i :class="[item.isShow ? 'icon_up':'icon_down']"></i>{{item.title}}</dt>
                            <dd v-show="item.isShow">{{item.answer}}</dd>
                        </dl>
                    </div>
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
    import AboutSidebar from './index/about_sidebar.vue'

    export default {
        data(){
            return {
                ques: [
                    {
                        title:'1.卖方备款，卖方备货',
                        answer:'111111',
                        isShow: false
                    },
                    {
                        title:'2.买方支付首款',
                        answer:'2222',
                        isShow: false
                    },
                    {
                        title:'3.买卖双方货权转移',
                        answer:'3333',
                        isShow: false
                    },
                    {
                        title:'4.卖方开具发票买方确认收票',
                        answer:'4444',
                        isShow: false
                    },
                    {
                        title:'5.买方支付尾款，交易完成',
                        answer:'55555',
                        isShow: false
                    }

                ]
            }
        },
        methods: {
            toggle(item){
                item.isShow = !item.isShow;
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            AboutSidebar
        }
    }
</script>
<style>
    @import "../../assets/css/aboutUs/about_us.css";
    @import "../../assets/css/aboutUs/lty_question.css";
</style>