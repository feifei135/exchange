<template>
    <!-- 出入金 -->
    <div class="c_outin_money">
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
                    <div class="ucm_title">
                        <span :class="{active:1==currentActive}" @click="switchTab('InMoney',1)">入金</span>
                        <span :class="{active:2==currentActive}"  @click="switchTab('OutMoney',2)">出金</span>
                    </div>

                    <component v-bind:is="currentView"></component>
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
    import OutMoney from './account/out_money.vue'
    import InMoney from './account/in_money.vue'

    export default{
        data(){
            return {
                currentView: 'InMoney',
                currentActive: 1
            }
        },
        methods:{
            switchTab(cpt,id){
                this.currentView = cpt;
                this.currentActive = id;
            }
        },
        components:{
            HeaderBar,
            FooterBar,
            UcSidebar,
            OutMoney,
            InMoney
        }
    }
</script>
<style>
    /* 重写标题 */
    .c_outin_money .ucm_title span{
        display: inline-block;
        height: 25px;
        line-height: 25px;
        padding: 0 20px;
        margin-right: 10px;
        color: #fff;
        cursor: pointer;
        border-radius: 2px;
        background-color: #999999;
    }
    .c_outin_money .ucm_title .active{
        background-color: #ff7200;
    }
</style>