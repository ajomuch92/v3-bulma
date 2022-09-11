<template>
  <span class="tag" :class="innerClass">
    <slot />
  </span>
</template>

<script>
import { size } from '../utils/sizes';
import { color } from '../utils/colors';

export default {
  name: 'V3Tag',
  props: {
    size,
    color,
    light: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const innerClass = computed(() => {
      const classes = [];
      if (props.color) classes.push(`is-${props.color}`);
      if (props.size) classes.push(`is-${props.size}`);
      if (props.light) classes.push('is-light');
      return classes;
    });

    return {
      innerClass,
    }
  }
}
</script>

<style>

</style>