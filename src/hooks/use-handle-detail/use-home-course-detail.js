import { onMounted, ref } from "vue";
import axiosClient from "../../api/axios-client";

const HomeCourseDetail = (endpoint) => {
    const listData = ref([]);
    const handleGetData = async() => {
        try {
            const data = await axiosClient.get(`/data-detail/data-courser/${endpoint}.json`);
          
            if(data){
                  listData.value = data
            }
        }catch (error) {
            console.log("lỗi lấy dữ liệu " + error)
        }
    }
    onMounted(() => {
        handleGetData();
    })
    return { listData }
}


export default HomeCourseDetail;