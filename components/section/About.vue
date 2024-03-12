<template>
	<Section id="about" title="About me" subtitle="My introduction">
		<div class="about section-content">
			<img :src="info.image" :alt="info.name" class="about-image" />
			<div class="about-info">
				<p>{{ info.description }}</p>

				<div class="horizontal space">
					<Stat
						v-for="stat in info.stats"
						:key="stat.key"
						:number="stat.value"
						:text="stat.key"
					/>
				</div>

				<a download :href="info.documents.cv">
					<Button text="Download CV" icon="fa-solid fa-cloud-arrow-down" />
				</a>
			</div>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";
</script>
