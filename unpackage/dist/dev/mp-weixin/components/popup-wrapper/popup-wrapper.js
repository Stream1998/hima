"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "popup-wrapper",
  props: {
    type: {
      type: String,
      validate(value) {
        return ["center", "bottom", "left", "top", "right"].includes(value) ? value : "center";
      },
      default: "center"
    },
    title: {
      type: String,
      default: "标题"
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const radiusMap = {
      "center": { "border-radius": "20rpx" },
      "bottom": { "border-radius": "20rpx 20rpx 0 0" },
      "top": { "border-radius": "0" },
      "left": { "border-radius": "0" },
      "right": { "border-radius": "0" }
    };
    const borderRadiusStyle = common_vendor.computed(() => radiusMap[props.type]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.o(($event) => emit("close")),
        c: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        d: common_vendor.s(common_vendor.unref(borderRadiusStyle))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0e222432"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/components/popup-wrapper/popup-wrapper.vue"]]);
wx.createComponent(Component);
