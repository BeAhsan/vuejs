<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="bg-slate-400 p-2">
      <nav>
        <RouterLink style="padding: 20px" :to="{ name: 'login' }"
          >Login</RouterLink
        >
        <RouterLink style="padding: 20px" :to="{ name: 'register' }"
          >Register</RouterLink
        >
        <RouterLink style="padding: 20px" :to="{ name: 'list' }"
          >List</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>
