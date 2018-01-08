<template>
    <!-- 出金 -->
    <div class="out_money_form">
        <form @submit.prevent="outMoneySubmit" class="oi_form">
            <div class="item">
                <label>账户信息：</label>
                <span class="info">账户总金额 <i>8923423.00</i></span>
                <span class="info">可提取金额 <i>8923423.00</i></span>
            </div>
            <div class="item">
                <label>提款银行：</label>
                <select name="bank" v-model="bank" v-validate:bank.initial="'min_value:1'" data-vv-as="银行">
                    <option value="0">请选择</option>
                    <option value="1">中国工商银行</option>
                    <option value="2">中国农业银行</option>
                    <option value="3">中国建设银行</option>
                </select>
                <span v-show="errors.has('bank')" class="help is-danger">请选择银行</span>
            </div>
            <div class="item">
                <label>开户行：</label>
                <span>中国工商银行太阳宫支行</span>
            </div>
            <div class="item">
                <label>账号：</label>
                <span>6220**********898989</span>
            </div>
            <div class="item">
                <label>申请金额：</label>
                <input type="text" v-model="outmoney" name="outmoney" v-validate:outmoney.initial="'required|min:6'" data-vv-as="入金金额">
                <span v-show="errors.has('outmoney')" class="help is-danger">{{ errors.first('outmoney') }}</span>
            </div>
            <div class="item">
                <label>支付密码：</label>
                <input type="text" v-model="paypwd" name="paypwd" v-validate:paypwd.initial="'required|min:6'" data-vv-as="银行卡密码">
                <span v-show="errors.has('paypwd')" class="help is-danger">{{ errors.first('paypwd') }}</span>
            </div>
            <div class="btn">
                <button type="submit">确认</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                bank:0,
                outmoney:'',
                paypwd:''
            }
        },
        methods: {
            outMoneySubmit(){
                this.$validator.validateAll().then(() => {
                    console.log('From Submitted!');
                }).catch(() => {
                    console.log('Correct them errors!');
                });
            }
        }
    }
</script>
<style>
    @import "../../../assets/css/uc/uc_oi_money.css";
    .oi_form .info{
        margin-right: 30px;
    }
    .oi_form .info i{
        color: #ff0000;
    }
</style>