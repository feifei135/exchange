<template>
    <div class="c_small_slider">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in sliders" :key="slide.id">
                <a :href="slide.url" target="_blank"><img :src="slide.img"></a>
                <span class="title">这个是新闻标题</span>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                sliders: [
                    {
                        "img": "http://192.168.11.142:8989/zlebank/image/banner01.jpg",
                        "url": "www.baidu.com"
                    },
                    {
                        "img": "http://192.168.11.142:8989/zlebank/image/banner01.jpg",
                        "url": "www.baidu.com"
                    },
                    {
                        "img": "http://static.gy.com/ecg/banner03.jpg",
                        "url": "www.baidu.com"
                    }
                ],
                swiperOption: {
                    initialSlide:0,
                    autoplay: 5000,
                    loop: true,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    observeParents:true
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .c_small_slider .swiper-slide{
        position: relative;
        height: 255px;
    }
    .c_small_slider .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .c_small_slider .swiper-slide .title{
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background: url("../../../assets/images/opacity.png");
    }

</style>