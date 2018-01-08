<template>
    <div class="create_product_step2">
        <form class="common_form">
            <div class="fm_item"><label>包装形式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="包装形式">
                    <option value="0">请选择</option>
                    <option value="1">保证金</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item">
                <label>产地：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="产地">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>年份：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>备注：</label>
                <textarea name=""></textarea>
            </div>

            <div class="fm_btn">
                <button href="#" class="g_btn">上一步</button>
                <button href="#" class="g_btn">下一步</button>
            </div>
        </form>
    </div>
</template>