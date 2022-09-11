<template>
  <button class="delete" :class="innerClass" @click="clickHandler" />
</template>

<script lang="ts">
import { SetupContext } from 'vue';
import { computed } from 'vue';
import { size } from '../utils/sizes';

export default {
  name: 'V3Delete',
  props: {
    size,
  },
  setup(props: any, { emit }: SetupContext) {
    const clickHandler = (e: Event) => emit('click', e);

    const innerClass = computed(() => {
      const classes = [];
      if (props.size) classes.push(`is-${props.size}`);
      return classes;
    });

    return {
      innerClass,
      clickHandler,
    }
  }
}
</script>

<style>

</style>