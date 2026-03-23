<!-- src/components/Dashboard.vue -->




<template>
  <div v-if="users">
    <h2 class="text-2xl font-bold mb-5">Bảng Điều Khiển</h2>
    <div class="grid grid-cols-3 gap-5">
      <div class="bg-white p-5 rounded shadow">
        <p class="text-gray-500">Tổng số học viên</p>
        <p class="text-xl font-bold">
          
                           {{ users?.data ? users.data.length : 0 }}
         </p>
      </div>
      <div class="bg-white p-5 rounded shadow">
        <p class="text-gray-500">Tổng số khóa học </p>
        <p class="text-xl font-bold">{{ orders.length }}</p>
      </div>
      <div class="bg-white p-5 rounded shadow">
        <p class="text-gray-500">Tổng số sản phẩm </p>
        
        <p class="text-xl font-bold">{{ products.total }}</p>
      </div>
    </div>
    <div class="mt-10 bg-white p-5 rounded shadow">
      <h3 class="text-lg font-bold mb-3">Biểu đồ doanh thu</h3>
      <canvas ref="revenueChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import Chart from 'chart.js/auto'

const totalUsers = ref(120)
const totalOrders = ref(350)
const totalRevenue = ref(24500)
const revenueChart = ref(null)

const props = defineProps({   
    users: {
        type: Array,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    orders: {
        type: Array,
        required: true
    }  
})



onMounted(() => {
  new Chart(revenueChart.value, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Revenue',
        data: [5000, 7000, 6000, 4000, 8500],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4
      }]
    },
    options: { responsive: true }
  })
})
</script>