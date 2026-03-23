<!-- src/components/Products.vue -->
<template>

<!-- LIST -->
<div v-if="mode === 'list'" class="mt-20">

<div class="flex justify-between mb-5">
<h2 class="text-2xl font-bold">Quản lý món ăn</h2>

<button
class="bg-green-500 text-white px-4 py-2 rounded"
@click="openAdd"
>
Thêm món
</button>
</div>

<table class="w-full bg-white rounded shadow">

<thead class="bg-gray-100">
<tr>
<th class="border px-4 py-2">Ảnh</th>
<th class="border px-4 py-2">Tên</th>
<th class="border px-4 py-2">Giá</th>
<th class="border px-4 py-2">Hành động</th>
</tr>
</thead>

<tbody>

<tr
v-for="product in products"
:key="product.id"
class="text-center hover:bg-gray-50"
>

<td class="border px-4 py-2">
<img
:src="product.img"
class="w-20 h-20 object-cover mx-auto"
/>
</td>

<td class="border px-4 py-2 font-semibold">
{{ product.name }}
</td>

<td class="border px-4 py-2 text-red-500 font-bold">
{{ formatPrice(product.price) }}
</td>

<td class="border px-4 py-2 space-x-2">

<button
class="bg-blue-500 text-white px-3 py-1 rounded"
@click="showDetail(product.id)"
>
Chi tiết
</button>

<button
class="bg-yellow-500 text-white px-3 py-1 rounded"
@click="editProduct(product)"
>
Sửa
</button>

<button
class="bg-red-500 text-white px-3 py-1 rounded"
@click="deleteProduct(product.id)"
>
Xóa
</button>

</td>

</tr>

</tbody>

</table>




<div class="flex justify-center mt-6 gap-2">

<button
class="px-3 py-1 bg-gray-200 rounded"
@click="changePage(currentPage-1)"
:disabled="currentPage === 1"
>
Prev
</button>

<button
v-for="page in lastPage"
:key="page"
@click="changePage(page)"
class="px-3 py-1 rounded"
:class="page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'"
>
{{ page }}
</button>

<button
class="px-3 py-1 bg-gray-200 rounded"
@click="changePage(currentPage+1)"
:disabled="currentPage === lastPage"
>
Next
</button>

</div>

</div>


<!-- DETAIL -->


<div v-if="mode === 'detail'" class="mt-20 max-w-5xl mx-auto">

<!-- Back -->
<button
class="mb-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
@click="mode='list'"
>
← Quay lại
</button>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Ảnh -->
<div>
<img
:src="currentProduct.img"
class="w-full rounded-xl shadow"
/>
</div>

<!-- Thông tin -->
<div class="space-y-3">

<h2 class="text-3xl font-bold">
{{ currentProduct.name }}
</h2>

<p class="text-red-500 text-2xl font-bold">
{{ formatPrice(currentProduct.price) }}
</p>

<div class="text-gray-600">
<p><b>Phân Loại:</b> {{ currentProduct.endpoint }}</p>
<p><b>Danh mục:</b> {{ currentProduct.type }}</p>
<p><b>Hình thức học:</b> {{ currentProduct.form_of_learning }}</p>
</div>

<div v-if="currentProduct.description">

<p class="font-semibold mt-3">Giới thiệu khóa học</p>
<p class="text-gray-700">
{{ currentProduct.description.course_intro }}
</p>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="bg-green-50 p-3 rounded">
<p class="font-semibold">Workshop </p>
<p class="text-green-600 font-bold">
{{ formatPrice(currentProduct.description.workshop_price) }}
</p>
</div>

<div class="bg-blue-50 p-3 rounded">
<p class="font-semibold">Thực hành</p>
<p class="text-blue-600 font-bold">
{{ formatPrice(currentProduct.description.practice_price) }}
</p>
</div>

</div>

</div>

</div>

</div>

<!-- Course description -->
<div
v-if="currentProduct.description?.course_description"
class="mt-10 bg-white p-6 rounded shadow"
>

<h3 class="text-xl font-bold mb-3">
Mô tả khóa học
</h3>

<p class="text-gray-700 leading-relaxed">
{{ currentProduct.description.course_description }}
</p>

</div>

<!-- Steps -->
<div v-if="currentProduct.steps?.length" class="mt-10">

<h3 class="text-xl font-bold mb-4">
Các bước nấu ăn
</h3>

<div
v-for="step in currentProduct.steps"
:key="step.step_number"
class="bg-white p-5 rounded shadow mb-4"
>

<h4 class="text-lg font-semibold mb-2">
 {{ step.name_step }}
</h4>

<img
v-if="step.img"
:src="step.img"
class="w-60 rounded mb-3"
/>

<ul class="list-disc ml-5 text-gray-700">
<li
v-for="item in step.items"
:key="item.id"
>
{{ item.content }}
</li>
</ul>

</div>

</div>

</div>






<!-- FORM ADD / EDIT -->
<!-- FORM ADD / EDIT -->
<div v-if="mode === 'form'" class="mt-20">

  <h2 class="text-xl font-bold mb-4">
    {{ editMode ? 'Cập nhật món' : 'Thêm món mới' }}
  </h2>

  <div class="flex flex-col gap-3 w-full max-w-2xl">

    <!-- Thông tin chính -->
    <input v-model="form.name" placeholder="Tên món" class="border p-2"/>
   
<!-- Link ảnh -->
<input 
v-model="form.img" 
placeholder="Link ảnh (hoặc upload bên dưới)" 
class="border p-2"
/>

<!-- Upload ảnh -->
<input 
type="file" 
@change="handleImageUpload"
class="border p-2"
/>

<!-- Preview -->
<img 
v-if="imagePreview" 
:src="imagePreview" 
class="w-40 mt-2 rounded shadow"
/>

    <input v-model="form.price" placeholder="Giá" class="border p-2" type="number"/>

    <select v-model="form.endpoint" class="border p-2">
  <option disabled value="">Chọn loại khóa học</option>
  <option value="food-everyday">food-everyday - Món ăn hằng ngày</option>
  <option value="family-cooking">family-cooking - Nấu ăn gia đình</option>
</select>

    <input v-model="form.type" placeholder="Type" class="border p-2"/>
    <input v-model="form.slug" placeholder="Slug" class="border p-2"/>
    <input v-model="form.form_of_learning" placeholder="Form of Learning" class="border p-2"/>

    <!-- Description -->
    <h3 class="font-semibold mt-3">Mô tả khóa học</h3>
    <input v-model="form.description.img" placeholder="Link ảnh mô tả" class="border p-2"/>
    <textarea v-model="form.description.content1" placeholder="Content 1" class="border p-2"></textarea>
    <textarea v-model="form.description.content2" placeholder="Content 2" class="border p-2"></textarea>
    <input v-model="form.description.figcaption" placeholder="Figcaption" class="border p-2"/>
    <textarea v-model="form.description.course_intro" placeholder="Course Intro" class="border p-2"></textarea>
    <input v-model="form.description.workshop_price" placeholder="Workshop Price" class="border p-2" type="number"/>
    <input v-model="form.description.practice_price" placeholder="Practice Price" class="border p-2" type="number"/>
    <textarea v-model="form.description.course_description" placeholder="Course Description" class="border p-2"></textarea>

    <!-- Steps -->
    <h3 class="font-semibold mt-3">Các bước nấu ăn</h3>
    <div v-for="(step, index) in form.steps" :key="index" class="border p-3 rounded mb-2">
      <input v-model="step.step_number" placeholder="Step Number" type="number" class="border p-1 w-24"/>
      <input v-model="step.name_step" placeholder="Tên bước" class="border p-1"/>
      <input v-model="step.img" placeholder="Link ảnh bước" class="border p-1"/>
      
      <h4 class="mt-2 font-semibold">Các mục bước</h4>
      <div v-for="(item, idx) in step.items" :key="idx" class="flex gap-2 mb-1">
        <input v-model="item.content" placeholder="Nội dung mục" class="border p-1 flex-1"/>
        <button type="button" @click="removeStepItem(index, idx)" class="bg-red-500 text-white px-2 rounded">Xóa</button>
      </div>
      <button type="button" @click="addStepItem(index)" class="bg-green-500 text-white px-2 rounded mt-1">Thêm mục</button>

      <button type="button" @click="removeStep(index)" class="bg-red-500 text-white px-2 rounded mt-2">Xóa bước</button>
    </div>
    <button type="button" @click="addStep" class="bg-blue-500 text-white px-3 py-1 rounded">Thêm bước mới</button>

    <!-- Buttons -->
    <div class="space-x-2 mt-3">
      <button class="bg-green-500 text-white px-4 py-2 rounded" @click="saveProduct">Lưu</button>
      <button class="bg-gray-500 text-white px-4 py-2 rounded" @click="mode='list'">Hủy</button>
    </div>

  </div>
</div>





</template>




<script setup>

import { ref, onMounted } from 'vue'

const API = "http://127.0.0.1:8000/api/products"

// state
const products = ref([])
const mode = ref('list')
const currentProduct = ref(null)
const editMode = ref(false)

const imageFile = ref(null)
const imagePreview = ref(null)


const currentPage = ref(1)
const lastPage = ref(1)



// form
const form = ref({
  id: null,
  name: '',
  img: '',
  price: 0,
  endpoint: '',
  type: '',
  slug: '',
  form_of_learning: '',
  description: {
    img: '',
    content1: '',
    content2: '',
    figcaption: '',
    course_intro: '',
    workshop_price: 0,
    practice_price: 0,
    course_description: ''
  },
  steps: []
})



onMounted(() => {
  fetchProducts(1)
})

// ================= FETCH PRODUCTS =================



async function fetchProducts(page = 1) {

  try{

    const res = await fetch(`${API}?page=${page}`)
    const data = await res.json()

    products.value = data.data
    currentPage.value = data.current_page
    lastPage.value = data.last_page

  }catch(err){
    console.error(err)
  }

}





// ================= DETAIL =================

function showDetail(id) {

  const product = products.value.find(p => p.id === id)

  if(product){
    currentProduct.value = product
    mode.value = 'detail'
  }

}


// ================= OPEN ADD =================

function openAdd(){

  editMode.value = false

  imageFile.value = null
  imagePreview.value = null

  form.value = {
    id:null,
    name:'',
    img:'',
    price:0,
    endpoint:'',
    type:'',
    slug:'',
    form_of_learning:'',
    description:{
      img:'',
      content1:'',
      content2:'',
      figcaption:'',
      course_intro:'',
      workshop_price:0,
      practice_price:0,
      course_description:''
    },
    steps:[]
  }

  mode.value = 'form'

}


// ================= EDIT PRODUCT =================

function editProduct(product){

  editMode.value = true

  form.value = JSON.parse(JSON.stringify(product))

  // tránh lỗi description null
  if(!form.value.description){
    form.value.description = {
      img:'',
      content1:'',
      content2:'',
      figcaption:'',
      course_intro:'',
      workshop_price:0,
      practice_price:0,
      course_description:''
    }
  }

  imagePreview.value = form.value.img

  mode.value = 'form'

}


// ================= IMAGE UPLOAD =================

function handleImageUpload(event){

  const file = event.target.files[0]

  if(!file) return

  imageFile.value = file

  imagePreview.value = URL.createObjectURL(file)

}


// ================= SAVE PRODUCT =================

async function saveProduct(){

  try{

    const formData = new FormData()

    formData.append('name', form.value.name)
    formData.append('price', form.value.price)
    formData.append('endpoint', form.value.endpoint)
    formData.append('type', form.value.type)
    formData.append('slug', form.value.slug)
    formData.append('form_of_learning', form.value.form_of_learning)

    if(imageFile.value){
      formData.append('img', imageFile.value)
    }else{
      formData.append('img', form.value.img)
    }

    if(editMode.value){

      formData.append('_method','PUT')

      await fetch(`${API}/${form.value.id}`,{
        method:'POST',
        body:formData
      })

    }else{

      await fetch(API,{
        method:'POST',
        body:formData
      })

    }

    mode.value = 'list'

    fetchProducts()

  }catch(err){

    console.error(err)

  }

}


// ================= DELETE =================

async function deleteProduct(id){

  if(!confirm("Bạn có chắc muốn xóa?")) return

  try{

    await fetch(`${API}/${id}`,{
      method:'DELETE'
    })

    fetchProducts()

  }catch(err){

    console.error(err)

  }

}


// ================= FORMAT PRICE =================

function formatPrice(price){

  if(!price) return "0 đ"

  const number = Number(price.toString().replace(/\./g,''))

  return new Intl.NumberFormat('vi-VN').format(number) + ' đ'

}


// ================= STEP =================

function addStep(){

  form.value.steps.push({
    step_number: form.value.steps.length + 1,
    name_step:'',
    img:'',
    items:[]
  })

}

function removeStep(index){

  form.value.steps.splice(index,1)

}

function addStepItem(stepIndex){

  form.value.steps[stepIndex].items.push({
    content:''
  })

}

function removeStepItem(stepIndex,itemIndex){

  form.value.steps[stepIndex].items.splice(itemIndex,1)

}



function changePage(page){

  if(page < 1 || page > lastPage.value) return

  currentPage.value = page
  fetchProducts(page)

}

</script>