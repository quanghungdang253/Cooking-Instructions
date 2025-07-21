
<template>
    <div>
       
        <div v-if="data">
            <div>
                <h1> {{ data.fullname }} </h1>
                <img src="https://daubepgiadinh.vn/wp-content/uploads/2021/05/heading-line.png" alt="">
            </div>
        </div>

    </div>


</template>

<script setup>
        const props = defineProps({
            data: {
                type: Object,
                required: true
            }
        })

</script>