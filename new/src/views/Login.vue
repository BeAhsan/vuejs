<script setup>
function test(params) {
  alert(params);
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="m-4 text-xl">Login</h1>

    <form
      action=""
      class="flex flex-col items-center m-12 bg-gray-300 p-10 w-1/2"
    >
      <div class="flex flex-col">
        <label for="email">Login</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="flex flex-col">
        <label for="password">password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button class="bg-green-400 p-2 m-2" type="button" @click="test('login')">
        Login
      </button>
    </form>
  </div>
</template>
