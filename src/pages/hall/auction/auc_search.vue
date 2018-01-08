<template>
    <!-- 列表上的搜索栏 -->
    <div class="c_list_search">
        <div class="sch_top">
            <div class="items">
                <div class="items_lt">按级别</div>
                <div class="items_rt">
                    <div class="options">
                        <span>不限</span>
                        <span>一级</span>
                        <span>二级</span>
                        <span>三级</span>
                        <span>其它</span>
                    </div>
                </div>
            </div>
            <div class="items">
                <div class="items_lt">按品种</div>
                <div class="items_rt">
                    <div class="options">
                        <span>不限</span>
                        <span>绿茶原茶</span>
                        <span>红茶原茶</span>
                        <span>绿茶极品</span>
                        <span>其它</span>
                    </div>
                </div>
            </div>
            <div class="items">
                <div class="items_lt">按状态</div>
                <div class="items_rt">
                    <div class="options">
                        <span>不限</span>
                        <span>进行中</span>
                        <span>未开始</span>
                        <span>已结束</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                btnText: '展开',
                isToggle:false
            }
        },
        methods: {
            toggleDown(){
                this.isToggle = !this.isToggle;
                this.isToggle?this.btnText = '收起':this.btnText = '展开';
            }
        }
    }
</script>
<style>
    @import "../../../assets/css/hall/search_bar.css";
</style>