import axiosClient from "@/api/axios-client";

import { ref, watch, onMounted } from "vue";


export default function useFoodListHomeDetail(id) {
     const boxData = ref(null);

     const handleData = async() => {
      console.log("id nhận được là " + id.value);
            try {
                 const getData = await axiosClient(`http://127.0.0.1:8000/api/foods/listfood/${id.value}`);
                 if(getData) {
                    boxData.value = getData;
                 }

             console.log("API trả về:", getData);
            }

            catch(error) {
                console.log("Lỗi khi lấy dữ liệu " + error);
            }
     }

 watch(id, () => {
      handleData();
}, { immediate: true });

     onMounted(() => {
        handleData();
     })

     return {boxData}
}