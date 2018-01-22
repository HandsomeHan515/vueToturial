<template>
  <div>
    <button @click="getAds">获取ads</button>
    <button @click="addAd(payload)">添加</button>
    <ul>
      <li :key="item.id" v-for="(item, index) in gettersAds">
        <div>{{item.title}}</div>
        <input v-model="item.title" />
        <img class="img" :src="item.image" />
        <button @click="updateAd({id: item.id, title: item.title})">更新Title</button>
        <button @click="delAd(item)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { image } from '@/service'
export default {
  name: 'All',
  data () {
    return {
      payload: {
        title: '广告',
        image: image
      }
    }
  },
  computed: {...mapGetters(['gettersAds'])},
  methods: {...mapActions(['getAds', 'updateAd', 'delAd', 'addAd'])}
}
</script>

<style lang="css">
.img {
  height: 150px;
  width: 300px;
  display: block;
  margin-top: 15px;
}
p {
  height: 30px;
  line-height: 30px;
}
</style>
