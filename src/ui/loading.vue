<template>
    
<div  class="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
  <div v-for="n in 10" :key="n" class="animate-pulse flex flex-col gap-3 bg-slate-300 rounded-xl p-4 shadow-2xl">
    <div class="w-full h-32 bg-white rounded shadow-2xl"></div>
    <div class="h-4 bg-slate-300 rowhite/4 shadow-slate-900"></div>
    <div class="h-4 bg-white rounded w-1/2 shadow-2xl"></div>
  </div>
</div>

</template>