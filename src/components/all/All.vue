<template>
  <div>
    <button @click="getAds">获取ads</button>
    <button @click="addAd(payload)">添加</button>
    
    <ul>
      <li :key="item.id" v-for="item in gettersAds">
        <div>{{item.title}}</div>
        <img class="img" :src="item.image" />
        <input :placeholder="info" />
        <button @click="updateAd({id: item.id})">更新Title</button>
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
      info: '请输入内容',
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
}
p {
  height: 30px;
  line-height: 30px;
}
</style>
