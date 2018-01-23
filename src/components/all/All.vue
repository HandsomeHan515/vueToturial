<template>
  <div>
    <Button @click="addAd(payload)">添加</Button>
    <ul>
      <li :key="item.id" v-for="item in gettersAds">
        <div>{{item.title}}</div>
        <input v-model="item.title" />
        <img class="img" :src="item.image" />
        <Button @click="updateAd({id: item.id, title: item.title})">更新Title</Button>
        <Button @click="delAd(item)">删除</Button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Button } from 'element-ui'
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
  components: { Button },
  created () {
    this.$store.dispatch('getAds')
  },
  computed: {...mapGetters(['gettersAds'])},
  methods: {...mapActions(['updateAd', 'delAd', 'addAd'])}
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
