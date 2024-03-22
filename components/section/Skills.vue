<template>
	<Section id="skills" title="Skills" subtitle="My abilities">
		<div class="skills section-content">
			<div
				:key="index"
				v-for="(skill, index) in info.skills"
				class="skills-box"
				:class="{ 'active': active === index }"
			>
				<div class="skills-box__header">
					<i :class="`${skill.icon} icon`"></i>

					<div>
						<h4>{{ skill.title }}</h4>
						<h6 class="subtitle">{{ skill.subtitle }}</h6>
					</div>

					<i class="fa-solid fa-angle-down icon btn" @click="active = index"></i>
				</div>

				<div class="skills-box__list">
					<Skill :key="item.key" v-for="item in skill.list" :skill="item" />
				</div>
			</div>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";

const active = ref(0);
</script>
