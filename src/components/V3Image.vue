<template>
  <figure class="image" :class="`is-${ratio}`">
    <img :class="{'is-rounded':rounded}" src="https://bulma.io/images/placeholders/128x128.png">
  </figure>
</template>

<script>
export default {
  name: 'V3Image',
  props: {
    src: {
      type: String,
      required: true,
    },
    ratio: {
      type: String,
      default: 'square',
      validator: (val) => ['16x16', '24x24', '32x32', '48x48', '64x64', '96x96', '128x128', '1by1', 'square', '5by4',
        '4by3', '3by2', '5by3', '16by9', '2by1', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3'].includes(val),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style>

</style>