<template>
	<Section id="qualification" title="Qualification" subtitle="My knowledge and certificates">
		<div class="qualification section-content">
			<div class="qualification-header">
				<Toggler
					id="education"
					text="Education"
					icon="fa-solid fa-graduation-cap"
					:active="active"
					@click="active = 'education'"
				/>
				<Toggler
					id="achievement"
					text="Achievements"
					icon="fa-solid fa-briefcase"
					:active="active"
					@click="active = 'achievement'"
				/>
			</div>

			<Tree
				id="education"
				:list="info.education"
				:active="active"
			/>
			<Tree
				id="achievement"
				:list="info.achievement"
				:active="active"
			/>
		</div>
	</Section>
</template>

<script setup>
import info from "assets/data.js";

const active = ref("education");
</script>
