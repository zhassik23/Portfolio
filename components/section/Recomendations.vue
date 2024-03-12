<template>
	<Section id="recomendations" title="Recomendations" subtitle="Characteristics from my cheifs">
		<div class="recomendations section-content inline">
			<Stars />

			<a
				v-for="(recomendation, index) in recomendations"
				:key="index"
				download
				:href="recomendation.file"
				class="recomendation"
			>
				<i class="fa-solid fa-file icon"></i>
				<div class="recomendation-line"></div>
				<div>
					<h4 class="recomendation-name">{{ recomendation.cheif }}</h4>
					<h6 class="recomendation-place">{{ recomendation.description }}</h6>
				</div>
			</a>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";

const recomendations = info.documents.recomendations;
</script>
