<template>
  <div class="list-tab-pane">
    <div class="list-header-button" @click="handleClickShow">
      <span>+ 添加{{title}} 填写完信息，再点击保存，即可在当前列表下创建一个新的{{title}}</span>
      <span>{{isDisplay ? '展开' : '收起'}}</span>
    </div>
    <div v-if="isDisplay" class="show-content">
        <p>
          <span class="show-content-title">{{title}}标题：</span>
          <input class="show-content-input" type="text" :placeholder="`请输入${title}标题`">
        </p>
        <p>
          <span class="show-content-title">{{title}}描述：</span>
          <input class="show-content-input" type="text" :placeholder="`请输入${title}标题`">
        </p>
        <div class="list-content-button" @click="handleClickShowDialog">+ 添加单元（单元包含视频、文件、网页、练习、涂鸦</div>
        <div class="show-bottom-button">
          <Button type="primary" size="small">保存</Button>
          <Button type="warning" size="small">取消</Button>
        </div>
        <p class="list-content-hr"></p>
    </div>
    <Dialog width="80%" :model="false" :show-close="false" :modal-append-to-body="false"  :visible.sync="isDialog" :before-close="handleClickCloseDialog">
      <Tabs type="card">
        <TabPane label="新建添加">
          <div class="dialog-tab-pane-content">1234</div>
        </TabPane>
        <TabPane label="选取添加">
          <div class="dialog-tab-pane-content">5678</div>
        </TabPane>
      </Tabs>
      <div class="show-bottom-button">
        <Button type="primary" size="small">保存</Button>
        <Button type="warning" size="small" @click="handleClickCancelDialog">取消</Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { Button, Dialog, Tabs, TabPane } from "element-ui";
export default {
  name: "ListContent",
  props: ["message"],
  data() {
    return {
      isDisplay: true,
      isDialog: false,
      title: this.message.name.split("", 2).join("")
    };
  },
  components: {
    Button,
    Dialog,
    Tabs,
    TabPane
  },
  methods: {
    handleClickShow() {
      this.isDisplay = !this.isDisplay;
    },
    handleClickShowDialog() {
      this.isDialog = true;
    },
    handleClickCloseDialog(done) {
      done();
    },
    handleClickCancelDialog() {
      this.isDialog = false;
    }
  }
};
</script>

<style>
.list-tab-pane {
  height: 100%;
  padding-bottom: 20px;
}
.list-header-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  background-color: #ccc;
  padding: 0 10px;
  cursor: pointer;
  text-shadow: none;
}
.show-content {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  line-height: 30px;
}
.show-content-title {
  font-size: 14px;
  color: #333;
  width: 15%;
}
.show-content-input {
  border: none;
  outline: 0;
  width: 85%;
}
.show-content-input::-webkit-input-placeholder {
  color: #ccc;
}
.show-content-input::-moz-placeholder {
  color: #ccc;
}
.show-content-input:-ms-input-placeholder {
  color: #ccc;
}
.list-content-button {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  border: 1px dashed #ccc;
  font-size: 14px;
  text-shadow: none;
}
.show-bottom-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 10px 0 0;
}
.list-content-hr {
  border-bottom: 1px solid #f2f2f2;
}
.dialog-tab-pane-content {
  height: 300px;
}
</style>
