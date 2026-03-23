<!-- src/components/Settings.vue -->
<template>
  <div class="mt-20 ">
    <h2 class="text-2xl font-bold mb-5">Settings</h2>
       <button @click="logout" class="bg-red-500 text-white p-4 font-bold"> Đăng Xuất </button>
  </div>
</template>

<script setup>
import { useUser } from '@/hooks/useInfoUser';
     import { useRouter } from 'vue-router';
   const router = useRouter();


const { user, clearUser } = useUser();

const logout = () => {
  clearUser()
  localStorage.removeItem('token')
  router.push('/login')
}
</script>