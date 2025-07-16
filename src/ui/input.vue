

<script setup>
        const props = defineProps({
                 placeholderName: String,
                 handleCall: Function,
                 types: String
        });
</script>


<template>
        <input :type={types} :placeholder="placeholderName" class="p-2 border border-black" >
</template>