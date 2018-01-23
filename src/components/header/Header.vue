<template>
  <Menu class="el-menu-demo menu" :default-active="activeIndex" @select="handleSelect" mode="horizontal" router>
    <MenuItem v-for="item in nav" :index="item.id.toString()" :key="item.id" :route="{path:item.path}">
      {{item.name}}
    </MenuItem>
  </Menu>
</template>

<script>
import { Menu, MenuItem } from "element-ui";
import { nav } from "../../data";

export default {
  name: "Header",
  data() {
    return {
      message: "Welcome to my project!",
      msg: "@HandsomeHan",
      nav,
      activeIndex: "1"
    };
  },
  components: {
    Menu,
    MenuItem
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    }
  }
};
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
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
