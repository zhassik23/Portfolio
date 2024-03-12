<template>
	<Section id="qualification" title="Qualification" subtitle="My knowledge and certificates">
		<div class="qualification section-content">
			<div class="qualification-header">
				<Toggler
					text="Education"
					icon="fa-solid fa-graduation-cap"
					:class="{ 'active': (active === 'e') }"
					@click="active = 'e'"
				/>
				<Toggler
					text="Achievements"
					icon="fa-solid fa-briefcase"
					:class="{ 'active': (active === 'a') }"
					@click="active = 'a'"
				/>
			</div>

			<!-- Education -->
			<div class="qualification-list" :class="{ 'show': (active === 'e') }" id="education">
				<div
					:key="id"
					v-for="(item, id) in info.education"
					class="qualification-list__item"
					:class="((id + 1) % 2 === 0) ? 'right' : 'left'"
				>
					<div class="l"></div>

					<div class="shape l">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>
					
					<div class="center">
						<h5 class="title">{{ item.title }}</h5>
						<h6 class="subtitle">{{ item.description }}</h6>
						<div class="date">
							<i class="fa-solid fa-calendar-days date-icon"></i>
							<p class="date-text">{{ item.date }}</p>
						</div>
					</div>
					
					<div class="shape r">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>

					<div class="r"></div>
				</div>
			</div>

			<!-- Achievements -->
			<div class="qualification-list" :class="{ 'show': (active === 'a') }" id="achievements">
				<div
					:key="id"
					v-for="(item, id) in info.achievement"
					class="qualification-list__item"
					:class="((id + 1) % 2 === 1) ? 'right' : 'left'"
				>
					<div class="l"></div>

					<div class="shape l">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>
					
					<div class="center">
						<nuxt-link to="item.link">
							<h5 class="title">{{ item.title }}</h5>
						</nuxt-link>
						<h6 class="subtitle">{{ item.description }}</h6>
						<div class="date">
							<i class="fa-solid fa-calendar-days date-icon"></i>
							<p class="date-text">{{ item.date }}</p>
						</div>
					</div>
					
					<div class="shape r">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>

					<div class="r"></div>
				</div>
			</div>
		</div>
	</Section>
</template>

<script setup>
import info from "assets/data.js";
const active = ref("e");
</script>
