<template>
  <div class="help-container">
    <h1 class="help-title">帮助中心</h1>
    <Collapse class="help-collapse">
      <CollapseItem class="help-collapse-item" :key="item.id" :title="item.question" v-for="item in helps">
        答：{{item.answer}}
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "element-ui";
import { helps } from "@/data";

export default {
  name: "Help",
  data() {
    return {
      helps
    };
  },
  components: {
    Collapse,
    CollapseItem
  }
};
</script>

<style lang="css">
.help-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.help-title {
  display: block;
}
.help-collapse {
  text-align: left;
  width: 80%;
}
.help-collapse-item {
  padding: 0 20px;
}
</style>