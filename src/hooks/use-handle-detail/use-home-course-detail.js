import { onMounted, ref ,watch } from "vue";
import axiosClient from "../../api/axios-client";
import listEndpoint from '../../common/header/components/navigation-header/components/list-endpoint';
const HomeCourseDetail = (endpoint) => {
    const nameFolder = ref("data-courser")
console.log(endpoint.value);
    const listData = ref([]);
    const handleGetData = async() => {
        try {
          let dataCourser = ["family-cooking", "food-everyday"];
          let dataCourserSidebar = ["buyALot", "highlyAppreciated"];
          let dataStudyProgram = ["data-study-program"];
          let dataTeacher = ["teachers"];
    if(dataCourser.includes(endpoint.value)){
            nameFolder.value = "data-courser";
    }else if(dataCourserSidebar.includes(endpoint.value)){
           nameFolder.value = "data-courser-sidebar";
    }else if(dataStudyProgram.includes(endpoint.value)){
            nameFolder.value = "data-study-program";
    }else if(dataTeacher.includes(endpoint.value)) {
            nameFolder.value = "data-Instructor-information";
    }else if(listEndpoint.includes(endpoint.value)){
            nameFolder.value = "data-detail-food-everyday";
    }
    else {
            nameFolder.value = "data-courser";
    }

            const data = await axiosClient.get(`/data-detail/${nameFolder.value}/${endpoint.value}.json`);
        
           
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
      watch(endpoint, handleGetData, { immediate: true });
    return { listData }
}


export default HomeCourseDetail;

