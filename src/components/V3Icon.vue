<template>
  <span class="icon">
    <i :class="`${pack}-${type} fa-${iconName} ${innerClass}`"></i>
  </span>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { size } from '../utils/sizes';
import { color } from '../utils/colors';

export default {
  name: 'V3Icon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (val: string) => ['regular', 'solid'].includes(val),
    },
    pack: {
      type: String,
      default: 'fa'
    },
    size,
    color,
  },
  setup(props: any) {
    const innerClass = computed(() => {
      let classIn = '';
      if (props.size) classIn += ` is-${props.size} `;
      if (props.color) classIn += ` is-${props.color} `;
      return classIn.trim();
    });

    return {
      innerClass,
    };
  }
}
</script>

<style>

</style>