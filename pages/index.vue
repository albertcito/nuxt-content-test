<script setup lang="ts">
import { UAlert } from '#components';
import { useArticles } from '~/composables/useArticles';
import getImageURL from '~/util/getImageURL';

const type = computed(() => ["article"]);
const itemsPerPage = computed(() => 3);
const route = useRoute();
const page = computed(() => route.query.page ? Number(route.query.page) : 1);

const { articles, total, totalSkip } = useArticles({
  page,
  itemsPerPage,
  type,
});
</script>

<template>
	<div>
		<h1 class="text-2xl font-bold text-center mb-4">
      Test Page index
    </h1>
    <div class="grid sm:grid-cols-2  lg:grid-cols-3 gap-4 mb-4">
      <div
        v-for="(article, index) in articles.data.value"
        :key="article.id"
        class="border border-gray-200 rounded-md relative"
      >
        <div class="min-h-[100px] bg-gray-200">
          <img
            :src="getImageURL(article.id)"
            alt="Article Image"
            class="w-full h-auto mb-4"
          />
        </div>
        <div class="px-4 py-2">
          <h2 class="text-lg font-bold mb-2">
            <a :href="article.path" class="text-blue-500 hover:text-blue-700 absolute top-0 left-0 w-full h-full" />
            {{ article.title }}
          </h2>
          <p class="text-sm text-gray-500 mb-2">
            {{ article.description }}
          </p>
        </div>
      </div>
    </div>
    <UPagination
      v-model="page"
      :total="total ?? 0"
      :items-per-page="itemsPerPage"
      :total-skip="totalSkip"
      :to="(pageSelected) => ({
        path: '/',
        query: { page: pageSelected },
      })"
    />
	</div>
</template>