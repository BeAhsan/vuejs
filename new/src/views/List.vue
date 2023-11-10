<template>
  <h1>List</h1>

  <div v-for="item in info" :key="item.id">
    <label for="">{{ item.name }}</label>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: [],
    };
  },

  mounted() {
    const Itemsdata = async () => {
      await axios
        .get("http://localhost/api/items.php")
        .then((response) => (this.info = response.data));
    };
    Itemsdata();
  },
};
</script>
