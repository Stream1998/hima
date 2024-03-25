"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  },
  setup(__props) {
    const navbarHeight = common_vendor.computed(() => utils_system.getStatusBarHeight() + utils_system.getMenuButtonHeight());
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(navbarHeight) + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          size: "20"
        }),
        d: common_vendor.unref(utils_system.getMenuButtonHeight)() - 2 * common_vendor.unref(utils_system.getMenuButtonGap)() + "px",
        e: common_vendor.unref(navbarHeight) + "px",
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getMenuButtonGap)() + "px"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/components/custom-nav-bar/custom-nav-bar.vue"]]);
wx.createComponent(Component);