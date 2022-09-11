export const color = {
  type: String,
  default: '',
  validator: (val) => ['', 'white', 'light', 'black', 'dark', 'text', 'ghost', 'primary', 'link', 'info', 'success', 'warning', 'danger'].includes(val)
};