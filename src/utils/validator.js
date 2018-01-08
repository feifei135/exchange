/**
 * Created by wuwc on 2017/4/28.
 */
import Vue from 'vue'
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

// Add locale helper.
Validator.addLocale(zh_CN);

// Install the Plugin and set the locale.
Vue.use(VeeValidate, {
    errorBagName: 'errors',
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
});

Validator.extend('tel', {
    messages: {
        zh_CN:field => '请输入合法'+field+'号',
    },
    validate: value => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
Validator.extend('min_price', {
    messages: {
        zh_CN:field => '报价不能低于100',
    },
    validate: value => {
        return value > 100;
    }
});