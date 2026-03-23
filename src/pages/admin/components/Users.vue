<!-- src/components/Users.vue -->
<template>
  <!-- Danh sách -->
  <div v-if="!logicBox">
    <h2 class="text-2xl font-bold mb-5">Quản lý học viên</h2>

    <table class="w-full bg-white rounded-xl shadow overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-4 py-3">ID</th>
          <th class="border px-4 py-3">Tên</th>
          <th class="border px-4 py-3">Tuổi</th>
          <th class="border px-4 py-3">Email</th>
          <th class="border px-4 py-3">Thanh toán</th>
          <th class="border px-4 py-3">Hành động</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in orders"
          :key="user.id"
          class="text-center hover:bg-gray-50 transition"
        >
          <td class="border px-4 py-3">{{ user.id }}</td>
          <td class="border px-4 py-3 font-semibold">{{ user.name }}</td>
          <td class="border px-4 py-3">{{ user.age }}</td>
          <td class="border px-4 py-3">{{ user.email }}</td>
          <td class="border px-4 py-3">{{ user.payment_method }}</td>

          <td class="border px-4 py-3">
            <button
              class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              @click="handleDetail(user.id)"
            >
              Xem chi tiết
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Chi tiết -->
  <div v-else class="p-6 bg-gray-100 min-h-screen">

    <h1 class="text-2xl font-bold mb-6">Thông tin học viên</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Thông tin cá nhân -->
      <div class="bg-white p-5 rounded-xl shadow col-span-1">

        <h3 class="text-lg font-bold mb-4 border-b pb-2">
          Thông tin cá nhân
        </h3>

        <div class="space-y-2 text-gray-700">
          <p><b>ID:</b> {{ getData.id }}</p>
          <p><b>Tên:</b> {{ getData.name }}</p>
          <p><b>Tuổi:</b> {{ getData.age }}</p>
          <p><b>Email:</b> {{ getData.email }}</p>
          <p><b>Giới tính:</b> {{ getData.gender }}</p>
          <p><b>Địa chỉ:</b> {{ getData.address }}</p>
          <p><b>Thanh toán:</b> {{ getData.payment_method }}</p>
        </div>

        <div class="mt-4">
          <b>Ghi chú:</b>
          <textarea
            class="w-full mt-2 border rounded p-2 bg-gray-50"
            rows="3"
            readonly
          >
{{ getData.note }}
          </textarea>
        </div>
      </div>

      <!-- Khóa học đã mua -->
      <div class="bg-white p-5 rounded-xl shadow md:col-span-2">

        <h3 class="text-lg font-bold mb-4 border-b pb-2">
          Khóa học đã mua
        </h3>

        <div
          v-for="item in getData.items"
          :key="item.id"
          class="flex gap-4 mb-4 border rounded-lg p-3 hover:shadow"
        >

          <img
            :src="item.image"
            class="w-32 h-24 object-cover rounded"
          />

          <div class="flex flex-col justify-between">

            <p class="font-semibold text-lg">
              {{ item.product_name }}
            </p>

            <p class="text-gray-600">
              Giá: <b>{{ item.price }} VNĐ</b>
            </p>

            <p class="text-gray-600">
              Thanh toán: {{ getData.payment_method }}
            </p>

          </div>
        </div>

      </div>
    </div>

    <!-- Button -->
    <button
      class="mt-6 bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-700"
      @click="logicBox = false"
    >
      Quay lại
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const logicBox = ref(false)
const getData = ref(null)

const props = defineProps({
  orders: {
    type: Array,
    required: true
  }
})

function handleDetail(id) {
  const user = props.orders.find(item => item.id === id)

  if (user) {
    getData.value = user
    logicBox.value = true
  }
}

watch(getData, (val) => {
  if (val) {
    console.log("dữ liệu:", val.name)
  }
})
</script>