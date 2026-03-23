<template>
  <div class="max-w-3xl mx-auto mt-20 p-6 bg-white shadow rounded-lg max-h-full">
    <h1 class="text-2xl font-bold mb-6 text-center">Tra cứu khóa học theo số điện thoại</h1>

    <!-- Input số điện thoại -->
    <div class="flex gap-2 mb-4">
      <input
        v-model="phone"
        type="text"
        placeholder="Nhập số điện thoại"
        class="flex-1 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        @click="searchOrder"
        class="bg-orange-500 text-white px-4 py-3 rounded hover:bg-orange-600 transition"
      >
        Tra cứu
      </button>
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="text-center text-gray-500">Đang tải...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <!-- Thông tin học viên -->
    <div v-if="order" class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Thông tin học viên</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <p><strong>Họ tên:</strong> {{ order.name }}</p>
        <p><strong>Tuổi:</strong> {{ order.age }}</p>
        <p><strong>Email:</strong> {{ order.email }}</p>
        <p><strong>Điện thoại:</strong> {{ order.phone }}</p>
        <p><strong>Địa chỉ:</strong> {{ order.address }}</p>
        <p><strong>Ghi chú:</strong> {{ order.note }}</p>
        <p><strong>Phương thức thanh toán:</strong> {{ order.payment_method }}</p>
        <p><strong>Tổng tiền:</strong> {{ order.total_price.toLocaleString() }} VNĐ</p>
      </div>

      <!-- Danh sách khóa học -->
   

<h2 class="text-xl font-semibold mb-2">Khóa học đã đăng ký</h2>

<div v-if="order.items.length" class="space-y-3">

  <div
    v-for="item in order.items"
    :key="item.id"
    class="border rounded overflow-hidden"
  >

    <!-- Header -->
    <div
      @click="toggleDetail(item.id)"
      class="p-3 cursor-pointer flex justify-between items-center hover:bg-orange-50 transition"
    >

      <div class="flex items-center gap-3">

        <!-- ảnh -->
        <img
          :src="item.image"
          class="w-16 h-16 object-cover rounded"
        />

        <!-- thông tin -->
        <div>
          <p class="font-semibold">{{ item.product_name }}</p>
          <p class="text-sm text-gray-500">
            {{ item.price.toLocaleString() }} VNĐ
          </p>
        </div>

      </div>

      <span class="text-orange-500 text-lg">
        {{ expandedId === item.id ? 'Ẩn' : 'Xem chi tiết' }}
      </span>

    </div>

    <!-- Chi tiết -->
    <div v-if="expandedId === item.id" class="p-4 border-t bg-gray-50 space-y-2">

      <p>
        <strong>Giá:</strong>
        {{ item.price.toLocaleString() }} VNĐ
      </p>

      <p>
        <strong>Số lượng:</strong>
        {{ item.quantity }}
      </p>

      <p>
        <strong>Tổng tiền:</strong>
        {{ (item.price * item.quantity).toLocaleString() }} VNĐ
      </p>

      <p>
        <strong>Ngày đăng ký:</strong>
        {{ new Date(item.created_at).toLocaleDateString('vi-VN') }}
      </p>

    </div>

  </div>

</div>

      <div v-else class="text-gray-500">Chưa có khóa học nào.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')
const order = ref(null)
const loading = ref(false)
const error = ref('')
const expandedId = ref(null) // khóa học đang mở chi tiết

// toggle hiển thị chi tiết
const toggleDetail = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

// Fetch API
const searchOrder = async () => {
  if (!phone.value) {
    error.value = 'Vui lòng nhập số điện thoại'
    return
  }

  loading.value = true
  order.value = null
  error.value = ''
  expandedId.value = null

  try {
    const response = await fetch(`http://localhost:8000/api/order?phone=${encodeURIComponent(phone.value)}`)
    
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || 'Lỗi tra cứu')
    }

    const data = await response.json()
    order.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Hover nhẹ cho header khóa học */
</style>