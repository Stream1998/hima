"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const recentList = common_vendor.ref(["孟子义", "大海边", "美女", "帅哥", "宠物", "卡通", "刘诗诗", "热巴"]);
    const hotList = common_vendor.ref(["美女", "帅哥", "宠物", "卡通"]);
    const search = (e) => {
      keyword.value = e.value;
      if (!recentList.value.includes(e.value)) {
        recentList.value.unshift(e.value);
      }
      common_vendor.index.navigateTo({
        url: "/pages/classify/detail"
      });
    };
    const clear = () => {
      recentList.value = [];
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.o(($event) => keyword.value = $event),
        c: common_vendor.p({
          modelValue: keyword.value
        }),
        d: common_vendor.o(clear),
        e: common_vendor.p({
          type: "trash",
          size: "30"
        }),
        f: common_vendor.f(recentList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item,
            c: common_vendor.o(($event) => search({
              value: item
            }), item)
          };
        }),
        g: common_vendor.f(hotList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item,
            c: common_vendor.o(($event) => search({
              value: item
            }), item)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
