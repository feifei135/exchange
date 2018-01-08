<template>
    <!-- 下单页面 -->
    <div class="c_notice_detail">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <!-- 竞拍通告详情 -->
            <div class="lty_nte_dtl">
                <div class="nte_dtl_top">
                    <h3>关于XXXX的竞拍公告</h3>
                    <p>发布日期：2017/03/20 <span>浏览：150</span></p>
                </div>
                <div class="nte_dtl_main">
                    <p>进行公开拍卖活动，现公告如下：</p>

                    <p>一、拍卖标的：位于东莞市大朗镇政通路92号大朗人民法庭。（详见评估明细表，自行下载）
                    起拍价：148845元，保证金：14800元，增价幅度：1000元。</p>

                    <p>二、竞买人条件：凡具备完全民事行为能力的公民、法人和其他组织均可参加竞买。因不符合条件参加竞买的，由竞买人自行承担相应的法律责任。</p>

                    <p>三、咨询、展示看样的时间与方式：自2016年4月25日起至2016年4月28日17时止接受咨询（双休日除外）。
                        有意看样者请于2016年4月28日17时前与委托法院预约，法院将确定统一时间组织安排看样（有意看样者请于2016年4月29日10时前到达东莞市大朗镇大朗人民法庭集中）。</p>

                    <p>四、本次拍卖活动设置延时出价功能，在拍卖活动结束前，每最后2分钟如果有竞买人出价，就自动延迟5分钟。</p>

                    <p>五、拍卖方式：设有保留价的增价拍卖方式，不到保留价不成交。另需至少2人报名，若只有1人报名，即使达到保留价也不成交。</p>
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
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
<style>
    .c_notice_detail .lty_container{
        padding: 20px 0;
    }
    .c_notice_detail .lty_nte_dtl{
        width: 900px;
        margin: 0 auto;
        padding: 50px 30px;
        background-color: #fff;
    }
    .c_notice_detail .nte_dtl_top{
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_notice_detail .nte_dtl_top h3{
        margin-bottom: 7px;
        font-size: 24px;
    }
    .c_notice_detail .nte_dtl_top p{
        color: #999;
    }
    .c_notice_detail .nte_dtl_top p span{
        margin-left: 30px;
    }
    .c_notice_detail .nte_dtl_main{
        padding-top: 50px;
    }
    .c_notice_detail .nte_dtl_main p{
        margin-bottom: 20px;
    }
</style>