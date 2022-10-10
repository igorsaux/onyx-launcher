<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "../store";
import BackgroundScreenImage from "./BackgroundScreenImage.vue";
import GameLinks from "./GameLinks.vue";
import ByondServers from "./ByondServers.vue";

const store = useAppStore();
const { selectedGame } = storeToRefs(store);
</script>

<template>
	<BackgroundScreenImage :url="selectedGame!.background" />
	<div class="GameScreen">
		<GameLinks />
		<div class="Description">
			<h2>{{ selectedGame!.title }}</h2>
			<p>{{ selectedGame!.description }}</p>
		</div>
		<template v-if="selectedGame!.serverType === 'Byond'">
			<ByondServers :servers="selectedGame!.servers" />
		</template>
	</div>
</template>

<style scoped>
.GameScreen {
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;
}

.Description {
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;

	backdrop-filter: blur(4px);
	border-top: 1px solid hsla(0, 0%, 100%, 0.1);
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
}

h2 {
	margin: 0;

	font-family: 'Oswald', sans-serif;
	font-size: 2.5rem;
}
</style>
