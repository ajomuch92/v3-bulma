<template>
  <div class="dropdown" ref="dropdown" :class="innerClass">
    <div class="dropdown-trigger is-clickable" @click="triggerClickHandler">
      <slot name="trigger" />
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="items"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { onDeactivated, onMounted, ref, SetupContext } from 'vue';

export default {
  name: 'V3Dropdown',
  props: {
    hoverable: {
      type: Boolean,
      default: false,
    },
    rightAligned: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: undefined,
    },
  },
  setup(props: any, { emit }: SetupContext) {
    const active = ref(false);
    const dropdown = ref(null);

    const triggerClickHandler = () => {
      active.value = !active.value;
    }

    const clickOutsideHandler = (e: Event) => {
      const el: any = dropdown.value;
      if (el) {
        const target: any = e.target;
        if (!(el === target || el.contains(target)) || target.classList.contains('dropdown-item')) {
          active.value = false;
        }
      }
    };

    const innerClass = computed(() => {
      const classes: string[] = [];
      if (props.hoverable) classes.push('is-hoverable');
      if (props.rightAligned) classes.push('is-right');
      if (active.value) classes.push('is-active');
      return classes;
    });

    onMounted(() => {
      document.addEventListener('click', clickOutsideHandler);
    });
    
    onDeactivated(() => {
      document.removeEventListener('click', clickOutsideHandler);
    });

    return {
      active,
      triggerClickHandler,
      innerClass,
      dropdown,
    }
  }
}
</script>

<style>

</style>