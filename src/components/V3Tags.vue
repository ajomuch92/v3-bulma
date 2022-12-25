<template>
  <div class="tags" :class="{'has-addons': hasAddons}">
    <slot />
  </div>
</template>

<script lang="ts">

export default {
  name: 'V3Tag',
  props: {
    hasAddons: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style>

</style>