



<script setup>
    import Header from './common/header/header.vue';
    import Footer from './common/footer/footer.vue';
    import iconPhone from './ui/icon-phone.vue';
    import iconContact from './ui/icon-contact.vue';
</script>

<template>
    <div class="relative"> 
    <div class="fixed top-0 w-full z-50 bg-white">
          <Header />
    </div>
    
        <div class="mt-[8.5em]">
            <router-view/>
        </div>

  
    <div class="fixed bottom-0 left-0">
            <iconPhone />
    </div>
    <div class="fixed right-0 bottom-0">
            <iconContact />
    </div>
     <div class="">
        <Footer />
    </div>
      </div>
 
 
</template> 