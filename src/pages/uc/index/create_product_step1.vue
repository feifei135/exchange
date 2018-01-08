<template>
    <div class="create_product_step1">
        <form class="common_form">
            <div class="fm_item"><label>交易模式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="交易模式">
                    <option value="0">请选择</option>
                    <option value="1">挂牌</option>
                    <option value="2">竞价</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择交易模式</span>
            </div>
            <div class="fm_item"><label>交易方向：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="交易方向">
                    <option value="0">请选择</option>
                    <option value="1">采购</option>
                    <option value="2">销售</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择交易方向</span>
            </div>
            <div class="fm_item"><label>挂单方式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="挂单方式">
                    <option value="0">请选择</option>
                    <option value="1">保证金</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item">
                <label>挂单标题：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="挂单标题">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item"><label>挂单品类：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="挂单品类">
                    <option value="0">请选择</option>
                    <option value="1">红茶</option>
                    <option value="2">绿茶</option>
                    <option value="3">其它</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单品类</span>
            </div>
            <div class="fm_item"><label>价格模式：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="价格模式">
                    <option value="0">请选择</option>
                    <option value="1">一口价模式</option>
                    <option value="2">可议价模式</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item"><label>价格类型：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="价格类型">
                    <option value="0">请选择</option>
                    <option value="1">库内价</option>
                    <option value="1">出库价</option>
                    <option value="1">车板价</option>
                    <option value="1">到港价</option>
                    <option value="1">平仓价</option>
                    <option value="1">大船板</option>
                    <option value="1">小船板</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择价格类型</span>
            </div>
            <div class="fm_item">
                <label>升贴水等费用：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="升贴水等费用">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>挂单信息失效日期：</label>
                <calendar size="small" format="yyyy/MM/dd" placeholder="选择日期" style="width:200px;"></calendar>
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>缩略图：</label>
                <vue-core-image-upload
                        :crop="false"
                        @imageuploaded="imageuploaded1"
                        :max-file-size="5242880"
                        url="http://101.198.151.190/api/upload.php" >
                    <img :src="upload1.src" width="91" height="91">
                </vue-core-image-upload>
                <span class="fm_err" v-show="upload1.flag">请上传缩略图</span>
            </div>
            <div class="tip">（请在此补充品种属性，系统默认为红茶国标GB/T 13738.1-2008，品种属性只可填写在标准属性，特殊属性请在备注中说明。）</div>
            <div class="fm_item"><label>国标等级：</label>
                <select name="type" v-validate:type.initial="'min_value:1'" data-vv-as="国标等级">
                    <option value="0">请选择</option>
                    <option value="1">特级</option>
                    <option value="2">一级</option>
                    <option value="3">二级</option>
                    <option value="4">三级</option>
                    <option value="5">四级</option>
                    <option value="6">五级</option>
                    <option value="7">六级</option>
                </select>
                <span v-show="errors.has('type')" class="help is-danger">请选择挂单方式</span>
            </div>
            <div class="fm_item">
                <label>条索：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>整碎：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>净度：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>色泽：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>香气：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>滋味：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>汤色：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>叶底：</label>
                <input type="text" name="people" v-validate:people.initial="'required'" data-vv-as="条索">
                <span v-show="errors.has('people')" class="help is-danger">{{ errors.first('people') }}</span>
            </div>
            <div class="fm_item">
                <label>备注：</label>
                <textarea name=""></textarea>
            </div>


            <div class="fm_btn">
                <button href="#" class="g_btn">下一步</button>
            </div>
        </form>
    </div>
</template>
<script>
    import VueCoreImageUpload from 'vue-core-image-upload'
    import plus from '../../../assets/images/plus.jpg'
    export default {
        data(){
            return {
                upload1:{
                    flag:false,
                    src:plus
                }
            }
        },
        methods: {
            imageuploaded1(res){

                console.log(res);

                this.upload1.src = res.data.src;
                this.upload1.flag = false;
            }
        },
        components: {
            VueCoreImageUpload
        }
    }
</script>