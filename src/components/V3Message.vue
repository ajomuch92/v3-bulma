<template>
  <article class="message" :class="innerClass">
    <div v-if="slots.header" class="message-header">
      <slot name="header" />
      <V3Delete v-if="deletable" @click="deleteClickHandler" />
    </div>
    <div class="message-body">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { SetupContext } from 'vue';
import { computed } from '@vue/reactivity';
import { color } from '../utils/colors';
import { size } from '../utils/sizes';
import V3Delete from './V3Delete.vue';

export default {
    name: "V3Message",
    components: { V3Delete },
    props: {
      size,
      color,
      deletable: {
        type: Boolean,
        default: true,
      },
    },
    setup(props: any, { slots, emit }: SetupContext) {

      const deleteClickHandler = (e: Event) => emit('click-delete', e);

      const innerClass = computed(() => {
        const classes = [];
        if (props.color) classes.push(`is-${props.color}`);
        if (props.size) classes.push(`is-${props.size}`);
        return classes;
      });

      return {
        slots,
        deleteClickHandler,
        innerClass,
      };
    },
}
</script>

<style>

</style>