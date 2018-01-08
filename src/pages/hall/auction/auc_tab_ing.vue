<template>
    <div class="c_detail_tabs">
        <!-- tab_bar 1030,1186,1314,1504-->
        <div class="tab_bar" :class="{ fix: isFixed }">
            <span v-for="(val,key) in tabTitle" @click="goal(key,'#tab_item'+key)" :class="{active:key==isActive}">{{val}}</span>
        </div>
        <div class="tab_item" id="tab_item0">
            <h3>品种信息</h3>
            <ul class="clearfix">
                <li>品种：绿茶</li>
                <li>级别：1级</li>
                <li>包装形式：袋装</li>
                <li>产地：河南信阳</li>
            </ul>
        </div>
        <div class="tab_item" id="tab_item1">
            <h3>卖家信息</h3>
            <div class="tab_item_cont">
                <p>1.卖家基本信息介绍</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
            </div>
        </div>
        <div class="tab_item" id="tab_item2">
            <h3>保证金须知</h3>
            <div class="tab_item_cont">
                <p>1.卖家基本信息介绍</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
            </div>
        </div>
        <div class="tab_item" id="tab_item3">
            <h3>商品图片</h3>
            <div class="prd_imgs">
                <img src="../../../assets/images/sm_gg1.jpg">
                <img src="../../../assets/images/banner01.jpg">
                <img src="../../../assets/images/banner02.jpg">
                <img src="../../../assets/images/banner03.jpg">
                <img src="../../../assets/images/sm_gg1.jpg">
                <img src="../../../assets/images/sm_gg2.jpg">
                <img src="../../../assets/images/sm_gg3.jpg">
                <img src="../../../assets/images/gonggao1.jpg">
                <img src="../../../assets/images/big_banner.jpg">
                <img src="../../../assets/images/list_bg.jpg">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tabTitle:['品种信息','卖家信息','保证金须知','商品图片'],
                isFixed: false,
                isActive: 0
            }
        },
        mounted(){
            this.fixedTabBar();
        },
        methods:{
            /* 目标 */
            fixedTabBar(){
                let that = this;
                /* 显示侧边的导航 */
                window.addEventListener("scroll", function () {
                    let pos = document.documentElement.scrollTop || document.body.scrollTop;
                    if (pos >= 1000) {
                        that.isFixed = true;
                        that.switchActive(pos);
                    } else {
                        that.isFixed = false;
                    }
                }, false);
            },
            switchActive(pos){
                if(pos<1189){
                    this.isActive = 0;
                }
                if(pos>1189 && pos<1317){
                    this.isActive = 1;
                }
                if(pos>1317 && pos<1507){
                    this.isActive = 2;
                }
                if(pos>1507){
                    this.isActive = 3;
                }
            },
            goal(i,g){
                console.log(g);
                let pos = this.$el.querySelector(g).offsetTop;
                pos = this.isFixed?pos-30:pos-60;
                this.isActive = i;
                document.body.scrollTop = pos;
                document.documentElement.scrollTop = pos;
            }
        }
    }
</script>
<style>
    @import "../../../assets/css/hall/detail_tab_bar.css";
    .c_detail_tabs .tab_item_cont p{
        margin: 10px 0;
    }
</style>