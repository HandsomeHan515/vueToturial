<template>
  <div class="help-container">
    <h1 class="help-title">帮助中心</h1>
    <div class="help-content">
       <Collapse class="help-collapse">
        <CollapseItem class="help-collapse-item" :key="item.id" :title="item.question" v-for="item in helps">
          答：{{item.answer}}
        </CollapseItem>
      </Collapse>
    </div>
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
  height: 1000px;
}
.help-title {
  display: block;
}
.help-content {
  width: 80%;
  padding: 40px 20px;
  background-color: #fff;
}
.help-collapse {
  width: 100%;
  text-align: left;
}
.help-collapse-item {
  padding: 0 20px;
}
</style>