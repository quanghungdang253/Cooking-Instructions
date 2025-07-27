


<template>
  <div class="h-[80vh] bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
    <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center text-gray-700 mb-6">
        Đăng nhập 
      </h2>

      <form class="space-y-5">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-600 mb-1">
            Tên đăng nhập
          </label>
          <input
             v-model="nameLogin"
            id="username"
            type="text"
            placeholder="Nhập tên đăng nhập"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600 mb-1">
            Mật khẩu
          </label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Nhập mật khẩu"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-xl transition duration-200"
            @click="handleLogin"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
        import { ref } from 'vue';

        const nameLogin = ref(null);
        const password = ref(null);

        const handleLogin = () => {
                if(nameLogin.value == "hung" && password.value == "123"){
                        window.open(
               `https://quanghung.kesug.com/admin.html`,
             '_blank',
    
             );
                }else if(nameLogin.value == null || password == null){
                    alert("tên , mật khẩu k được để trống")
                }
        }
</script>
