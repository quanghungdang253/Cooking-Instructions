
    <template>

            <button @click="onClicks">  {{ name }}</button>
        
    </template>

    <script setup>
    import { defineProps } from 'vue';
        const props = defineProps({
            name: String,
            onClicks: Function
        });

    </script>


