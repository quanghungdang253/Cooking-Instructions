<template>
  <div class="bg-white shadow-xl rounded-xl p-6">

    <h2 class="text-2xl font-bold mb-6 text-gray-800">
      User Management
    </h2>

    <div class="overflow-x-auto">

      <table class="w-full text-left border-collapse">

        <thead>
          <tr class="border-b text-gray-600 text-sm uppercase">
            <th class="py-3">User</th>
            <th class="py-3">Email</th>
            <th class="py-3">Role</th>
          </tr>
        </thead>

        <tbody>

          <tr 
            v-for="user in users.data" 
            :key="user.id"
            class="border-b hover:bg-gray-50 transition"
          >

            
            <td class="py-4 flex items-center gap-3">

              <img 
                :src="user.avatar" 
                class="w-10 h-10 rounded-full object-cover border"
              >

              <span class="font-semibold text-gray-800">
                {{ user.name }}
              </span>

            </td>

        
            <td class="py-4 text-gray-600">
              {{ user.email }}
            </td>

        
            <td class="py-4">

              <span
                class="px-3 py-1 text-sm rounded-full font-medium"
                :class="user.role === 'admin'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-green-100 text-green-600'"
              >
                {{ user.role }}
              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  users: {
    type: Object,
    required: true
  }
})
</script>