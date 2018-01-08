<template>
    <!-- 倒计时 -->
    <div class="c_count_down">
        <div class="bs_time">
            距离闭市：<span class="t_hours"></span>:<span class="t_minutes"></span>:<span class="t_seconds"></span>
        </div>
        <div class="jy_time">交易时间：00:00-18:00</div>
    </div>
</template>
<script>
    import diffTime from '../utils/diffTime'
    export default {
        props:['start'],
        mounted(){
            setInterval(this.countDownTime, 1000);
        },
        methods: {
            countDownTime(){
                var cur = new Date();
                var t = cur.getTime();
                var y = cur.getFullYear();
                var m = cur.getMonth() + 1;
                var d = cur.getDate();
                var h = cur.getHours();
                var n = cur.getMinutes();
                var s = cur.getSeconds();

                var close_time = new Date(y, m, d, 18, "00", "00");
                var r = diffTime(new Date(y, m, d, h, n, s), close_time);

                this.$el.querySelector(".t_hours").innerHTML = r.hours;
                this.$el.querySelector(".t_minutes").innerHTML = r.minutes;
                this.$el.querySelector(".t_seconds").innerHTML = r.seconds;
            }
        }
    }
</script>
<style>
    .c_count_down .bs_time {
        float: right;
        margin-left: 30px;
    }
    .c_count_down .bs_time span {
        position: relative;
        top: -1px;
        display: inline-block;
        line-height: normal;
        padding: 0 5px;
        color: #fff;
        font-size: 12px;
        margin: 0 5px;
        background-color: #000;
    }
    .c_count_down .jy_time {
        position: relative;
        float: right;
    }
    .c_count_down .jy_time:after {
        position: absolute;
        top: 18px;
        right: -16px;
        display: block;
        width: 1px;
        height: 14px;
        content: "";
        background-color: #999;
    }
</style>