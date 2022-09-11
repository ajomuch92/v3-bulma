<template>
  
</template>

<script lang="ts">
import { size } from '../utils/sizes';

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
  }
}
</script>

<style>

</style>