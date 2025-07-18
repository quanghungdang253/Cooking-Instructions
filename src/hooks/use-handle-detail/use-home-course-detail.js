import { onMounted, ref ,watch } from "vue";
import axiosClient from "../../api/axios-client";

const HomeCourseDetail = (endpoint) => {
    const nameFolder = ref("data-courser")
 
    const listData = ref([""]);
    const handleGetData = async() => {
        try {
               let dataCourser = ["family-cooking", "food-everyday"];
    let dataCourserSidebar = ["buyALot", "highlyAppreciated"];
    if(dataCourser.includes(endpoint.value)){
            nameFolder.value = "data-courser";
    }else if(dataCourserSidebar.includes(endpoint.value)){
           nameFolder.value = "data-courser-sidebar";
    }else {
            nameFolder.value = "data-courser";
    }

            const data = await axiosClient.get(`/data-detail/${ nameFolder.value}/${endpoint.value}.json`);
          
            if(data){
                  listData.value = data
            }
        }catch (error) {
            console.log("lỗi lấy dữ liệu " + error)
        }
    }
    // onMounted(() => {
    //     handleGetData();
    // })
      watch(endpoint, handleGetData, { immediate: true });
    return { listData }
}


export default HomeCourseDetail;


// import { ref, watch } from "vue";
// import axiosClient from "../../api/axios-client";

// const HomeCourseDetail = (endpoint) => {
//   const listData = ref([]);
//   const nameFolder = ref("data-courser");

//   const fetchData = async () => {
//     try {
//       const courser = ["family-cooking", "food-everyday"];
//       const sidebar = ["buyALot", "highlyAppreciated"];
//       nameFolder.value = courser.includes(endpoint.value)
//         ? "data-courser"
//         : sidebar.includes(endpoint.value)
//         ? "data-courser-sidebar"
//         : "data-courser";

//       const response = await axiosClient.get(
//         `/data-detail/${nameFolder.value}/${endpoint.value}.json`
//       );
//       listData.value = response;
//     } catch (error) {
//       console.log("Lỗi khi tải dữ liệu:", error);
//     }
//   };

//   watch(endpoint, fetchData, { immediate: true });

//   return { listData };
// };

// export default HomeCourseDetail;
