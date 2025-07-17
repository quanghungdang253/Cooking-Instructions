


<script setup>
                import heroBanner from './components/hero-banner/hero-banner.vue';
                import homeCourse from './components/main-content/home-course.vue';
                import listCourse from './components/main-content/list-course.vue';
</script>

<template>
        <div class="">   
                <heroBanner />
        </div>
        <div>
                <div class="max-w-[1280px] mx-auto h-[10000px]">
                         <homeCourse />
                         <listCourse 
                                nameUrl="/data/data-courser/food-everyday.json"
                                title="MÓN NGON MỖI NGÀY "
                        />
                </div>

        </div>
</template>