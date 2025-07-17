


<template>

            <div class="flex">
                         <Input 
                              placeholder="Vui lòng nhập từ khóa cần tìm " 
                              class="min-w-[50em]"
                         />
                    <div class="bg-orange-800 flex items-center justify-center p-2 cursor-pointer">  
                        <MagnifyingGlassIcon 
                            class="w-6 text-white"    
                         />
                    </div>
            </div>
</template>

<script setup>
        import Input from '../../../../ui/input.vue';
        import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>