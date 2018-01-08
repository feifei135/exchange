<template>
    <div class="c_auction_list pur_sup_auc">
        <!-- 头部 -->
        <header-bar></header-bar>
        <div class="lty_container">
            <!-- 当前位置 -->
            <div class="position_bar">
                <div class="g_wrap">
                    <div class="pos_lt">您的位置：首页 > 交易大厅</div>
                </div>
            </div>
            <div class="g_wrap list_main">
                <h3 class="list_title">竞拍列表</h3>
                <auc-search></auc-search>
                <div class="sort_bar clearfix">
                    <div class="btn_sort active">截止时间 <i class="icon_arrow"></i></div>
                    <div class="btn_sort">起拍价 <i class="icon_arrow"></i></div>
                </div>
                <div class="list_box clearfix">
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                    <list-item></list-item>
                </div>
                <page :total="1000" size="small" class-name="c_page"></page>
            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import AucSearch from './auction/auc_search.vue'
    import ListItem from './auction/auc_list_item.vue'

    export default {
        data(){
            return {}
        },
        methods: {},
        components: {
            HeaderBar,
            FooterBar,
            AucSearch,
            ListItem
        }
    }
</script>
<style>
    @import "../../assets/css/hall/sort_bar.css";
    @import "../../assets/css/hall/pur_sup_list.css";
    @import "../../assets/css/common/page.css";
    .c_auction_list .list_box{
        width: 1100px;
    }
</style>