
import axiosClient from "../../api/axios-client";
import { ref, computed, watch, onMounted } from "vue";


const useFoodEveryDay = (url) => {
const data = ref({});
    const handleData = async() => {
        try {
              const getData = await axiosClient(url.value);
              if(getData){
                     data.value = getData;
              } 
        }
       catch(error) {   
                console.log("lỗi khi lấy dữ liệu " + error);
        } 
    }
    onMounted(() => {
            handleData();
    })
    watch(url , () => {
         handleData();
    })
  
    return {data};

}

export default useFoodEveryDay;