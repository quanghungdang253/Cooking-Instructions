        <template>
                <div v-if="findProduct" class="h-[1000px] mt-40">
                   <div class="max-w-[1280px] mx-auto flex justify-between gap-4"> 
                      <div class="flex flex-col items-center max-w-[70%] shadow-2xl p-4">  
                         <h1 class="text-xl font-bold"> {{ findProduct.fullname }} </h1>
                          <img src="https://daubepgiadinh.vn/wp-content/uploads/2021/05/heading-line.png" alt="">
                          <p> {{ findProduct.content }}  </p>
                          <img :src="findProduct.img1" alt="">
                      </div>
                      <div class="h-[100vh] overflow-auto shadow-2xl flex flex-col items-center">
                            <sideBar :listData="findProduct" />
                            <homeSideBar :listData="findProduct" />
                      </div>
                    </div>
                </div>


        </template>

        <script setup>
                import { ref,computed, watch } from 'vue';
                import HomeCourseDetail from '@/hooks/use-handle-detail/use-home-course-detail';
                import sideBar from '@/components/side-bar.vue';
                import homeSideBar from '@/components/home-side-bar.vue';
                import { useRoute } from 'vue-router';
                
                const router = useRoute();

                const endpoint = computed(() => router.params.endpoint);
                const id = computed(() => router.params.id);

                console.log(endpoint);
                const {listData} = HomeCourseDetail(endpoint);
                console.log(listData);
                const findProduct  = computed(() => {
                if(Array.isArray(listData.value) && listData.value.length > 0){
                                                const findProduct = listData.value.find((item) => item.id == id.value);
                                        return findProduct;
                }
                console.log(findProduct);
                        })
                watch(findProduct,(newProduct) => {
                console.log(" đã tải dữ liệu xong "+ newProduct);
                });

        </script>