<template>
    <div class="create_product_step3">
        <form class="common_form">
            <div class="fm_item">
                <label>挂单总量：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="产地">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>价格类型：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>商品单价：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>保证金支付比例：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>最小交易量：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>溢短装(%)：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>其它：</label>
                <textarea name=""></textarea>
            </div>

            <div class="fm_btn">
                <button href="#" class="g_btn">上一步</button>
                <button href="#" class="g_btn">下一步</button>
            </div>
        </form>
    </div>
</template>