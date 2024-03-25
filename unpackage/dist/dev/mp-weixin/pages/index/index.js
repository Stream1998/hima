"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_section2 = common_vendor.resolveComponent("common-section");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_section2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_section = () => "../../components/common-section/common-section.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_section + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goClassify = () => {
      common_vendor.index.switchTab({
        url: "/pages/classify/classify"
      });
    };
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/classify/detail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "壁纸"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        f: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        g: common_vendor.p({
          type: "right",
          size: "20"
        }),
        h: common_vendor.p({
          type: "calendar",
          size: "20"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "dd号"
        }),
        j: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        k: common_assets._imports_3,
        l: common_vendor.p({
          title: "每日推荐"
        }),
        m: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(toDetail, item),
            c: "1cf27b2a-7-" + i0 + ",1cf27b2a-6"
          };
        }),
        n: common_vendor.o(goClassify),
        o: common_vendor.p({
          status: false
        }),
        p: common_vendor.p({
          title: "专题精选"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
