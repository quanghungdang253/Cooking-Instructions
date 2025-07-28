<template>
    <div>      
        <section>
                    <div class="grid grid-cols-4 gap-4 text-sm">
                        <router-link 
                            :to="{name:'healthy-food-detail', params: {
                                    endpoint: item.endpoint,
                                    id: item.id
                            }}"
                            v-for="(item,index) in getData.listFood
                             "
                            class="
                            max-w-[20em]
                           bg-white 
                            font-mono
                            text-center
                            shadow-xl
                            
                            "   
                        >
                           <div class="mb-10 h-[180px]">  
                                <img 
                                    :src="item.img" 
                                    alt="" 
                                     class="
                                     w-[100%]
                                     
                                     ">
                                <p class="p-4 font-bold"> {{ item.name }} </p>
                           </div>
                                <p class="p-2 font-sans"> {{ item.content  }} </p>
                     
                        </router-link>
                    </div>
            </section>
    </div>
</template>


<script setup>
    
    const props = defineProps({
        getData: {
            type: Object,
            required: true
        }
    })

</script>