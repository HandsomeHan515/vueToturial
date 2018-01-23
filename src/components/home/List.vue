<template>
  <div>
    <Tabs>
      <TabPane :label="item.name" :key="item.id" v-for="item in homeLists">
        <list-content :message="item" />
      </TabPane>
    </Tabs>
    <div class="task">
      <div class="task-left">
        <div class="task-left-button" @click="handleClickShow">{{isDispaly ? '收起' : '展开'}}</div>
        <div class="task-left-content">
          <h2 class="task-title">三角函数</h2>
          <p class="task-description">三角函数的介绍</p>
        </div>
      </div>
      <div class="task-right">
          <Button size="small">发布</Button>
          <Button size="small">学情</Button>
      </div>
    </div>
    <div v-if="isDispaly" class="task-content">123</div>
  </div>
</template>

<script>
import { Tabs, TabPane, Button } from "element-ui";
import ListContent from "./ListContent";
import { homeLists } from "../../data";

export default {
  name: "List",
  data() {
    return {
      homeLists,
      isDispaly: false
    };
  },
  components: {
    Tabs,
    Button,
    TabPane,
    ListContent
  },
  methods: {
    handleClickShow() {
      this.isDispaly = !this.isDispaly;
    }
  }
};
</script>

<style>
.task {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  background-color: #f2f2f2;
  width: 90%;
  margin: 0 auto;
}
.task-left {
  display: flex;
  flex-direction: row;
}
.task-left-button {
  height: 60px;
  width: 45px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  background-color: yellowgreen;
  font-size: 12px;
  color: #fff;
  text-shadow: none;
  cursor: pointer;
}
.task-left-button::selection {
  background: transparent;
}
.task-left-content {
  height: 60px;
  display: inline-block;
  margin-left: 20px;
}
.task-title {
  font-size: 16px;
  line-height: 35px;
  margin: 0;
}
.task-description {
  font-size: 12px;
  line-height: 25px;
  margin: 0;
}
.task-right {
  margin-right: 66px;
}
.task-content {
  height: 300px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid yellowgreen;
  border-top: 3px solid yellowgreen;
  text-align: center;
  box-sizing: border-box;
}
</style>
