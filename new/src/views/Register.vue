<script setup>
function test(params) {
  alert(params);
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Register</h1>

    <form
      action=""
      class="flex flex-col items-center m-12 bg-gray-300 p-10 w-1/2"
    >
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="flex flex-col">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="flex flex-col">
        <label for="c-password">Confirm Password</label>
        <input type="c-password" name="c-password" id="c-password" />
      </div>
      <button class="bg-green-400 p-2 m-2" type="button" @click="test('hello')">
        Register
      </button>
    </form>
  </div>
</template>
