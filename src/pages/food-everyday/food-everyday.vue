
   <template>
      <div class=""> 
   
   
   <div>  
      <div class=" bg-[url('https://img.pikbest.com/origin/09/75/54/92HpIkbEsTx3j.jpeg!w700wp')] "> 
            <div class="relative w-full flex items-center justify-center">  
            <div class="bg-slate-800 opacity-70 w-full h-20 flex items-center justify-center "> 
                  
            </div>
            <h1 class="font-bold text-3xl font-mono text-white absolute  top-4 left-[45%]">  {{nameCourser?.vi }}  </h1>
         </div>
            <div class="max-w-[1280px] mx-auto" v-if="data && data.length > 0">
               <div class="flex gap-4">
                  
                  <listCourse :data="data" :nameCourser="nameCourser?.vi"/>

                  <sideBar />
               </div>
            </div>
            <div v-else>
                  <h1> CHưa có dữ liệu </h1>
            </div>
      </div>
   </div>
   </div>
   </template>

   <script setup>
   import { computed, onMounted, ref,watch } from 'vue';
   import { useRoute, onBeforeRouteUpdate } from 'vue-router';
   import endpointName from './components/endponit-name';
      import axiosClient from '../../api/axios-client';
   import listCourse from './components/list-courser.vue';
   import sideBar from './components/side-bar.vue';
   import loading from '@/ui/loading.vue';
   import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
   import useCourseHome from '../../hooks/use-show-course/use-course-home';
   const route = useRoute();
   const endpoint = computed(() => route.params.endpoint);
   const id = computed(() => Number(route.params.id));



  
      const url = computed(() => `/data/data-food-everyday/${endpoint.value}.json`);
          const {data} =  useCourseHome(url);
    
   
   
   
   const nameCourser = computed(() => {
      return endpointName.find((item) => item.en === endpoint.value);
   });

   </script>






















