"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const commonConfig = {
      color: "#27b48d",
      size: "22"
    };
    const downloadIcon = common_vendor.ref({
      ...commonConfig,
      type: "download-filled"
    });
    const rateIcon = common_vendor.ref({
      ...commonConfig,
      type: "star-filled"
    });
    const contactIcon = common_vendor.ref({
      ...commonConfig,
      type: "chatboxes-filled"
    });
    const updateIcon = common_vendor.ref({
      ...commonConfig,
      type: "notification-filled"
    });
    const questionIcon = common_vendor.ref({
      ...commonConfig,
      type: "flag-filled"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["show-extra-icon"]: true,
          ["extra-icon"]: downloadIcon.value,
          link: true,
          title: "我的下载",
          rightText: "0"
        }),
        b: common_vendor.p({
          ["show-extra-icon"]: true,
          ["extra-icon"]: rateIcon.value,
          link: true,
          title: "我的评分",
          rightText: "0"
        }),
        c: common_vendor.p({
          ["show-extra-icon"]: true,
          ["extra-icon"]: contactIcon.value,
          link: true,
          title: "联系客服"
        }),
        d: common_vendor.p({
          ["show-extra-icon"]: true,
          ["extra-icon"]: updateIcon.value,
          link: true,
          title: "订阅更新"
        }),
        e: common_vendor.p({
          ["show-extra-icon"]: true,
          ["extra-icon"]: questionIcon.value,
          link: true,
          title: "常见问题"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + common_vendor.unref(utils_system.getMenuButtonHeight)() + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
