<script setup lang="ts">
import { useAppStore } from '../store';

const store = useAppStore();
</script>

<template>
	<ul class="Links">
		<li v-for="(link, name) in store.selectedGame!.links" :key="name">
			<a target="_blank" :href="link">{{ name }}</a>
		</li>
	</ul>
</template>

<style scoped>
.Links {
	display: flex;
	justify-content: space-evenly;

	margin: 0;
	padding-top: 0.4rem;
	padding-bottom: 0.4rem;

	background-color: hsla(0, 0%, 0%, 0.2);
	backdrop-filter: blur(4px);
}

li {
	list-style: none;
}

a {
	transition: all 250ms;
	font-family: 'Oswald', sans-serif;
	font-size: 1rem;
	color: white;
	text-decoration: none;
}

a:hover {
	color: hsl(351, 92%, 45%);
}
</style>
