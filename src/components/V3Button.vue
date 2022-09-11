<template>
  <component v-if="tag!=='input'" :is="tag" class="button" :class="innerClass" @click="clickHandler">
    <slot />
  </component>
  <input v-else class="button" :class="innerClass" :type="nativeType" @click="clickHandler" />
</template>

<script  lang="ts">
import { SetupContext } from 'vue';
import { computed } from '@vue/reactivity';
import { color } from '../utils/colors';
import { size } from '../utils/sizes';

export default {
  name: 'V3Button',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: (val: string) => ['button', 'a', 'input'].includes(val),
    },
    nativeType: {
      type: String,
      default: 'submit',
      validator: (val: string) => ['submit', 'reset'].includes(val),
    },
    color,
    light: {
      type: Boolean,
      default: false,
    },
    size,
    responsive: {
      type: Boolean,
      default: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, { emit }: SetupContext) {
    const clickHandler = (e: Event) => emit('click', e);

    const innerClass = computed(() => {
      const classes = [];
      if (props.color) classes.push(`is-${props.color}`);
      if (props.size) classes.push(`is-${props.size}`);
      if (props.light) classes.push('is-light');
      if (props.responsive) classes.push('is-responsive');
      if (props.fullWidth) classes.push('is-fullwidth');
      if (props.outlined) classes.push('is-outlined');
      if (props.inverted) classes.push('is-inverted');
      if (props.rounded) classes.push('is-rounded');
      if (props.loading) classes.push('is-loading');
      if (props.static) classes.push('is-static');
      return classes;
    });

    return {
      clickHandler,
      innerClass
    }
  }
}
</script>

<style>

</style>