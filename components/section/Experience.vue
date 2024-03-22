<template>
	<Section id="experience" title="Experience" subtitle="My profesional journey">
		<div class="experience section-content">
			<Card
				:key="index"
				v-for="(item, index) in info.experience"
				:id="index"
				:company="item"
			/>
		</div>
	</Section>
</template>

<script setup>
import info from "assets/data.js";
</script>