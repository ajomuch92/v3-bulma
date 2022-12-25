<template>
  <span class="tag" :class="innerClass">
    <slot />
    <V3Delete v-if="deletable" @click="deleteClickHandler" />
  </span>
</template>

<script lang="ts">
import { computed, SetupContext } from 'vue';
import { size } from '../utils/sizes';
import { color } from '../utils/colors';
import V3Delete from './V3Delete.vue';

export default {
  name: 'V3Tag',
  components: { V3Delete },
  props: {
    size,
    color,
    light: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    deletable: {
      type: Boolean,
      default: false,
    }
  },
  setup(props: any, { emit }: SetupContext) {

    const deleteClickHandler = (e: Event) => emit('click-delete', e);

    const innerClass = computed(() => {
      if (props.isDelete) return 'is-delete';
      const classes = [];
      if (props.color) classes.push(`is-${props.color}`);
      if (props.size) classes.push(`is-${props.size}`);
      if (props.light) classes.push('is-light');
      return classes;
    });

    return {
      innerClass,
      deleteClickHandler,
    }
  }
}
</script>

<style>

</style>