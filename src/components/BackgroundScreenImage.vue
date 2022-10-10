<script setup lang="ts">
defineProps<{
	url: string
}>()
</script>

<template>
	<div :style="`background-image: url('${url}');`" class="BackgroundImage"></div>
</template>

<style scoped>
.BackgroundImage {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1000;
	content: '';

	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
