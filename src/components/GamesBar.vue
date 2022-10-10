<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "../store";
import GameIcon from "./GameIcon.vue";

const store = useAppStore();
const { meta, selectedGame } = storeToRefs(store);
const games = meta.value!.games;
</script>

<template>
	<div class="GamesBar">
		<template v-for="game in games" :key="game.id">
			<GameIcon :selected="game.id === selectedGame?.id" @click="store.selectGame(game.id)" :icon-src="game.icon"
				:title="game.title" />
		</template>
	</div>
</template>

<style scoped>
.GamesBar {
	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	height: 100%;
	width: 4rem;

	padding-top: 1rem;
	padding-bottom: 1rem;

	border-right: 1px solid hsla(0, 0%, 100%, 0.1);

	background-color: hsla(0, 100%, 100%, 0.05);
	backdrop-filter: blur(8px);
}
</style>
