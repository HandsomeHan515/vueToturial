<template>
  <div>
    <Ad />
    <button @click="changeMsg">修改数据</button>
    <p>gettersMsg数据目前是: {{ gettersMsg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Ad from './Ad'
export default {
  name: 'Home',
  components: { Ad },
  computed: {...mapGetters(['gettersMsg'])},
  methods: {...mapActions(['changeMsg'])}
}
</script>
