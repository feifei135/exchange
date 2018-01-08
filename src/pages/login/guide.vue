<template>
    <div class="c_guide">
        <header-bar :isShowNav="isShowNav"></header-bar>
        <!-- 布局容器 -->
        <div class="lty_container">
            <div class="guide_box">
                <div class="guide_box_top">
                    <i></i>您好,已经成功登录
                </div>
                <div class="guide_box_ctr">
                    <a href="#/identity_auth" class="go_auth">开始企业身份认证</a>
                    <a href="#/hall" class="go_before">回到登录前页面</a>
                </div>
                <div class="guide_box_bom">
                    提示：个人会员未完成认证的企业认证，可在平台上浏览、查看信息。个人会员需前往会员中心完成企业身份认证后，经平台审核通过，可在平台上浏览、发布信息、交易、交收等业务操作资格。
                </div>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
    import HeaderBar from '../../components/header.vue'
    import FooterBar from '../../components/footer.vue'
    export default {
        data(){
            return {
                isShowNav:false
            }
        },
        components: {
            HeaderBar,
            FooterBar
        }
    }
</script>
<style lang="less">
    .c_guide .lty_container{
        padding: 120px 0 200px;
    }
    .c_guide .guide_box{
        width: 530px;
        height: 390px;
        margin: 0 auto;
        padding: 50px 80px;
        text-align: center;
        background-color: #fff;
    }
    .c_guide .guide_box_top{
        height: 40px;
        line-height: 40px;
        margin-bottom: 60px;
    }
    .c_guide .guide_box_top i{
        position: relative;
        left: 90px;
        display: block;
        width: 38px;
        height: 38px;
        float: left;
        background: url("../../assets/images/index_icons.png") no-repeat;
        background-position: -457px -144px;
    }
    .c_guide .guide_box_ctr {
        height: 40px;
        margin-bottom: 30px;
    }
    .c_guide .guide_box_ctr a{
        display:block;
        width: 175px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }
    .c_guide .guide_box_ctr .go_auth{
        float: left;
        background-color: #ff7200;
    }
    .c_guide .guide_box_ctr .go_before{
        float: right;
        color: #3aa9f2;
        border: 1px solid #3aa9f2;
    }
    .c_guide .guide_box_bom {
        text-align: left;
        color: #f02d2d;
        font-size: 12px;
    }
</style>