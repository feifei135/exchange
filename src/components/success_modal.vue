<template>
    <!-- 成功 -->
    <div class="c_modal_success" v-show="isShow">
        <div class="mdl_succ_cont">{{msg}}</div>
    </div>
</template>
<script>
    export default {
        props:['msg','isShow']
    }
</script>