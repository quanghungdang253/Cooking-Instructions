import axiosClient from "../../api/axios-client";
import { onMounted, ref, watch } from "vue";

const useCourseHome = (url) => {
    let data = ref([]);
    const fetchData = async() => {
    try {
            const getData = await  axiosClient.get(url);
            if(getData){
                    data.value = getData;
            }
    }catch (error) {
            console.log("lỗi lấy dữ liệu " + error);
    }
}
       
onMounted(() => {
        fetchData();
})

watch(url , () => {
        fetchData();
})

 
return {data};
}

export default useCourseHome;