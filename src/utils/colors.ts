import { Prop } from '@vue/runtime-core';

export const color: Prop<string> = {
  type: String,
  default: '',
  validator: (val: string) => ['', 'white', 'light', 'black', 'dark', 'text', 'ghost', 'primary', 'link', 'info', 'success', 'warning', 'danger'].includes(val)
};

export const type: Prop<string> = {
  type: String,
  default: '',
  validator: (val: string) => ['', 'info', 'success', 'warning', 'danger'].includes(val)
};