


<script setup>
import { onMounted ,ref, watch} from 'vue';
import useFoodListHome from "../../hooks/use-food-list-home/useFoodListHome.js";
  //=====================================================================
                 import homeRaisingChildren from './components/main-content/home-raising-children.vue';
                import heroBanner from './components/hero-banner/hero-banner.vue';
                import homeCourse from './components/main-content/home-course.vue';
                import listCourse from './components/main-content/list-course.vue';
                import homeReview from './components/main-content/home-review.vue';
                import homeVideo from './components/main-content/home-video.vue';
                import ImageGrid from '@/ui/Image-grid.vue';
                import listTeacher from './components/main-content/list-teacher.vue';
                import studyProgram from '../family-cooking-course/components/study-program.vue';
                import Title from '@/ui/title.vue';
        
                
                import studentFeelings from './components/main-content/student-feelings.vue';
                //=================================data===========================
                import { listImgFacilities, listImgStudents } from './components/data-img/data-img';
                

          
                        const { data } = useFoodListHome();
                        
                           watch(data,(value)=>{
                                          console.log(" Dữ liệu sau khi lấy food: ");
                           })

                                  onMounted(()=>{
                                           window.scrollTo({
                                           top:0,
                                      behavior:"smooth"
                 })
})



</script>

<template>
    <div>   
        <div class="">   
                <heroBanner />
        </div>
        <div>
           
                <div class="max-w-[1280px] mx-auto ">
                         <homeCourse />
                            <listCourse 
                                nameUrl=""
                                title="MÓN NGON MỖI NGÀY "
                                :data="data"  
                                condition_name="food-everyday"
                              
                        />

                        <homeReview />
                       
                         <homeVideo />
                           <listCourse 
                                nameUrl=""
                                title="KHÓA HỌC NẤU ĂN GIA ĐÌNH"
                                :data="data"    
                                condition_name="family-cooking"
                        />
                       
                </div>
                <div>  
                        <ImageGrid :listImg="listImgStudents" title="HÌNH ẢNH THỰC TẾ "/>
                </div>
                <div class="max-w-[1280px] mx-auto">
                          <listTeacher />
                          
                </div>
                  <div >  
                        <ImageGrid :listImg="listImgFacilities" title="HÌNH ẢNH CƠ SỞ VẬT CHẤT" />
                  </div>
                  <div class="max-w-[1280px] mx-auto">
                           <studentFeelings />
                           <homeRaisingChildren
                                nameUrl=""
                                title="NUÔI DẠY TRẺ"
                                :data="data"
                                condition_name="data-raising-childrent"
                          />
                <div class="my-6"> 
                        <Title content="CHƯƠNG TRÌNH ĐÀO TẠO VỚI CÁC ĐẦU BẾP NỔI TIẾNG "/>
                  </div>
                        <studyProgram 
                                 condition_name="study-program";
                        
                        />
                  </div>

                  <div>
                  </div>

        </div>
   </div>
</template>