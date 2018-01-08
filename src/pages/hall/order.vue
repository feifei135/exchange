<template>
    <!-- 下单页面 -->
    <div class="c_order">
        <header-bar></header-bar>
        <!-- 当前位置 -->
        <div class="position_bar">
            <div class="g_wrap">
                <div class="pos_lt">您的位置：首页 > 交易大厅</div>
            </div>
        </div>
        <!-- 主内容 -->
        <div class="lty_container">
            <!-- 订单布局1 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>收货信息</strong>
                </div>
                <div class="box_bom clearfix">
                    <div v-if="isHasAddressInfo">
                        <div class="box_bom_lt">
                            <p>李总</p>
                            <p>122312312312</p>
                            <p>某某某某有限科技公司</p>
                        </div>
                        <div class="box_bom_rt">
                            <p class="btns">
                                <span class="btn_edit" @click="showModal">编辑</span>
                                <span class="btn_dele">删除</span>
                            </p>
                            <p><span class="btn_defa long_btn">设为默认地址</span></p>
                        </div>
                    </div>
                    <span v-else class="btn_add long_btn">添加收货人信息</span>
                </div>
            </div>
            <!-- 新增收货地址Modal -->
            <modal
                    title="新增收货地址"
                    :value.sync="isShow"
                    :loading = "loading"
                    @on-ok="ok"
                    class-name="vertical-center-modal">

                <div class="fm_uinfo">
                    <form id="form_modal">
                        <div class="fm_item">
                            <label>城市</label>
                            <select name="city" v-model="user.selected" v-validate:city.initial="'required'" data-vv-as="城市" placeholder="请选择城市">
                                <option v-for="option in city" v-bind:value="option.value">{{option.text}}</option>
                            </select>
                        </div>
                        <div class="fm_error"><span v-show="errors.has('city')" class="help is-danger">{{ errors.first('city') }}</span></div>
                        <div class="fm_item">
                            <label>姓名</label>
                            <input type="text" name="name" v-model="user.name" v-validate:name.initial="'required'" data-vv-as="姓名">
                        </div>
                        <div class="fm_error"><span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span></div>
                        <div class="fm_item">
                            <label>电话</label>
                            <input type="text" name="tel" v-model="user.tel" v-validate:tel.initial="'required'" data-vv-as="电话">
                        </div>
                        <div class="fm_error"><span v-show="errors.has('tel')" class="help is-danger">{{ errors.first('tel') }}</span></div>
                        <div class="fm_item">
                            <label>邮编</label>
                            <input type="text" name="postcode" v-model="user.postcode" v-validate:postcode.initial="'required'" data-vv-as="邮编">
                        </div>
                        <div class="fm_error"><span v-show="errors.has('postcode')" class="help is-danger">{{ errors.first('postcode') }}</span></div>
                        <div class="fm_item">
                            <label>地址</label>
                            <input type="text" name="address" v-model="user.address" v-validate:address.initial="'required'" data-vv-as="地址">
                        </div>
                        <div class="fm_error"><span v-show="errors.has('address')" class="help is-danger">{{ errors.first('address') }}</span></div>
                    </form>
                </div>
            </modal>
            <!-- 订单布局2 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>商家</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="box_bom_lt">
                        <p>某某某某有限责任公司</p>
                        <p>供应品种信息标题</p>
                        <p>50Kg</p>
                    </div>
                    <div class="box_bom_rt">
                        <div class="fix"><span class="money">￥<i>12300000.00元</i></span></div>
                    </div>
                </div>
            </div>
            <!-- 订单布局3 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>物流信息</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="box_bom_lt">
                        <p>物流单位</p>
                        <p>物流费用</p>
                    </div>
                </div>
            </div>
            <!-- 订单布局4 -->
            <div class="lty_order_box">
                <div class="box_top">
                    <strong>合计</strong>
                </div>
                <div class="box_bom clearfix">
                    <div class="box_bom_lt">
                        <p>应付金额</p>
                        <p><span class="money">￥<i>1350元</i></span></p>
                    </div>
                    <div class="box_bom_rt">
                        <div class="fix"><span class="btn_red">提交订单</span></div>
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

    export default{
        data(){
            return {
                isHasAddressInfo:true,
                isShow: false,
                loading: true,
                city:[
                    {text:"北京",value:0},
                    {text:"天津",value:1},
                    {text:"上海",value:2},
                    {text:"广州",value:3},
                    {text:"深证",value:4}
                ],
                user:{
                    selected:'',
                    name:'',
                    tel:'',
                    postcode:'',
                    address:''
                }
            }
        },
        methods:{
            showModal(){
                this.isShow = !this.isShow;
            },
            ok(){
                this.loading = false;
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                    console.log(this.user.selected);
                    this.isShow = false;
                }).catch(() => {
                    console.log('Correct them errors!');
                    this.loading = true;
                });
            }
        },
        components:{
            HeaderBar,
            FooterBar
        }
    }
</script>
<style>
    @import "../../assets/css/hall/lty_order_box.css";
    .c_order .lty_container{
        padding: 20px 0;
    }
    .c_order .long_btn {
        display: inline-block;
        width: 150px;
        height: 25px;
        line-height: 25px;
        color: #666;
        text-align: center;
        cursor: pointer;
        border: 1px solid #ddd;
    }
    .c_order .box_bom .btn_add{
        display: block;
        margin: 0 auto;
    }
    .c_order .box_bom p{
        margin-bottom: 7px;
    }
    .c_order .box_bom_lt{
        width: 400px;
        float: left;
        margin-left: 130px;
    }
    .c_order .box_bom_rt{
        width: 300px;
        float: right;
        text-align: right;
    }
    .c_order .box_bom_rt .btns{
        text-align: right;
        margin-bottom: 15px;
    }
    .c_order .box_bom_rt .btns span{
        display: inline-block;
        padding: 2px 20px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
    }
    .c_order .box_bom_rt .btn_edit{
        background-color: #ff7200;
    }
    .c_order .box_bom_rt .btn_dele{
        margin-left: 10px;
        background-color: #3aa9f2;
    }
    /* modal */
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .vertical-center-modal .ivu-modal{
        top: 0;
    }
    /* modal-form */
    .fm_uinfo .fm_item{
        height: 30px;
        overflow: hidden;
    }
    .fm_uinfo .fm_item label{
        display: block;
        width: 100px;
        line-height: 30px;
        text-align: right;
        float: left;
        margin-right: 20px;
    }
    .fm_uinfo .fm_item input,
    .fm_uinfo .fm_item select{
        width: 300px;
        height: 30px;
        line-height: 30px;
        float: left;
        border: 1px solid #e0e0e0;
    }
    .fm_uinfo .fm_error{
        width: 300px;
        height: 20px;
        line-height: 15px;
        margin-left: 120px;
        font-size: 12px;
    }
    .fm_uinfo .fm_error span{
        float: left;
        color: #ff0000;
    }
</style>