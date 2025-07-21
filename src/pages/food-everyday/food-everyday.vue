
<template>
    <div class="h-[5000px]"> 
   <!-- Skeleton UI khi đang loading -->
<div v-if="isLoading">
        <loading />
</div>
 <div v-else>  
    <div class=" bg-[url('https://img.pikbest.com/origin/09/75/54/92HpIkbEsTx3j.jpeg!w700wp')] "> 
          <div class="relative w-full flex items-center justify-center">  
         <div class="bg-slate-800 opacity-70 w-full h-20 flex items-center justify-center "> 
                
         </div>
         <h1 class="font-bold text-3xl font-mono text-white absolute  top-4 left-[50%]">  {{nameCourser?.vi }}  </h1>
      </div>
         <div class="max-w-[1280px] mx-auto" v-if="arrayFood">
            <div class="flex">
                 
                 <listCourse :data="arrayFood" :nameCourser="nameCourser?.vi"/>
                 <sideBar />
            </div>
         </div>
    </div>
</div>
 </div>
</template>

<script setup>
    import { computed, onMounted, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import endpointName from './components/endponit-name';
     import useCourseHome from '@/hooks/use-show-course/use-course-home';
     import loading from '@/ui/loading.vue';
  import { onBeforeRouteUpdate } from 'vue-router';
     import axiosClient from '../../api/axios-client';
    import listCourse from './components/list-courser.vue';
    import sideBar from './components/side-bar.vue';
    const router = useRoute();
    const endpoint = computed(() => router.params.endpoint);
    const id = computed(() => Number(router.params.id));
    const arrayFood = ref([]);
    const isLoading = ref(false);

    const nameCourser= computed(() => {
        let name = endpointName.find((item) => item.en == endpoint.value);
        return name;
    })
  
    
        const fetchData  =  async () => {
             isLoading.value = true;
            try {
                const response = await axiosClient.get(`/data/data-food-everyday/${endpoint.value}.json`);
                arrayFood.value = response;
            } catch (error) {
                console.log("Lỗi khi lấy dữ liệu " + error);
            } finally {
                 isLoading.value = false;
            }
              

        }
fetchData();
onBeforeRouteUpdate(async (to, from, next) => {
    if (to.params.endpoint !== from.params.endpoint) {
        await fetchData(to.params.endpoint);
    }
    next();
});

// Hoặc có thể sử dụng watch như sau (nhưng onBeforeRouteUpdate tốt hơn)
watch(endpoint, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        fetchData(newVal);
    }
}, { immediate: true });

  
</script>