import axiosClient from "../../api/axios-client";
import { onMounted, ref, watch } from "vue";

const useCourseHome = (url) => {
        console.log(url);
    let data = ref([]);
    const fetchData = async() => {
    try {
            const getData = await  axiosClient.get(url.value);
            if(getData){
                    data.value = getData;
            }
    }catch (error) {
                   console.log("lỗi lấy dữ liệu " + error);
    }
}
       

watch(url,fetchData,
          { immediate: true }
);
return {data , fetchData};
}

export default useCourseHome;