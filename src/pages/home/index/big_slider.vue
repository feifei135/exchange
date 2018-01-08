<template>
    <div class="c_big_slider">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in sliders"  :key="slide.id">
                <a :href="slide.url" target="_blank"><img :src="slide.img"></a>
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
                        "url": "#"
                    },
                    {
                        "img": "http://192.168.11.142:8989/zlebank/image/banner02.jpg",
                        "url": "#"
                    },
                    {
                        "img": "http://192.168.11.142:8989/zlebank/image/banner03.jpg",
                        "url": "#"
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
    .c_big_slider .swiper-slide{
        height: 350px;
    }
    .c_big_slider .swiper-slide img{
        width: 100%;
        height: 100%;
    }
</style>