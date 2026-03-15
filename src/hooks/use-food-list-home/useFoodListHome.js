import axiosClient from "@/api/axios-client";

import { ref, watch, onMounted } from "vue";


export default function useFoodListHome() {
     const data = ref({});

     const handleData = async() => {
            try {
                 const getData = await axiosClient(`http://127.0.0.1:8000/api/foods/listfood`);
                 if(getData) {
                    data.value = getData.data;
                 }
            }

            catch(error) {
                console.log("Lỗi khi lấy dữ liệu " + error);
            }



     }

     onMounted(() => {
        handleData();
     })

     return {data}
}