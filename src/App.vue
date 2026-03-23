




<template>
    <div class="min-h-screen flex flex-col"> 

    <div class="fixed top-0 w-full z-50 bg-white">
          <Header />
    </div>
    
         <main class="flex-1 mt-12">
                  <router-view/>

         </main>
          
        

  
    <div class="fixed bottom-0 left-0">
            <iconPhone />
    </div>
    <div class="fixed right-0 bottom-0">
            <iconContact />
    </div>
    
        <Footer />
    
      </div>
 
 
</template> 


<script setup>
    import Header from './common/header/header.vue';
    import Footer from './common/footer/footer.vue';
    import iconPhone from './ui/icon-phone.vue';
    import iconContact from './ui/icon-contact.vue';
</script>
