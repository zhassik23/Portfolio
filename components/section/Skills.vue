<template>
	<Section id="skills" title="Skills" subtitle="My abilities">
		<div class="skills section-content horizontal">
			<!-- skills -->
			<div v-for="(skill, index) in info.skills" :key="index" class="skills-box" :class="{ 'active': active === index }">
				<div class="skills-box__header horizontal inline btn">
					<i :class="`${skill.icon} icon`"></i>
					<div>
						<h4>{{ skill.title }}</h4>
						<h6 class="subtitle">{{ skill.subtitle }}</h6>
					</div>
					<i class="fa-solid fa-angle-down icon" @click="active = index"></i>
				</div>

				<div class="skills-box__list vertical">
					<div v-for="item in skill.list" :key="item.key" class="skill">
						<div class="skill-data horizontal inline space">
							<h5>{{ item.name }}</h5>
							<p class="percentage">{{ item.percentage }}%</p>
						</div>
						<div :class="`skill-bar ${item.key}`"></div>
					</div>
				</div>
			</div>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";
const active = ref(0);
</script>
