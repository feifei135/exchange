<template>
    <!-- 违约管理 -->
    <div class="c_breach_manager pur_sup_auc">
        <!-- 头部 -->
        <header-bar></header-bar>
        <div class="lty_container">
            <!-- 当前位置 -->
            <div class="position_bar">
                <div class="g_wrap">
                    <div class="pos_lt">您的位置：首页 > 交易大厅</div>
                </div>
            </div>
            <div class="g_wrap list_main">
                <h3 class="list_title">违约管理</h3>
                <div class="uc_search">
                    <div class="search_lt">
                        <div class="item">
                            <span>违约编号</span><input type="text">
                        </div>
                        <div class="item">
                            <span>状态</span>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">春天</option>
                                <option value="2">夏天</option>
                                <option value="3">秋天</option>
                                <option value="4">冬天</option>
                            </select>
                        </div>
                        <div class="item">
                            <span>类型</span>
                            <select name="type">
                                <option value="0">请选择</option>
                                <option value="1">春天</option>
                                <option value="2">夏天</option>
                                <option value="3">秋天</option>
                                <option value="4">冬天</option>
                            </select>
                        </div>

                    </div>
                    <div class="search_rt">
                        <a href="#" class="g_btn">查询</a>
                        <a href="javascript:void(0);" @click="breach_modal=true" class="g_btn">违约申请</a>
                    </div>
                </div>

                <modal
                    title="违约申请"
                    v-model="breach_modal"
                    class-name="vertical-center-modal breach_modal">
                    <form class="common_form">
                        <div class="fm_item">
                            <label>违约订单：</label>
                            <input type="text" v-model="number" name="number" v-validate:number.initial="'required'" data-vv-as="报价">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span></div>
                        <div class="fm_item">
                            <label>违约理由：</label>
                            <input type="text" v-model="reason" name="reason" v-validate:reason.initial="'required'" data-vv-as="交易量">
                        </div>
                        <div class="fm_err"><span v-show="errors.has('reason')" class="help is-danger">{{ errors.first('reason') }}</span></div>
                        <div class="fm_item">
                            <label>缩略图：</label>
                            <vue-core-image-upload
                                    :crop="false"
                                    @imageuploaded="imageuploaded1"
                                    :max-file-size="5242880"
                                    url="http://101.198.151.190/api/upload.php" >
                                <img :src="upload1.src" width="91" height="91">
                            </vue-core-image-upload>
                        </div>
                        <div class="fm_err"><span class="fm_err" v-show="upload1.flag">请上传证件</span></div>
                        <div class="fm_item">
                            <label>详细信息：</label>
                            <textarea v-model="detail" name="detail" v-validate:detail.initial="'required'" data-vv-as="交易量"></textarea>
                        </div>
                        <div class="fm_err"><span v-show="errors.has('detail')" class="help is-danger">{{ errors.first('detail') }}</span></div>
                        <div class="fm_btn">
                            <button class="g_btn">提交</button>
                        </div>
                    </form>
                    <div slot="footer" class="custom_footer"></div>
                </modal>

                <div class="pur_sup">
                    <table style="table-layout:fixed">
                        <thead>
                        <tr>
                            <th width="5%">序号</th>
                            <th width="15%">违约编号</th>
                            <th width="15%">订单编号</th>
                            <th width="30%">违约理由</th>
                            <th width="15%">申请时间</th>
                            <th width="10%">状态</th>
                            <th width="20%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>WY123123123</td>
                                <td>ZL12121290</td>
                                <td>茶不好,发霉了！颜色很难看,感觉很次。</td>
                                <td>2017/05/20</td>
                                <td>违约申请</td>
                                <td><a href="#">查看详情</a><a href="#">违约凭证</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>WY123123123</td>
                                <td>ZL12121290</td>
                                <td>茶不好,发霉了！颜色很难看,感觉很次。</td>
                                <td>2017/05/20</td>
                                <td>违约申请</td>
                                <td><a href="#">查看详情</a><a href="#">违约凭证</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>WY123123123</td>
                                <td>ZL12121290</td>
                                <td>茶不好,发霉了！颜色很难看,感觉很次。</td>
                                <td>2017/05/20</td>
                                <td>违约申请</td>
                                <td><a href="#">查看详情</a><a href="#">违约凭证</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>WY123123123</td>
                                <td>ZL12121290</td>
                                <td>茶不好,发霉了！颜色很难看,感觉很次。</td>
                                <td>2017/05/20</td>
                                <td>违约申请</td>
                                <td><a href="#">查看详情</a><a href="#">违约凭证</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>WY123123123</td>
                                <td>ZL12121290</td>
                                <td>茶不好,发霉了！颜色很难看,感觉很次。</td>
                                <td>2017/05/20</td>
                                <td>违约申请</td>
                                <td><a href="#">查看详情</a><a href="#">违约凭证</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <page :total="1000" size="small" class-name="c_page"></page>

            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'

    import VueCoreImageUpload from 'vue-core-image-upload'
    import plus from '../../assets/images/plus.jpg'
    export default {
        data(){
            return {
                breach_modal:false,
                upload1:{
                    flag:false,
                    src:plus
                },
                number:'',
                reason:'',
                detail:''
            }
        },
        methods: {
            imageuploaded1(res) {
                this.upload1.src = res.data.src;
                this.upload1.flag = false;
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            VueCoreImageUpload
        }
    }
</script>
<style>
    @import "../../assets/css/hall/pur_sup_table.css";
    @import "../../assets/css/uc/uc_search.css";
    @import "../../assets/css/uc/uc_form.css";
    .c_breach_manager table a{
        margin-right: 20px;
    }
    .c_breach_manager table a:hover{
        color: #3f8fd8;
    }
    .breach_modal .fm_btn {
        padding-left: 90px;
    }
    .breach_modal .custom_footer{
        position: absolute;
        left: 0;
        bottom: 5px;
        width: 100%;
        height: 20px;
        background-color: #fff;
    }
</style>