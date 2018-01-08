<template>
    <!-- 在线交易 -->
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
                    <about-sidebar activeID="31"></about-sidebar>
                </div>
                <!-- 右侧内容 -->
                <div class="about_us_rt">
                    <div class="lty_question">
                        <h3><i class="icon_question"></i>如何在线交易</h3>
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
                        title:'1.挂单',
                        answer:'111111',
                        isShow: false
                    },
                    {
                        title:'2.交易商应价',
                        answer:'2222',
                        isShow: false
                    },
                    {
                        title:'3.买卖双方议价',
                        answer:'3333',
                        isShow: false
                    },
                    {
                        title:'4.议价确认，成功摘牌',
                        answer:'4444',
                        isShow: false
                    },
                    {
                        title:'5.进入交收环节',
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