
<script setup>
 
function say(params) {
  alert(params)
}
</script>



<template>
    <div class="flex flex-col items-center">
    <div>
     <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</div>
  <div class="flex flex-row m-2 space-x-4 w-full">
 
    <button  class="p-2 w-1/2 bg-gray-400" @click="say('hello')">Login</button>
    <button class="p-2 w-1/2 bg-slate-200">Register</button>

  </div>
</div>
</template>

