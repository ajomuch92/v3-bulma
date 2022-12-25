<template>
  <div class="card">
    <div v-if="slots['card-image']" class="card-image">
      <slot name="card-image" />
    </div>
    <div v-if="slots.default" class="card-content">
      <slot name="default" />
    </div>
    <header v-if="slots['card-header']" class="card-header">
      <slot name="card-header" />
    </header>
    <footer v-if="slots['card-footer']" class="card-footer">
      <slot name="card-footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { SetupContext } from 'vue';
export default {
  name: 'V3Card',
  setup(props: any, {slots}: SetupContext) {
    return {
      slots,
    }
  }
}
</script>

<style>

</style>