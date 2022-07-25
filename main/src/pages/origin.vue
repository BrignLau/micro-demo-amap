<template>
  <div>
    <micro-app
      name="appname-origin"
      :url="url"
      :data="microAppData"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<script>
import config from "../config";

export default {
  name: "vue2",
  data() {
    return {
      url: `${config.origin}/origin/`,
      microAppData: { msg: "来自基座的数据" },
    };
  },
  methods: {
    handleCreate() {
      console.log("origin 创建了");
    },

    handleBeforeMount() {
      console.log("origin 即将被渲染");
    },

    handleMount() {
      console.log("origin 已经渲染完成");

      setTimeout(() => {
        this.microAppData = { msg: "来自基座的新数据" };
      }, 2000);
    },

    handleUnmount() {
      console.log("origin 卸载了");
    },

    handleError() {
      console.log("origin 加载出错了");
    },

    handleDataChange(e) {
      console.log("来自子应用 origin 的数据:", e.detail.data);
    },
  },
};
</script>

<style></style>
