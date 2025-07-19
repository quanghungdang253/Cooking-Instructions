



<script setup>
    import Header from './common/header/header.vue';
    import Footer from './common/footer/footer.vue';
</script>

<template>
    <div class="relative"> 
    <div class="fixed top-0 w-full z-50 bg-white">
          <Header />
    </div>
    
        <div class="mt-[9em]">
            <router-view/>
        </div>

    <div class="">
        <Footer />
    </div>
      </div>
   
</template> 