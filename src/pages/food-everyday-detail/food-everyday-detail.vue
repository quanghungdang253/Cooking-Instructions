<template>
  <div class="h-[3000px] mt-20">
    <div class="max-w-[1280px] mx-auto">

     
      <loading v-if="isLoading" />

      <!-- Nội dung -->
      <div v-else class="flex justify-between gap-4 p-4">
        <div>
          <foodEverydayMain  v-if="food"   :listData="food"  :price="price" />

          <foodEverydayFooter :listData="food" />
        </div>

        <homeSideBar :listData="data" />
      </div>

    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

import useFoodListHomeDetail from '@/hooks/use-food-list-home/useFoodListHomeDetail'
import useFoodListHome from '@/hooks/use-food-list-home/useFoodListHome'

import foodEverydayFooter from './components/food-everyday-footer.vue'
import homeSideBar from '@/components/home-side-bar.vue'
import foodEverydayMain from './components/food-everyday-main.vue'
import loading from '@/ui/loading.vue'

const router = useRoute()

const endpoint = computed(() => router.params.endpoint)
const id = computed(() => router.params.id)
const price = computed(() => router.params.price)

const { boxData } = useFoodListHomeDetail(id)
const { data } = useFoodListHome()

const food = computed(() => boxData.value?.data?.food || null);

console.log(food);

const isLoading = ref(true)

watch(boxData, (val) => {
  if (val) {
    isLoading.value = false
  }
}, { immediate: true })
</script>