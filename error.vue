<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

</script>

<template>
  <UApp>
    Error here {{ error }}
  </UApp>
</template>
