

<template>
    <div class="flex items-center justify-between mt-4">
        <div>
            <img :src="imgCourses" alt="học-cách-nấu-ăn">
        </div>
        <div class="max-w-[40em]">
                <h1 class="
                    text-[35px]
                  text-yellow-700
                    font-bold
                   
                "> KHÓA HỌC BẾP GIA ĐÌNH </h1>
                <p class="text-[1.15rem] leading-8"> Khóa học nấu ăn gia đình giúp bạn tự tin trổ tài nấu nướng chỉ trong 3 buổi học. Dành tặng cho người thân, gia đình bạn bè những món ăn thơm ngon, đậm đà.</p>
                <router-link 
                    class="
                        bg-orange-700 
                          px-4 py-2 mt-10 
                          inline-block
                         text-white
                         font-bold
                    "
                    >
                   XEM THÊM > 
              </router-link>
        </div>
    </div>

</template>

<script setup>
        import imgCourses from '../../assets/image/homeCourse.jpg';

</script>