
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
                  
                  <listCourse
                   :data=
                     "select === 'popularity' ?  listPopularity : 
                      select === 'rating' ? listRating :
                      select === 'date' ? listDate : 
                      select === 'price-asc' ? listPriceAsc :
                   select === 'price-desc' ? listPriceDesc :
                      data  
                  "
                   
                    
                     
                     
                  
                     
                   
                   :nameCourser="nameCourser?.vi"/>
               <div class=""> 
                  <div class="flex bg-white p-4 flex gap-4 ">
                     <div class="flex items-center ">   
                         <FunnelIcon class="w-5 h-5 text-gray-700" /> 
                         <h6 class="text-[14px] font-bold"> Bộ lọc </h6> 
                    </div>
                  <select 
                     name="" id="" 
                    v-model="select" 
                     class="border border-black p-2 text-center rounded-sm text-sm font-bold ">
                      <option value="popularity"> Thứ tự theo mức độ phổ biến </option>
                        <option value="rating">Thứ tự theo điểm đánh giá</option>
                      <option value="date"> Mới nhất</option>
                      <option value="price-asc"> Thứ tự theo giá: thấp đến cao</option>
                      <option value="price-desc"> Thứ tự theo giá: cao xuống thấp</option>
                       <option value="default"> Mặc định</option>
                  </select>
                    </div>  
                  <sideBar />
               </div>
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
   import useFoodEveryDay from '@/hooks/use-food-every-day/use-food-every-day';
      import axiosClient from '../../api/axios-client';
   import listCourse from './components/list-courser.vue';
   import sideBar from './components/side-bar.vue';
   import loading from '@/ui/loading.vue';
   import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
   import useCourseHome from '../../hooks/use-show-course/use-course-home';
   import { FunnelIcon } from '@heroicons/vue/24/solid'
   const route = useRoute();
   const select = ref('default');
   const endpoint = computed(() => route.params.endpoint);
   const id = computed(() => Number(route.params.id));

  const listPopularity  = ref([]);
  const listRating = ref([]);
  const listDate = ref([]);
  const listPrice = ref([]);

const listPriceAsc = ref([]);
const listPriceDesc = ref([]);

 
const convertPrice = (price) => {
   if (!price || !price.includes(" - ")) return { min: 0, max: 0 };
   const [min, max] = price.split(" - ").map(p => parseFloat(p.replace(/\./g, "")));
   return { min, max };
}

watch(select, (newValue) => {
         if(newValue == "popularity"){
                listPopularity.value  =  data.value.filter((item) => item.id % 2 == 0)
         }else if(newValue == "rating"){
               listRating.value = data.value.filter((item) => item.id % 2 == 1);
         }else if(newValue == "date"){
               listDate.value = data.value.filter((item) => item.id % 3 == 0);
         }
         else if(newValue == "price-asc"){
   listPriceAsc.value = data.value.slice().sort((a,b) => {
      const priceA = convertPrice(a.price).min;
      const priceB = convertPrice(b.price).min;
      return priceA - priceB; 
   })
}else if(newValue == "price-desc"){
   listPriceDesc.value = data.value.slice().sort((a,b) => {
      const priceA = convertPrice(a.price).min;
      const priceB = convertPrice(b.price).min;
      return priceB - priceA; 
   })
}

         console.log(newValue)
})
watch(endpoint, () => {

  listPopularity.value = [];
      listRating.value = [];
          listDate.value = [];
        listPriceAsc.value = [];
  listPriceDesc.value = [];

  select.value = 'default';
});


  
      const url = computed(() => `/data/data-food-everyday/${endpoint.value}.json`);
      
         const {data} =  useFoodEveryDay(url);
   
   
   // watch(url , (newUrl) => {
   //          useFoodEveryDay(newUrl);
   // })
   
   const nameCourser = computed(() => {
      return endpointName.find((item) => item.en === endpoint.value);
   });

   </script>






















