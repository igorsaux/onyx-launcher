<script setup lang="ts">
defineProps<{
	iconSrc: string,
	title: string
}>()
</script>

<template>
	<div class="GameIcon">
		<img :src="iconSrc" :alt="title" :title="title">
	</div>
</template>

<style scoped>
.GameIcon {
	transition: all 250ms;
	border-radius: 6px;
	padding: 0.2rem;
}

.GameIcon img {
	cursor: pointer;
	max-width: 2.6rem;
}

.GameIcon:hover {
	background-color: hsla(0, 0%, 100%, 0.2);
}

.GameIcon[selected=true] {
	background-color: hsla(0, 0%, 100%, 0.2);

}
</style>
