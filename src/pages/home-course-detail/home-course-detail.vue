

<template>
        <div>  
            <div class="max-w-[1280px] mx-auto">
                 <HomeCourseMain v-if="selectedItem" :listData="selectedItem" />
            </div>
        </div>

</template>


<script setup>
        import { useRoute } from 'vue-router';
        import { computed ,watch} from 'vue';
        import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
        const route = useRoute();
    
import HomeCourseMain from './components/home-course-main.vue';
      const endpoint = route.params.endpoint;
        const id = Number(route.params.id); 

        console.log(id);
        console.log(endpoint);  
        const {listData} = HomeCourseDetail(endpoint);
        const selectedItem = computed(() => {
                 if (Array.isArray(listData.value) && listData.value.length > id) {
                         return listData.value[id];
                }
         return null;
});

       

       

</script>