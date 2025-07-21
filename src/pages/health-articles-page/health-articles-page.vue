

<template>
      <div class="h-[1000px]">
          <div v-if="selectItems">
        
               <componentContent :data="selectItems" />
          </div>

      </div>


</template>


<script setup>
        import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
        import componentContent from './components/component-content.vue';
        import { computed, watch } from 'vue';
        import { useRoute } from 'vue-router';

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