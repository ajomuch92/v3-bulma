import { Prop } from '@vue/runtime-core';

export const size: Prop<String> = {
  type: String,
  default: '',
  validator: (val: string) => ['', 'small', 'normal', 'medium', 'large'].includes(val)
};