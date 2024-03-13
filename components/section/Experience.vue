<template>
	<Section id="experience" title="Experience" subtitle="My profesional journey">
		<div class="experience section-content">
			<Card
				v-for="(item, index) in info.experience"
				:key="index"
				:id="index"
				:company="item"
			/>
		</div>
	</Section>
</template>

<script setup>
import info from "assets/data.js";
</script>