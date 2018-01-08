<template>
    <div class="c_footer">
        <!-- help -->
        <div class="g_help">
            <div class="g_wrap">
                <dl>
                    <dt class="help_icon2"></dt>
                    <dd>
                        <h3>交易指南</h3>
                        <a href="#">交易规则</a>
                        <a href="#">软件下载</a>
                        <a href="#">技术服务</a>
                    </dd>
                </dl>
                <dl>
                    <dt class="help_icon3"></dt>
                    <dd>
                        <h3>会员服务</h3>
                        <a href="#">入会指南</a>
                        <a href="#">席位管理</a>
                        <a href="#">入市指南</a>
                    </dd>
                </dl>
                <dl>
                    <dt class="help_icon4"></dt>
                    <dd>
                        <h3>物流配送</h3>
                        <a href="#">商品验货与签收</a>
                        <a href="#">配送物流推荐</a>
                    </dd>
                </dl>
                <dl>
                    <dt class="help_icon6"></dt>
                    <dd>
                        <h3>常见问题</h3>
                        <a href="#">如何成为交易商</a>
                        <a href="#">如何在线交易</a>
                        <a href="#">如何交收与结算</a>
                    </dd>
                </dl>
                <div class="ewm">
                    <img src="../assets/images/ewm.png">
                    <p>扫一扫,关注我们</p>
                    <p>实时获取茶交信息</p>
                </div>
            </div>
        </div>
        <!-- copyright -->
        <div class="g_copyright">
            <div class="g_wrap">
                <div class="copyright_lt">
                    <div class="copry_list">
                        <a href="#">关于我们</a>
                        <a href="#">About Us</a>
                        <a href="#">新闻报道</a>
                        <a href="#">法律声明</a>
                        <a href="#">网站合作</a>
                        <a href="#">联系我们</a>
                        <a href="#">加入我们</a>
                        <a href="#">帮助中心</a>
                    </div>
                    <p>贵州茶叶商品交易中心版权所有  ©2016 京ICP备170312927号</p>
                </div>
                <div class="copyright_rt">咨询热线：400-8888-8888</div>
            </div>
        </div>
    </div>
</template>
<style>
    .c_footer{position: relative;border-top: 1px solid #d9d9d9}
    .g_help{height:200px;padding-top: 15px;background-color:#fff}
    .g_help dl{float:left;margin-right:100px}
    .g_help dl:last-child{margin-right:0}
    .g_help dl:after{display:block;content:"";clear:both;height:0;overflow:hidden}
    .g_help dl dt{float:left;width:26px;height:27px;margin-right:5px;background: url("../assets/images/index_icons.png") no-repeat;}
    .g_help dl dt.help_icon2{background-position: -128px -149px;}
    .g_help dl dt.help_icon3{background-position: -194px -149px;}
    .g_help dl dt.help_icon4{background-position: -264px -149px;}
    .g_help dl dt.help_icon6{background-position: -416px -149px;}
    .g_help dl dd{float:left}
    .g_help dl h3{display:inline-block;color:#000;font-weight:600}
    .g_help dl dd a{display:block;color:#888;margin-top:3px}
    .g_help .ewm {float: right}
    .g_help .ewm img{width: 110px;height: 110px;}
    .g_help .ewm p{line-height: 20px;color: #888;font-size: 12px;text-align: center;}
    .g_copyright{height:80px;background-color:#545454}
    .g_copyright .copyright_lt{float:left;margin-top:20px}
    .g_copyright .copry_list{font-size:0;margin-bottom:5px}
    .g_copyright .copry_list a{display:inline-block;height:15px;line-height:13px;color:#fff;font-size:14px;padding:0 20px;border-right:1px solid #777777}
    .g_copyright .copyright_lt p{color:#b0b0b0}
    .g_copyright .copry_list a:first-child{padding-left:0}
    .g_copyright .copry_list a:last-child{border-right:none}
    .g_copyright .copyright_rt{float:right;color:#fff;margin-top:20px}
</style>