<script setup lang="ts">
const pages = [
  { id: 1, title: 'Page 1', path: '/articles/page-1' },
  { id: 2, title: 'Page 2', path: '/articles/page-2/hola' },
  { id: 3, title: 'Page 3', path: '/articles/page-3' },
  { id: 4, title: 'Page 4', path: '/articles/page-4/mpre-hola' },
  { id: 5, title: 'Page 5', path: '/articles/page-5' },
  { id: 6, title: 'Page 6', path: '/articles/page-6' },
  { id: 7, title: 'Page 7', path: '/articles/page-7' },
];
</script>

<template>
  <NuxtLink
        v-for="(page, index) in pages"
        :key="page.id"
        :to="page.path"
      >
        <div>
          {{ page.title }}
        </div>
  </NuxtLink>
</template>