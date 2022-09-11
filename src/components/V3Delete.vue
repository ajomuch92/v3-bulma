<template>
  <button class="delete" :class="innerClass" @click="clickHandler" />
</template>

<script>
import { size } from '../utils/sizes';

export default {
  name: 'V3Delete',
  props: {
    size,
  },
  setup(props, { emit }) {
    const clickHandler = (e) => emit('click', e);

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