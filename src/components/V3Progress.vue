<template>
  <progress class="progress" :class="innerClass" :value="value" :max="max" ></progress>
</template>

<script>
import { size } from '../utils/sizes';
import { color } from '../utils/colors';
import { computed } from '@vue/reactivity';

export default {
  name: 'V3Progress',
  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    max: {
      type: [String, Number],
      default: 100,
    },
    min: {
      type: [String, Number],
      default: 100,
    },
    size,
    color,
  },
  setup(props) {
    const innerClass = computed(() => {
      const classes = [];
      if (props.color) classes.push(`is-${props.color}`);
      if (props.size) classes.push(`is-${props.size}`);
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