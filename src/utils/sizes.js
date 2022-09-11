export const size = {
  type: String,
  default: '',
  validator: (val) => ['', 'small', 'normal', 'medium', 'large'].includes(val)
};