<template>
    <!-- 入金 -->
    <div class="in_money_form">
        <form @submit.prevent="inMoneySubmit" class="oi_form">
            <div class="item">
                <label>充入银行：</label>
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
                <label>入金金额：</label>
                <input type="text" v-model="inmoney" name="inmoney" v-validate:inmoney.initial="'required|min:6'" data-vv-as="入金金额">
                <span v-show="errors.has('inmoney')" class="help is-danger">{{ errors.first('inmoney') }}</span>
            </div>
            <div class="item">
                <label>银行卡密码：</label>
                <input type="text" v-model="cardpwd" name="cardpwd" v-validate:cardpwd.initial="'required|min:6'" data-vv-as="银行卡密码">
                <span v-show="errors.has('cardpwd')" class="help is-danger">{{ errors.first('cardpwd') }}</span>
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
                inmoney:'',
                cardpwd:''
            }
        },
        methods: {
            inMoneySubmit(){
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
</style>