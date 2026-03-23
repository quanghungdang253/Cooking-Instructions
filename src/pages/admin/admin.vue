<!-- src/components/AdminMain.vue -->
<template>
  <div class="flex h-screen ">
    <Sidebar :currentView="currentView" @change-view="currentView = $event" />
    <main class="flex-1 bg-gray-100 p-5 overflow-auto">
      <Dashboard 
         :users="users"
          :orders="orders"
         :products="products"
        v-if="currentView==='dashboard'" />
      <Users 
         :orders="orders"
         v-if="currentView==='users'" />
      <Products 
          :product="products"
           v-if="currentView==='products'" />
      <Account
          v-if="currentView === 'account'"
          :users="users"
      />
      <Settings v-if="currentView==='settings'" />
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Sidebar from './components/sideBar.vue'
import Dashboard from './components/dashBoard.vue.vue'
import Users from './components/Users.vue'
import Products from './components/product.vue'
import Settings from './components/settings.vue'
import Account from './components/account.vue'
import { useGetData } from './hook/useGetData'


const {users, orders, products, loading, error, fetchData } = useGetData('http://127.0.0.1:8000');


onMounted(() => {
      fetchData();
})


const listUsers = ref(users)

watch(listUsers, (val) => {
    console.log("dữ liệu sau khi nhận được là", val)
})



const currentView = ref('dashboard')
</script>