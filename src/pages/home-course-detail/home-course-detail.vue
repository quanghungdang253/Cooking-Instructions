

        <template>
           <div class="shadow ">  
                <div class="max-w-[1280px] mx-auto ">
                    <div class="flex items-start shadow-2xl p-6">   
                        <div class=" shadow-2xl p-4">   
                             <HomeCourseMain v-if="selectedItem"    :listData="selectedItem" />
                                <hr>
                             <homeCourseFooter :listData="selectedItem" />
                        </div>
                        <div>
                                <homeSideBar :listData="selectedItem"/>
                        </div>
                    </div>
                   
                </div>
                <div>
                
                </div>
                 <div class="max-w-[1280px] mx-auto ">
                        <listCourse 
                            nameUrl="/data/data-courser/family-cooking.json"
                            title="KHÓA HỌC LIÊN QUAN "
                        />
                         <div class="my-6">  
                        <Title content="CHƯƠNG TRÌNH HỌC "/>
                 </div>
                        <studyProgram />
                </div>
           </div>

        </template>


        <script setup>
                import { useRoute } from 'vue-router';
                import { computed ,onMounted,ref,watch} from 'vue';
                import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
                import homeCourseFooter from './components/home-course-footer.vue';
                import homeSideBar from '../../components/home-side-bar.vue';
                import studyProgram from '../family-cooking-course/components/study-program.vue';
                import listCourse from '../home/components/main-content/list-course.vue';
                import Table from '../../ui/table.vue';
                import Title from '@/ui/title.vue';
                const route = useRoute();
        
        import HomeCourseMain from './components/home-course-main.vue';
        const endpoint = computed(() => route.params.endpoint);
       const id = computed(() => Number(route.params.id));

       onMounted(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
       })
                const {listData} = HomeCourseDetail(endpoint);
       
                const selectedItem = computed(() => {
                          return Array.isArray(listData.value)
          ? listData.value.find((item) => item.id === id.value) || null
    : null;
                
                
        }
        );

        

        

        </script>
