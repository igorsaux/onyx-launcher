<script setup lang="ts">
import GamesBar from "./components/GamesBar.vue";
import { useAppStore } from './store';
import { ref, watchEffect } from "vue";
import type { Meta } from './types';
import GameScreen from './components/GameScreen.vue';

const store = useAppStore();
const meta = ref<Meta | null>(null);

watchEffect(async () => {
	if (!store.meta) {
		await store.loadMeta();
	}

	meta.value = store.meta;
	store.selectGame(store.meta!.games[0].id)
})
</script>

<template>
	<template v-if="meta !== null">
		<GamesBar />
		<div class="Center">
			<GameScreen />
		</div>
	</template>
	<template v-else>
		<h2>Загрузка...</h2>
	</template>
</template>

<style>
body {
	display: flex;
	flex-direction: row;
}

.Center {
	padding-left: 4rem;
	width: 100%;
	height: 100%;
}
</style>
