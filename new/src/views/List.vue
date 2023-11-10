<template>
  <h1>List</h1>

  <div v-for="item in items" :key="item.id">
    <label for="">{{ item.name }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "ahsan", id: 1 },
        { name: "ahsan", id: 2 },
        { name: "ahsan", id: 3 },
      ],
    };
  },
};
</script>
