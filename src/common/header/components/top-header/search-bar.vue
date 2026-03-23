<template>
  <div class="relative w-full max-w-[50em]">

   
    <div class="flex">
      <input 
        type="text"
        v-model="query"
        @keyup.enter="handleSearch"
        placeholder="Vui lòng nhập từ khóa cần tìm"
        class="min-w-[50em] border-spacing-1 p-2 outline rounded-md mr-2"
      />

      <div 
        class="bg-orange-800 flex items-center justify-center p-2 cursor-pointer"
        @click="handleSearch"
      >  
        <MagnifyingGlassIcon class="w-6 text-white" />
      </div>
    </div>

    <ul
      v-if="suggestions && suggestions.length"
      class="absolute z-[9999] bg-white border w-full mt-1 rounded shadow max-h-60 overflow-y-auto"
    >
      <li
        v-for="item in suggestions"
        :key="item.id"
        class="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
        @click="goToDetail(item.id)"
      >
        <img :src="item.img" class="w-12 h-12 object-cover rounded" />

        <div>
          <p class="font-semibold" v-html="highlight(item.name)"></p>
          <p class="text-sm text-red-500">{{ formatPrice(item.price) }}</p>
        </div>

      </li>
    </ul>

    <!-- Không có kết quả -->
    <div v-if="showNoResult" class="mt-3 text-gray-500 bg-white p-2 absolute z-30 w-full">
      Không có kết quả
    </div>

  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const API = "http://127.0.0.1:8000/api/client/search"

const router = useRouter()

const query = ref("")
const suggestions = ref([])
const showNoResult = ref(false)

let debounceTimer = null

/* ================= AUTO SUGGEST ================= */

watch(query,(newValue)=>{

  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(async ()=>{

    if(!newValue){
      suggestions.value = []
      showNoResult.value = false
      return
    }

    try{

      const res = await fetch(
        `${API}/suggest?q=${encodeURIComponent(newValue)}`
      )

      const data = await res.json()

      suggestions.value = data

      showNoResult.value = false

    }catch(err){

      console.error("Search error:",err)

    }

  },300)

})


/* ================= SEARCH BUTTON / ENTER ================= */

async function handleSearch(){

  if(!query.value) return

  try{

    const res = await fetch(
      `${API}/suggest?q=${encodeURIComponent(query.value)}`
    )

    const data = await res.json()

    if(data.length){

      // nếu có kết quả → mở chi tiết kết quả đầu tiên
      goToDetail(data[0].id)

    }else{

      suggestions.value = []
      showNoResult.value = true

    }

  }catch(err){

    console.error(err)

  }

}


/* ================= ROUTE DETAIL ================= */

function goToDetail(id){

  router.push({
    name:"food-everyday-detail",
    params:{ id }
  })

  query.value = ""
  suggestions.value = []
  showNoResult.value = false

}



function formatPrice(price){

  if(!price) return "0 đ"

        const number = Number(price.toString().replace(/\./g,''))

  return new Intl.NumberFormat("vi-VN").format(number) + " đ"

}



function highlight(text){

  if(!query.value) return text

  const re = new RegExp(`(${query.value})`,"gi")

  return text.replace(re,'<span class="bg-yellow-200">$1</span>')

}

</script>

<style scoped>

ul::-webkit-scrollbar {
  width: 6px;
}

ul::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}

</style>