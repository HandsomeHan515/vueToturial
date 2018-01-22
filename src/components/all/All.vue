<template>
  <div>
    <button @click="changeAds">获取ads</button>
    <ul>
      <li :key="item.id" v-for="item in gettersAds">
        <div>{{item.title}}</div>
        <img class="img" v-bind:src="item.image" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'All',
  computed: {...mapGetters(['gettersAds'])},
  methods: {...mapActions(['changeAds'])}
}
</script>

<style lang="css">
.img {
  height: 150px;
  width: 300px;
  display: block;
}
</style>
