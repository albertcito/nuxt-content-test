<script setup lang="ts">
import getImageURL from '~/util/getImageURL';

const route = useRoute();
const { data: article, status } = await useAsyncData(route.path, () =>
	queryCollection("all").path(route.path).first(),
);
</script>

<template>
  <template v-if="status === 'success' && !article">
    <div
      class="text-2xl font-bold text-center mb-4"
    >
      Article not found 🤷
    </div>
  </template>
  <div v-else-if="article">
    <h1 class="text-2xl font-bold text-center mb-4">
      {{ article.title }}
    </h1>
    <div class="text-center text-sm text-gray-500 mb-4">
      {{ article.date }}
    </div>
    <div class="prose mx-auto">
      <img :src="getImageURL(article.id)" alt="Article Image" class="w-full h-auto mb-4" />
      <ContentRenderer
        v-if="article.body"
        :value="article"
        :prose="true"
        class="text-xl font-karma"
      />
      <div class="flex justify-center items-center gap-2  ">
        <UBadge
          v-for="tag in article.tags"
          variant="subtle"
          color="neutral"
          :key="tag"
          :label="tag"
        />
      </div>
    </div>
    <div class="flex justify-center items-center gap-2 mt-10">
      <UButton
        label="Back to Articles"
        to="/"
      />
    </div>
  </div>
</template>
