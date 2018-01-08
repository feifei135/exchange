<template>
    <div class="create_product_step4">
        <form class="common_form">
            <div class="fm_item">
                <label>交收开始时间：</label>
                <calendar size="small" format="yyyy/MM/dd" placeholder="选择日期" style="width:200px;"></calendar>
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>交收结束时间：</label>
                <calendar size="small" format="yyyy/MM/dd" placeholder="选择日期" style="width:200px;"></calendar>
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>交收仓库：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item"><label>数量验收方式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="数量验收方式">
                    <option value="0">请选择</option>
                    <option value="1">一口价模式</option>
                    <option value="2">可议价模式</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item"><label>质量验收方式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="数量验收方式">
                    <option value="0">请选择</option>
                    <option value="1">一口价模式</option>
                    <option value="2">可议价模式</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item">
                <label>库存地：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="年份">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>其它：</label>
                <textarea name=""></textarea>
            </div>
            <div class="fm_btn">
                <button href="#" class="g_btn">上一步</button>
                <button href="#" class="g_btn">提交</button>
            </div>
        </form>
    </div>
</template>