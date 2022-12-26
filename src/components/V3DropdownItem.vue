<template>
  <component ref="input" :is="tag" v-bind="$attrs" class="dropdown-item" :class="innerClass" @click="clickHandler">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { onDeactivated, onMounted, ref, SetupContext, getCurrentInstance } from 'vue';

export default {
  name: 'V3DropdownItem',
  props: {
    tag: {
      type: String,
      default: 'a',
      validator: (val: string) => ['a', 'div'].includes(val),
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: undefined,
    }
  },
  setup(props: any, { emit }: SetupContext) {
    const input = ref(null);
    const active = ref(false);
    const instance = getCurrentInstance();

    const clickOutsideHandler = (e: Event) => {
      const el: any = input.value;
      if (el) {
        const target: any = e.target;
        // if (!(el === target || el.contains(target)) && !target.classList.contains('dropdown-trigger')) {
        if (target.classList.contains('dropdown-item') && (el !== target || !el.contains(target))) {
          active.value = false;
        }
      }
    };

    const clickHandler = (e: Event) => {
      active.value = true;
      emit('click', e);
      if (instance?.parent?.type.name === 'V3Dropdown' && props.value) {
        instance.parent.emit('update:modelValue', props.value);
      }
    };

    const innerClass = computed(() => {
      const classes: string[] = [];
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
      input,
      active,
      innerClass,
      clickHandler,
    }
  }
}
</script>

<style>

</style>