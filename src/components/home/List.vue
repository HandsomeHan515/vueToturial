<template>
  <Tabs>
    <TabPane :label="item.name" :key="item.id" v-for="item in homeLists">
      <list-content :message="item" />
    </TabPane>
  </Tabs>
</template>

<script>
import { Tabs, TabPane } from "element-ui";
import ListContent from "./ListContent";
import { homeLists } from "../../data";

export default {
  name: "List",
  data() {
    return {
      homeLists
    };
  },
  components: {
    Tabs,
    TabPane,
    ListContent
  }
};
</script>

<style>

</style>
