const SYSTEM_INFO = uni.getSystemInfoSync();
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 0;
export const getMenuButtonGap = () => {
  // #ifdef MP
  const { top } = uni.getMenuButtonBoundingClientRect();
  return top - getStatusBarHeight();
  // #endif
  // #ifndef MP
  return 8;
  // #endif
}
export const getMenuButtonHeight = () => {
  // #ifdef MP
  const { top, height } = uni.getMenuButtonBoundingClientRect();
  const gap = top - getStatusBarHeight();
  return gap * 2 + height;
  // #endif
  // #ifndef MP
  return 40;
  // #endif
}