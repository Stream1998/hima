"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const preview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(12, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(preview, item)
          };
        }),
        b: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5b62ebe"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/pages/classify/detail.vue"]]);
wx.createPage(MiniProgramPage);
