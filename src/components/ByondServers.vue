<script setup lang="ts">
import type { Server } from 'src/types';
import ByondClient from './ByondClient.vue';

defineProps<{
	servers: Server[]
}>()

function connectToServer(address: any) {
	window.location = address;
}
</script>

<template>
	<div class="Servers">
		<table class="ServersTable">
			<thead>
				<tr>
					<th>Статус</th>
					<th>Название</th>
					<th>Онлайн</th>
				</tr>
			</thead>
			<tbody>
				<tr @click="connectToServer(server.address)" v-for="server in servers" :key="server.name"
					:title="server.address">
					<th class="ServerStatus ServerStatus--good">Работает</th>
					<th>{{ server.name }}</th>
					<th>{{ Math.round(Math.random() * 50) }}</th>
				</tr>
			</tbody>
		</table>
	</div>

	<ByondClient />
</template>

<style scoped>
.Servers {
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	gap: 0.5rem;

	height: 100%;

	margin: 0;

	background-color: hsla(0, 0%, 0%, 0.5);
	backdrop-filter: blur(4px);
}

.ServersTable {
	border-collapse: collapse;
}

th {
	padding: 0.5rem;
}

tbody tr th {
	font-weight: normal;
}

tr {
	border-top: 1px solid hsla(0, 0%, 100%, 0.1);
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
}

tr:first-child {
	border-top: none;
}

tbody tr:last-child {
	border-bottom: none;
}

tbody tr {
	transition: all 250ms;
}

tbody tr:hover {
	cursor: pointer;
	background-color: hsl(351, 92%, 45%);
}

th {
	border-left: 1px solid hsla(0, 0%, 100%, 0.1);
	border-right: 1px solid hsla(0, 0%, 100%, 0.1);
}

th:first-child {
	border-left: none;
}

th:last-child {
	border-right: none;
}

.ServerButton {
	list-style: none;
	color: white;
	text-decoration: none;
	font-weight: bold;
	background-color: hsl(228, 65%, 51%);
	max-width: fit-content;
	padding: 0.2rem;
	border-radius: 4px;
}

.ServerStatus {
	font-weight: bold;
}

.ServerStatus--good {
	color: hsl(120, 100%, 50%);
}
</style>
