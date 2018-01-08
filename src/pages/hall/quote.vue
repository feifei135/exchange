<template>
    <div class="c_hall c_quote">
        <header-bar></header-bar>
        <!-- detail_banner -->
        <div class="big_banner">
            <img src="../../assets/images/big_banner.jpg">
        </div>
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
            <div class="g_wrap clearfix">
                <!-- 主内容：左侧 -->
                <div class="lty_ctr_lt">
                    <!-- 布局1 -->
                    <div class="lty_01">
                        <options-bar></options-bar>
                    </div>

                    <!-- 布局2 -->
                    <div class="lty_02">
                        <!-- top -->
                        <div class="lty_02_top">
                            <h3>供应信息意向单</h3>
                            <p><span>时间：2016-02-21 10:22:19</span><span>浏览次数：278</span></p>
                        </div>
                        <!-- info -->
                        <div class="lty_02_ctr">
                            <div class="info_title">供应商信息</div>
                            <div class="info_detail clearfix">
                                <!-- 左侧 -->
                                <div class="info_dtl_lt">
                                    <p>联系人：李总</p>
                                    <p>联系电话：010-00999399</p>
                                </div>
                                <!-- 中间 -->
                                <div class="info_dtl_cr">
                                    <p>公司名称：某某某有限责任公司</p>
                                    <p>邮箱：12312312312@qq.com</p>
                                </div>
                                <!-- 右侧 -->
                                <div class="info_dtl_rt">
                                    <p><span>商品品类：红茶</span><span>商品等级：二级</span></p>
                                    <p>
                                        商品单价：
                                        <input type="text" v-model="price" name="price" v-validate:price.initial="'required|numeric'" data-vv-as="商品单价">
                                        <span v-show="errors.has('price')" class="help is-danger">{{ errors.first('price') }}</span>
                                    </p>
                                    <p>
                                        供应数量：
                                        <input type="text" v-model="number" name="number" v-validate:number.initial="'required|numeric'" data-vv-as="供应数量">
                                        <span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- btns -->
                        <div class="lty_02_bom">
                            <span class="g_btn" @click="okSupply">确认供应</span>
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
                            <calendar type="date" :open="true" placeholder="选择日期" style="width:100px"></calendar>
                        </div>
                    </div>
                    <!-- 组件：盒子(品种延时行情) -->
                    <div class="cpt_box">
                        <div class="cpt_box_title">
                            <i class="icon_pzhq"></i><span class="text">品种延时行情</span>
                        </div>
                        <div class="cpt_box_main">
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                        </div>
                    </div>
                    <!-- 组件：盒子(求购信息) -->
                    <div class="cpt_box lty_jptg">
                        <div class="cpt_box_title">
                            <i class="icon_qgxx"></i><span class="text">求购信息</span><a href="#" class="more">更多</a>
                        </div>
                        <div class="cpt_box_main">
                            <div class="cpt_list">
                                <ul>
                                    <li>
                                        <a href="#" class="g_ellipsis">111关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                    </li>
                                    <li>
                                        <a href="#" class="g_ellipsis">222关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                    </li>
                                    <li>
                                        <a href="#" class="g_ellipsis">333关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                    </li>
                                    <li>
                                        <a href="#" class="g_ellipsis">444关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                    </li>
                                    <li>
                                        <a href="#" class="g_ellipsis">555关于凤牌中国红国礼2016(120g)-茶品通知</a>
                                    </li>
                                </ul>
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
    /* all-component */
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    import LoopScroll from '../../components/loop_scroll.vue'
    import CountDown from '../../components/count_down.vue'
    import OptionsBar from './index/options.vue'

    export default {
        data(){
            return {
                price:'',
                number:''
            }
        },
        mounted(){},
        methods: {
            okSupply(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    console.log(this.price);
                    console.log(this.number);
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            LoopScroll,
            CountDown,
            OptionsBar
        }
    }
</script>
<style>
    @import '../../assets/css/home/ui_list.css';
    @import '../../assets/css/common/position_bar.css';
    @import '../../assets/css/hall/hall.css';

    .c_quote .lty_02{
        padding: 20px 25px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .c_quote .lty_02 .lty_02_top{
        padding-bottom: 20px;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_quote .lty_02_top h3{
        font-size: 24px;
        margin-bottom: 5px;
    }
    .c_quote .lty_02_top p{
        color: #888;
        font-size: 12px;
    }
    .c_quote .lty_02_top p span{
        margin-right: 60px;
    }
    .c_quote .lty_02 .lty_02_ctr{
        padding: 30px 0;
        border-bottom: 1px solid #e0e0e0;
    }
    .c_quote .info_title {
        font-size: 18px;
        margin-bottom: 30px;
    }
    .c_quote .info_detail p{
        color: #555;
        margin-bottom: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .c_quote .info_detail p span{
        margin-right: 30px;
    }
    .c_quote .info_detail input{
        width: 100px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #888;
        border-radius: 2px;
    }
    .c_quote .info_dtl_lt{
        width: 180px;
        float: left;
        margin-right: 10px;
    }
    .c_quote .info_dtl_cr{
        width: 280px;
        float: left;
    }
    .c_quote .info_dtl_rt{
        width: 400px;
        float: left;
    }
    .c_quote .lty_02_bom{
        text-align: center;
        padding: 30px 0 300px;
    }
    .c_quote .lty_02_bom .g_btn{
        color: #fff;
        font-size: 16px;
        padding: 5px 20px;
        cursor: pointer;
        background-color: #f02d2d;
    }
    .c_quote .help.is-danger{
        position: relative;
        top: -1px;
        color: #f02d2d;
        font-size: 12px;
    }
</style>