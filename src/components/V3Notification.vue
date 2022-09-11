<template>
  <div class="notification" :class="[innerColor, light ? 'is-light' : '']">
    <V3Delete v-if="closable" @click="deleteClickHandler" />
    <slot />
  </div>
</template>

<script>
import V3Delete from './V3Delete.vue';
import { color } from '../utils/colors';
import { computed } from '@vue/reactivity';

export default {
  name: 'V3Notification',
  components: { V3Delete },
  props: {
    closable: {
      type: Boolean,
      default: true,
    },
    light: {
      type: Boolean,
      default: true,
    },
    color,
  },
  setup(props, { emit }) {
    const deleteClickHandler = (e) => emit('delete-click', e);

    const innerColor = computed(() => {
      const { color } = props;
      if (color) return `is-${color}`;
      return ''
    });

    return {
      deleteClickHandler,
      innerColor
    }
  }
}
</script>

<style>

</style>