

        <template>
            <loading v-if="!boxData" />
           <div class=" shadow  bg-no-repeat w-full min-h-screen bg-white">  
                <div class="max-w-[1280px] mx-auto ">
                    <div class="flex items-start justify-around mt-40">   
                        <div class=" shadow-2xl p-4">   
                             <HomeCourseMain v-if="boxData" :listData="boxData.data.food" />
                               
                             <homeCourseFooter v-if="boxData" :listData="boxData.data.food" />
                        </div>
                        <div class="ml-10">
                             <homeSideBar 
                                title="KHÓA HỌC LIÊN QUAN"
                                :listData="data"
                             />
                        </div>
                      
                    </div>
                   
                </div>
                <div>

                </div>
                



                 <div class="max-w-[1280px] mx-auto ">
                        <!-- <listCourse 
                            nameUrl=""
                            title="KHÓA HỌC LIÊN QUAN"
                            
                        /> -->
                         <div class="my-6">  
                        <Title content="CHƯƠNG TRÌNH HỌC "/>
                 </div>
                        <studyProgram />
                </div>
           </div>

        </template>


        <script setup>
   
                import useFoodListHomeDetail from '@/hooks/use-food-list-home/useFoodListHomeDetail';
                import useFoodListHome from '@/hooks/use-food-list-home/useFoodListHome';
                import { useRoute } from 'vue-router';
                import { computed ,onMounted,ref,watch} from 'vue';
                import homeCourseFooter from './components/home-course-footer.vue';
                import loading from '@/ui/loading.vue';
                    
                import homeSideBar from '../../components/home-side-bar.vue';
                import studyProgram from '../family-cooking-course/components/study-program.vue';
                import listCourse from '../home/components/main-content/list-course.vue';
                import Table from '../../ui/table.vue';
                import Title from '@/ui/title.vue';
                const route = useRoute();
        
        import HomeCourseMain from './components/home-course-main.vue';

 
  

       const id = computed(() => route.params.id);

       onMounted(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
       })

                
                const { boxData } = useFoodListHomeDetail(id);

                const { data } = useFoodListHome();


           
                watch(data, (val) => {
                  


                     
});


        

        </script>
