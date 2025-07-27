

<template>
      <div class="h-[4000px] mt-[11em]">
         <div class="max-w-[1280px] mx-auto ">  
          <div v-if="selectItems" class="flex justify-between">
               <div class="max-w-[50em]"> 
                  <componentContent :data="selectItems" />
                  
               </div>
               <sideBar :listData="selectItems.dataSizeBar"/>
               
          </div>
        </div>
      </div>

</template>


<script setup>
        import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
        import componentContent from './components/component-content.vue';
        import { computed, watch } from 'vue';
        import { useRoute } from 'vue-router';
        import sideBar from '../../components/side-bar.vue';
        const router = useRoute();
        const endpoint = computed(() => router.params.endpoint);
        const id = computed(() => Number(router.params.id));
       console.log(endpoint.value);
       console.log(id.value);
        const {listData} = HomeCourseDetail(endpoint);

        const selectItems = computed(() => {
                return Array.isArray(listData.value) ? listData.value.find((item) => item.id == id.value) || null 
                
              : null ;
        })

        watch(selectItems,  (newItem) => {
                 console.log("Dữ liệu đã tải xong và sẵn sàng " + newItem ); 
        })

      


        
        

</script>