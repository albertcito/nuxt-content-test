<script setup lang="ts">
const { data: articles } =  useAsyncData(
  'all',
  () => {
    return queryCollection("all").where("type", "IN", ["article"]).all();
  }
);
</script>

<template>
  <NuxtLink
        v-for="(article, index) in articles"
        :key="article.id"
        :to="article.path"
      >
        <div>
          {{ article.title }}
        </div>
  </NuxtLink>
</template>