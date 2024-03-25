"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "common-section",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a3618ca1"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/components/common-section/common-section.vue"]]);
wx.createComponent(Component);
