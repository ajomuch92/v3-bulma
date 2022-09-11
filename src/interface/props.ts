export default interface PropInterface {
  type: Object;
  default: Number | Boolean | String | undefined | Date,
  required?: Boolean;
  validator: (val: any) => Boolean,
}