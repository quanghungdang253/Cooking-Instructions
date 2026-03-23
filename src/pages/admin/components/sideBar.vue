

<!-- src/components/Sidebar.vue -->
<template>
  <aside class="w-64 bg-gray-900 text-white p-5">
    <!-- Header với logo -->
    <div class="flex items-center mb-5">
      <img src="https://img.freepik.com/premium-vector/technology-concept-vector-illustration-featuring-consulting-design-flat-style-elements_1226483-4088.jpg?semt=ais_hybrid&w=740&q=80" alt="Logo" class="w-14 h-14 mr-3 object-cover rounded-[5px]" />
      <h1 class="text-xl font-bold">Admin</h1>
    </div>

    <ul>
      <li class="mb-3">
        <button @click="$emit('change-view', 'dashboard')" :class="activeClass('dashboard')">Bảng Điều Khiển</button>
      </li>
      <li class="mb-3">
        <button @click="$emit('change-view', 'users')" :class="activeClass('users')">Quản lý học viên</button>
      </li>
      <li class="mb-3">
        <button @click="$emit('change-view', 'products')" :class="activeClass('products')">Quản lý khóa học </button>
      </li>
        <li class="mb-3">
        <button @click="$emit('change-view', 'account')" :class="activeClass('account')">Danh sách tài khoản </button>
      </li>
      
      <li class="mb-3">
        <button @click="$emit('change-view', 'settings')" :class="activeClass('settings')">Cài Đặt</button>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(

    { currentView: String }
  
  
)

const activeClass = (view) => props.currentView === view ? 'text-black font-bold bg-yellow-500' : 'hover:text-gray-300'
</script>

<style scoped>
            button { width: 100%; text-align: left; padding: 0.5rem; }
</style>