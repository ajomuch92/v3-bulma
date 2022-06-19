<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { V3BulmaSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  V3BulmaSample,
  // }
});
</script>

<template>
  <div id="app">
    <v3-bulma-sample />
  </div>
</template>
