


<template>
  <div class="h-[80vh] bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
    <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6">
        Đăng nhập
      </h2>

      <!-- Form login thường -->
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-1">Tên đăng nhập</label>
          <input v-model="nameLogin" type="text" placeholder="Nhập tên đăng nhập"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"/>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 mb-1">Mật khẩu</label>
          <input v-model="password" type="password" placeholder="Nhập mật khẩu"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"/>
        </div>

        <div class="text-center">
          <button @click="handleLogin" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl transition duration-200">
            Đăng nhập
          </button>
        </div>
      </div>

      <hr class="my-4"/>

      <!-- Login Google -->
      <div class="text-center">
        <button @click="handleGoogleLogin"
          class="flex items-center justify-center gap-3 w-full px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png" 
               alt="Google Logo" class="w-6 h-6"/>
          <span class="font-semibold text-gray-800">Đăng nhập với Google</span>
        </button>
      </div>


      <div class="text-center mt-4">
          <span class="text-gray-600">Người dùng chưa có tài khoản có thể </span>
            <button 
                @click="goRegister"
                class="ml-1 text-blue-500 font-semibold hover:underline">
            đăng ký tại đây
  </button>
</div>

      <!-- Hiển thị user info khi login -->
     


      <div v-if="user" class="mt-6 flex justify-center relative">

  <!-- User info -->
  <div 
    class="flex items-center gap-2 cursor-pointer"
  @click.stop="toggleMenu"
  >
    <img
      :src="user.avatar"
      class="w-12 h-12 rounded-full border"
    />

    <span class="font-semibold text-gray-700">
      {{ user.name }}
    </span>
  </div>

  <!-- Dropdown -->
 <div
  v-if="showMenu"
  class="absolute top-14 z-50 bg-white shadow-lg rounded-lg w-40 p-2"
>
    <button
      @click="logout"
      class="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500"
    >
      Đăng xuất
    </button>
  </div>

</div>


    </div>
  </div>
</template>

<script setup>



import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/hooks/useInfoUser'

const { user, setUser, clearUser } = useUser()
const router = useRouter()


const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const nameLogin = ref('')
const password = ref('')
// user ref local chỉ dùng tạm, dữ liệu chính lưu vào composable
// const user = ref(null)  <-- không cần nữa, dùng setUser

// ---------------- Login thường ----------------
const handleLogin = async () => {
  if(!nameLogin.value || !password.value){
    alert("Tên và mật khẩu không được để trống")
    return;
  }

  try {
    const res = await fetch('http://127.0.0.1:8000/api/auth/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ name:nameLogin.value, password:password.value })
    })
    const data = await res.json();

    if(data.access_token){
      // Lưu token
      localStorage.setItem('token', data.access_token)

      // Lưu user vào composable reactive + localStorage
      setUser(data.user)

      // Redirect theo role
      if(data.user.role === 'admin') router.push('/admin')
      else router.push('/user')

    } else {
      alert(data.message || 'Đăng nhập thất bại')
    }
  } catch(e){
    console.error(e)
    alert('Lỗi kết nối server')
  }
}

// Chuyển sang trang đăng ký
function goRegister() {
    router.push("/register");
}

// ---------------- Login Google ----------------


const handleGoogleLogin = () => {
  const win = window.open(
    'http://127.0.0.1:8000/api/auth/google/redirect',
    'GoogleLogin',
    'width=500,height=600'
  );

  window.addEventListener('message', (event) => {
    // Optional: kiểm tra event.origin nếu cần
    const { user: googleUser, access_token } = event.data;
    if (googleUser && access_token) {
      localStorage.setItem('token', access_token);
      setUser(googleUser);   
      if(googleUser.role === 'admin'){
  router.push('/admin')
}else{
  router.push('/user')
}
    }
    win.close();
  }, { once: true });
};



// ---------------- Logout ----------------
const logout = () => {
  clearUser()
  localStorage.removeItem('token')
  router.push('/login')
}
// ---------------- Khi load trang, check token ----------------
onMounted(async ()=>{
  const token = localStorage.getItem('token')
  if(token){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/auth/me',{
        headers:{ 'Authorization':'Bearer '+token }
      })
      const data = await res.json()
      setUser(data.user) // Lưu vào composable
    } catch(e){
      localStorage.removeItem('token')
      setUser(null)
    }
  }
})

</script>