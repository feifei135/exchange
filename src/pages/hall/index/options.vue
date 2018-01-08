<!-- 操作栏：用户名字,退出,购物车,按钮组 -->
<template>
    <div class="c_options">
        <div class="user" v-if="sessionId">
            <a href="#/user_center" class="user_name">{{userId}}</a>
            <i class="border">|</i><a href="javascript:void(0);" @click="signOut">退出</a>
        </div>
        <div class="user" v-else>
            <a href="#/login" class="user_name">登录</a>
            <i class="border">|</i><a href="#/regist">注册</a>
        </div>
        <div class="cart"><i class="icon_cart"></i>0</div>
        <div class="btns">
            <span @click="btnCreateProduct" class="g_btn">采购发布</span>
            <span @click="btnSellerCreate" class="g_btn">销售发布</span>
            <span @click="btnAuctionCreate" class="g_btn">竞拍发布</span>
        </div>
        <modal
                title="提示"
                width="260"
                v-model="isLoginModal"
                class-name="vertical-center-modal">
            <p style="text-align: center;">{{modalMsg}}</p>
        </modal>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        data(){
          return{
              isLoginModal:false,
              modalMsg:'请登录!'
          }
        },
        computed: {
            ...mapGetters(['sessionId','userId'])
        },
        methods:{
            btnCreateProduct(){
                /* 如果sessionId不等于空并且不等于000000说明一登录 */
                if(this.sessionId != undefined && this.sessionId != "000000" && this.$store.state.userStatus > 1){
                    this.$router.push("/create_product")
                }else {
                    this.modalMsg = '登录并认证通过之后才可以进行采购发布~';
                    this.isLoginModal = true;
                }
            },
            btnSellerCreate(){
                if(this.$store.state.userStatus != '' && this.$store.state.userStatus != 3){
                    this.modalMsg = '登录并认证通过之后才可以进行销售发布~';
                    this.isLoginModal = true;
                }
            },
            btnAuctionCreate(){
                if(this.$store.state.userStatus != '' && this.$store.state.userStatus != 3){
                    this.modalMsg = '登录并认证通过之后才可以进行竞拍发布~';
                    this.isLoginModal = true;
                }
            },
            signOut(){
                this.$store.dispatch('signOut');
            }
        }
    }
</script>
<style>
    .c_options .user{
        display: inline-block;
        padding: 0 20px;
        margin-right: 7px;
        background-color: #fff;
        border-radius: 3px;
    }
    .c_options .border{
        padding: 0 10px;
    }
    .c_options .cart{
        display: inline-block;
        padding: 0 20px;
        color: #fff;
        background-color: #ff7200;
        border-radius: 3px;
    }
    .c_options .btns{
        float: right;
    }
    .c_options .g_btn{
        margin-left: 7px;
        background-color: #27b600;
    }
</style>