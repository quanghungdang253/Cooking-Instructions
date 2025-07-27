import axiosClient from "@/api/axios-client";
import { watch, ref, onMounted } from "vue";

const useHealthyFood = (url) => {
const listData = ref(null);
    const handleGetData = async() => {
        try {
              const data = await axiosClient(url.value);
              if(data){
                    listData.value = data;
              }
        }catch (error){
             console.log("lỗi khi lấy dữ liệu " + error);
        }
          

    }
    onMounted(() => {
         handleGetData();
    })
    watch(url, (newUrl) => {
        handleGetData();
    })
    return {listData, handleGetData}
}


export default useHealthyFood;