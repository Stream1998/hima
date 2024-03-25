"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
const getMenuButtonGap = () => {
  const { top } = common_vendor.index.getMenuButtonBoundingClientRect();
  return top - getStatusBarHeight();
};
const getMenuButtonHeight = () => {
  const { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
  const gap = top - getStatusBarHeight();
  return gap * 2 + height;
};
exports.getMenuButtonGap = getMenuButtonGap;
exports.getMenuButtonHeight = getMenuButtonHeight;
exports.getStatusBarHeight = getStatusBarHeight;
