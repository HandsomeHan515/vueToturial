<template>
  <div class="home-container">
    <div class="home-list">
      <List />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import List from "./List";

export default {
  name: "Home",
  components: {
    List
  }
};
</script>

<style lang="css">
.home-container {
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  height: 1000px;
}
.home-list {
  padding: 0 20px 20px 20px;
  background-color: #fff;
}
</style>