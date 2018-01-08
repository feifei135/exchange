<template>
    <div class="c_detail_tabs">
        <!-- tab_bar 1030,1186,1314,1504-->
        <div class="tab_bar" :class="{ fix: isFixed }">
            <span v-for="(val,key) in tabTitle" @click="goal(key,'#tab_item'+key)" :class="{active:key==isActive}">{{val}}</span>
        </div>
        <div class="tab_item" id="tab_item0">
            <h3>品种信息</h3>
            <div class="tab_item_text">
                太平猴魁，汉族传统名茶，中国历史名茶之一，属于绿茶类尖茶，产于安徽太平县（现改为黄山市黄山区）一带，为尖茶之极品，久享盛名。其外形两叶抱芽，扁平挺直，自然舒展，白毫隐伏，有“猴魁两头尖，不散不翘不卷边”的美名。茶叶中所含的化学成分达500多种，具有抗菌、抑菌作用、减肥作用、防龋齿、抑制癌细胞等功效。清咸丰(1859)，猴魁先祖郑守庆就在麻川河畔的山中开出一块茶园，生产出扁平挺直、鲜爽味醇且散发出阵阵兰花香味的“尖茶”，冠名“太平尖茶”。现在，猴魁茶界普遍认为“太平尖茶”是太平猴魁的前身。2004年，在国际茶博会上获得“绿茶茶王”称号。
            </div>
        </div>
        <div class="tab_item" id="tab_item1">
            <h3>交易信息</h3>
            <div class="tab_item_text">
                太平猴魁，汉族传统名茶，中国历史名茶之一，属于绿茶类尖茶，产于安徽太平县（现改为黄山市黄山区）一带，为尖茶之极品，久享盛名。其外形两叶抱芽，扁平挺直，自然舒展，白毫隐伏，有“猴魁两头尖，不散不翘不卷边”的美名。茶叶中所含的化学成分达500多种，具有抗菌、抑菌作用、减肥作用、防龋齿、抑制癌细胞等功效。清咸丰(1859)，猴魁先祖郑守庆就在麻川河畔的山中开出一块茶园，生产出扁平挺直、鲜爽味醇且散发出阵阵兰花香味的“尖茶”，冠名“太平尖茶”。现在，猴魁茶界普遍认为“太平尖茶”是太平猴魁的前身。2004年，在国际茶博会上获得“绿茶茶王”称号。
            </div>
        </div>
        <div class="tab_item" id="tab_item2">
            <h3>交收信息</h3>
            <div class="tab_item_cont">
                <p>1.卖家基本信息介绍</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
            </div>
        </div>
        <div class="tab_item" id="tab_item3">
            <h3>保证金须知</h3>
            <div class="tab_item_cont">
                <p>1.卖家基本信息介绍</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
                <p>2.卖家关于拍卖的服务承诺信息</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tabTitle:['品种信息','交易信息','交收信息','保证金须知'],
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