    <template>
        <div class="h-[3000px]" v-if="price">
            <div class="max-w-[1280px] mx-auto">   
             <div>
                <div class=" flex"> 
                       <div class=""> 
                        <foodEverydayMain :listData="getData" :price="price" />
                         <foodEverydayFooter :listData="getData" />
                         
                       
                        </div> 
                        <div> 
                            <homeSideBar :listData="getData" />
                        </div> 
                
                     
                       
                </div>
                
            </div>
                <h1> XIn chàofefefefee </h1>
                <h1> Giá sản phẩm là : {{ price }}</h1>
                </div>
            </div>

    </template>


    <script setup>
        import { useRoute } from 'vue-router';
        import { computed, onMounted, ref, watch } from 'vue';
        import useFoodEveryDay from '@/hooks/use-food-every-day/use-food-every-day';
        import foodEverydayFooter from './components/food-everyday-footer.vue';
        import homeSideBar from '@/components/home-side-bar.vue';
        import foodEverydayMain from './components/food-everyday-main.vue';
        const router = useRoute();
        const endpoint = computed(() => router.params.endpoint);
        const id = computed(() => router.params.id);
        const price  =  computed(() => router.params.price);
        
        const url = computed(() =>  `/data-detail/data-detail-food-everyday/${endpoint.value}.json`);

  
    
        const {data} = useFoodEveryDay(url);

    const getData = computed(() => {
            if(Array.isArray(data.value) && data.value.length >  0 ){
                const findCourse = data.value.find((course) => course.id == id.value);
                return findCourse;
            }
    })
     onMounted(() => {
            if(getData){
                console.log(getData);
            }
     })

        watch(endpoint,  (newEndpoint) => {
                console.log("giá trị endpoint đã thay đổi " + newEndpoint);
        })
    

    </script>