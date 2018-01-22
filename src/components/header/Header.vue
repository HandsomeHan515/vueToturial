<template>
  <div>
    <ul>
      <li :key="item.id" v-for="item in nav">
        <router-link class="link" :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { nav } from '../../data'

export default {
  name: 'Header',
  data () {
    return {
      message: 'Welcome to my project!',
      msg: '@HandsomeHan',
      nav
    }
  }
}
</script>

<style>
  .title {
    color: red;
    text-align: left;
  }
  .content {
    color: #333;
    font-size: 24px;
    text-align: left;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
