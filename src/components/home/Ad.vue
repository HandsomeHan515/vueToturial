<template>
    <Carousel height="500px" type="card">
      <CarouselItem :key="item.id" v-for="item in gettersAds">
        <img class="carousel-img" :src="item.image" />
      </CarouselItem>
    </Carousel>
</template>

<script>
import { mapGetters } from 'vuex'
import { Carousel, CarouselItem } from 'element-ui'

export default {
  name: 'All',
  created () {
    this.$store.dispatch('getAds')
  },
  components: { Carousel, CarouselItem },
  computed: {...mapGetters(['gettersAds'])}
}
</script>

<style lang="css">
.carousel-img {
  height: 100%;
  width: 100%;
}

</style>
