

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
                </div>
           </div>

        </template>


        <script setup>
                import { useRoute } from 'vue-router';
                import { computed ,ref,watch} from 'vue';
                import HomeCourseDetail from '../../hooks/use-handle-detail/use-home-course-detail';
                import homeCourseFooter from './components/home-course-footer.vue';
                import homeSideBar from './components/home-side-bar.vue';
                import listCourse from '../home/components/main-content/list-course.vue';
                import Table from '../../ui/table.vue';
                const route = useRoute();
        
        import HomeCourseMain from './components/home-course-main.vue';
        const endpoint = computed(() => route.params.endpoint);
       const id = computed(() => Number(route.params.id));

        
                const {listData} = HomeCourseDetail(endpoint);
       
                const selectedItem = computed(() => {
                          return Array.isArray(listData.value)
    ? listData.value.find((item) => item.id === id.value) || null
    : null;
                
                
        }

  

        );

        

        

        </script>
        <!-- <template>
  <div class="shadow">
    <div class="max-w-[1280px] mx-auto flex items-start shadow-2xl p-6">
      <div>
        <HomeCourseMain v-if="selectedItem" :listData="selectedItem" />
        <hr />
        <homeCourseFooter :listData="selectedItem" />
      </div>
      <div>
        <homeSideBar :listData="selectedItem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import HomeCourseDetail from "../../hooks/use-handle-detail/use-home-course-detail";
import homeCourseFooter from "./components/home-course-footer.vue";
import homeSideBar from "./components/home-side-bar.vue";
import HomeCourseMain from "./components/home-course-main.vue";

const route = useRoute();
const endpoint = computed(() => route.params.endpoint);
const id = computed(() => Number(route.params.id));

const { listData } = HomeCourseDetail(endpoint);

// Tìm item theo id
const selectedItem = computed(() => {
  return Array.isArray(listData.value)
    ? listData.value.find((item) => item.id === id.value) || null
    : null;
});
</script> -->
