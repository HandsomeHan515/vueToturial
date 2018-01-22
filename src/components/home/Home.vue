<template>
  <div>
    <button @click="changeMsg">修改数据</button>
    <p>gettersMsg数据目前是: {{ gettersMsg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  computed: {...mapGetters(['gettersMsg'])},
  methods: {...mapActions(['changeMsg'])}
}
</script>
