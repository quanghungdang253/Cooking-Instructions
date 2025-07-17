

<template>
    <div>
        <div class="text-center">
            <h1 class="text-3xl font-mono font-bold text-red-950"> Lý do nên học ở đầu bếp Cooking </h1>
            <p class="text-xl">  Đáp ứng đầy đủ nhu cầu theo tiêu chuẩn quốc tế.</p>
        </div>
        <div class="flex items-center gap-10">
            <div class="flex flex-col items-center max-w-[20em]">
                <HandRaisedIcon class="w-20 h-20" />
                <h1 class=" text-red-950 text-2xl text-center"> Cơ sở vật chất hiện đại, khang trang</h1>
                <p  class="text-center">
                    Cơ sở vật chất và trang thiết bị: hiện đại theo tiêu chuẩn Châu Âu.
                </p>
                  <StarIcon class="w-20 h-20 text-yellow-400" />
                  <h1 class=" text-red-950 text-2xl text-center">Đội ngũ Giảng viên</h1>
                  <p  class="text-center">Là những Chuyên gia Ấm thực, Bếp trưởng nhiều năm kinh nghiệm đang làm việc tại các Nhà hàng, Khách sạn lớn trong cả nước.</p>
            </div>
            <div>
                    <img :src="img" alt="" class="max-w-[555px] h-[475px] object-contain transition-transform duration-300 hover:scale-110" >
            </div>
            <div class="flex flex-col items-center">
                  <StarIcon class="w-20 h-20 text-yellow-400" />
                  <h1  class=" text-red-950 text-2xl text-center"> Lớp học không quá đông và chất lượng </h1>
                  <p class="text-center"> Lớp học chỉ tối đa 19 Học viên/lớp để đảm bảo chất lượng. </p>
                    <ChartBarIcon class="w-20 h-20 "/>
                    <h3 class=" text-red-950 text-2xl text-center"> Khóa học đa dạng </h3>
                    <p  class="text-center">
                        Có rất nhiều khóa học theo món được mở lớp liên tục, đa dạng các món ăn yêu thích nhất. Hãy …
                    </p>
            </div>
        </div>
    </div>

</template>


<script setup>
    import { HandRaisedIcon, StarIcon, ChartBarIcon } from '@heroicons/vue/24/solid';
    import img from '../../assets/image/chup-san-pham.jpg';
</script>