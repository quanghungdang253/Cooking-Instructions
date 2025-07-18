


<template>
    <div class="mt-4">  
       <div v-if="data.length > 0" class="max-w-[1280px] mx-auto grid gap-6">
             <div v-for="(item, index) in data " :key="index" class="flex">
                <div>

                   <div> 
                    <h1 class="text-[2em] font-semibold"> {{ item.name }}</h1> 
                     <router-link 
                        to="/"
                        v-if="index == 0"
                        class="border border-x-cyan-500 bg-yellow-500 p-2 rounded-3xl font-bold mb-4 inline-block"
                    > 
                        ĐĂNG KÝ HỌC NGAY >>
                    </router-link>   
                    <p v-html="item.content"
                     class="leading-8 font-mono font-bold" >   </p>
                    </div>
                    <div class="w-full bg-orange-800 h-1"> </div>
                 </div>
                              
                     <img :src="item.img" alt="" v-if="index == 0" class="max-w-[20em]">
        
             </div>
             <div>
                 <ImageGrid 
                    :listImg="listImgFacilities"
                    title="CƠ SỞ VẬT CHẤT TỐT HIỆN ĐẠI "
                 />
             </div>
      </div>

 </div>
</template>


<script setup>
        import { onMounted, watch } from 'vue';
        import useCourseHome from '../../hooks/use-show-course/use-course-home';
        import ImageGrid from '../../ui/Image-grid.vue';
        import { listImgFacilities } from '../home/components/data-img/data-img';
        const {data} = useCourseHome("/data-detail/family-cooking-course/family-cooking-course.json");
    watch( data, (newValue) => {
            console.log("dữ liệu đã tải xong " + newValue);
    })
    
    onMounted(() => {
        console.log("tải dữ liệu ")
    })

</script>