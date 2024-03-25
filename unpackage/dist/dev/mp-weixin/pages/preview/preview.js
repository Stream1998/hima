"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_popup_wrapper2 = common_vendor.resolveComponent("popup-wrapper");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_tag2 + _easycom_popup_wrapper2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_popup_wrapper = () => "../../components/popup-wrapper/popup-wrapper.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_tag + _easycom_popup_wrapper + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const showMask = common_vendor.ref(false);
    const current = common_vendor.ref(1);
    const rate = common_vendor.ref(5);
    const selfRate = common_vendor.ref(5);
    const infoPopup = common_vendor.ref(null);
    const ratePopup = common_vendor.ref(null);
    const labels = common_vendor.ref(["张婧仪", "女神"]);
    const toggleMask = () => {
      showMask.value = !showMask.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const changeCurrent = (e) => {
      current.value = e.detail.current;
    };
    const showInfoPopup = () => {
      infoPopup.value.open();
    };
    const showRatePopup = () => {
      ratePopup.value.open();
    };
    const confirmRate = () => {
      rate.value = selfRate.value;
      ratePopup.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: common_vendor.o(toggleMask, item),
            b: item
          };
        }),
        b: common_assets._imports_0$2,
        c: current.value,
        d: common_vendor.o(changeCurrent),
        e: common_vendor.p({
          type: "left",
          size: "30",
          color: "#fff"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.unref(utils_system.getMenuButtonHeight)() + "px",
        h: common_vendor.unref(utils_system.getMenuButtonHeight)() + "px",
        i: common_vendor.o(goBack),
        j: common_vendor.t(current.value),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        m: common_vendor.p({
          type: "info",
          size: "30"
        }),
        n: common_vendor.o(showInfoPopup),
        o: common_vendor.p({
          type: "star",
          size: "30"
        }),
        p: common_vendor.t(rate.value),
        q: common_vendor.o(showRatePopup),
        r: common_vendor.p({
          type: "download",
          size: "30"
        }),
        s: showMask.value,
        t: common_vendor.o(toggleMask),
        v: common_vendor.o(($event) => rate.value = $event),
        w: common_vendor.p({
          readonly: true,
          allowHalf: true,
          touchable: false,
          size: "16",
          modelValue: rate.value
        }),
        x: common_vendor.t(rate.value),
        y: common_vendor.f(labels.value, (item, index, i0) => {
          return {
            a: index,
            b: "2dad6c07-9-" + i0 + ",2dad6c07-7",
            c: common_vendor.p({
              text: item,
              circle: true,
              inverted: true,
              ["custom-style"]: "border-color: #27b48d;color: #27b48d;"
            })
          };
        }),
        z: common_vendor.o(($event) => infoPopup.value.close()),
        A: common_vendor.p({
          type: "bottom",
          title: "壁纸信息"
        }),
        B: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        C: common_vendor.p({
          type: "bottom"
        }),
        D: common_vendor.o(($event) => selfRate.value = $event),
        E: common_vendor.p({
          allowHalf: true,
          size: "32",
          modelValue: selfRate.value
        }),
        F: common_vendor.t(selfRate.value),
        G: common_vendor.o(confirmRate),
        H: common_vendor.o(($event) => ratePopup.value.close()),
        I: common_vendor.p({
          type: "center",
          title: "评分"
        }),
        J: common_vendor.sr(ratePopup, "2dad6c07-10", {
          "k": "ratePopup"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "D:/G-workspace/002-code/HBuilderProjects/hima/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
