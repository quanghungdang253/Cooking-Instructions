<template>
  <div class="h-[80vh] flex items-center justify-center">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
      <h2 class="text-2xl font-semibold text-center mb-6">Tạo tài khoản</h2>

      <div class="space-y-5">
        <div>
          <label class="block mb-1">Tên đăng nhập</label>
          <input v-model="name" type="text" placeholder="Nhập tên đăng nhập"
                 class="w-full px-4 py-2 border rounded-xl"/>
        </div>
        <div>
          <label class="block mb-1">Email</label>
          <input v-model="email" type="email" placeholder="Nhập email"
                 class="w-full px-4 py-2 border rounded-xl"/>
        </div>
        <div>
          <label class="block mb-1">Mật khẩu</label>
          <input v-model="password" type="password" placeholder="Nhập mật khẩu"
                 class="w-full px-4 py-2 border rounded-xl"/>
        </div>

        <button @click="handleRegister"
                class="w-full bg-green-500 text-white py-2 rounded-xl">
          Đăng ký
        </button>

        <div class="text-center mt-2">
          <span>Đã có tài khoản?</span>
          <button @click="goLogin" class="ml-2 text-blue-500 font-semibold hover:underline">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

// Gửi thông tin lên server để tạo tài khoản
const handleRegister = async () => {
  if(!name.value || !email.value || !password.value){
    alert("Các trường không được để trống")
    return
  }

  try {
    const res = await fetch('http://127.0.0.1:8000/api/auth/register', {
      method:'POST',
      headers:{
            'Content-Type':'application/json'
      },

      body: JSON.stringify({

        name: name.value,
        email: email.value,
        password: password.value,
        role: 'user'  // mặc định role user

      })
    })

    const data = await res.json()
    if(data.success){
      alert('Đăng ký thành công! Quay về đăng nhập.')
      router.push('/login')
    } else {
             alert(data.message || 'Đăng ký thất bại')
    }

  } catch(e){
            console.error(e)
            alert('Lỗi kết nối server')
  }
}

// Chuyển về login
const goLogin = () => {
  router.push('/login')
}
</script>