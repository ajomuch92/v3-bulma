<template>
  <nav class="breadcrumb" :class="innerClass" aria-label="breadcrumbs">
    <ul>
      <li v-for="(item, key) in items" :class="{'is-active': key===items.length-1}" :key="key">
        <a :href="item.href||'#'">
          {{item.label}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { size } from '../utils/sizes';
import BreadcrumbItem from '../interface/breadcrumb';
import { computed } from '@vue/reactivity';

export default {
  name: 'V3Breadcrumb',
  props: {
    tag: {
      type: String,
      default: 'a',
      validator: (val: string) => ['a', 'router-link'].includes(val),
    },
    alignment: {
      type: String,
      default: 'left',
      validator: (val: string) => ['left', 'centered', 'right'].includes(val),
    },
    size,
    items: {
      type: Array as PropType<Array<BreadcrumbItem>>,
      default: () => [],
      required: true,
    },
    separator: {
      type: String,
      default: '',
      validator: (val: string) => ['', 'arrow', 'bullet', 'dot', 'succeeds'].includes(val),
    }
  },
  setup(props: any) {
    const innerClass = computed(() => {
      const classes: string[] = [];
      if (props.separator) classes.push(`has-${props.separator}-separator`);
      if (props.alignment) classes.push(`is-${props.alignment}`);
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