<template>
	<Section id="projects" title="Projects" subtitle="My works">
		<div class="carousel">
			<div class="carousel-inner horizontal">
				<Project
					:key="index"
					v-for="(project, index) in info.projects"
					:project="project"
					class="carousel-item"
				/>
			</div>
			<i id="prev" class="fa-regular fa-circle-left icon carousel-button" @click="slider().prevSlide"></i>
			<i id="next" class="fa-regular fa-circle-right icon carousel-button" @click="slider().nextSlide"></i>
		</div>
	</Section>
</template>


<script setup>
import info from "@/assets/data.js";

const active = ref(0);
let timer = null;

function slider() {
	const container = document.querySelector(".carousel-inner");
	
	if (!container) {
		console.error("Container element not found");
		return { prevSlide: () => {}, nextSlide: () => {} };
	}

	const width = container.offsetWidth;
	const length = document.querySelectorAll(".carousel-item").length;
	const maxIndex = length - 1;

	function updateTransform() {
		const newPosition = active.value * width;
		container.style.transform = `translateX(-${newPosition}px)`;
		startInterval();
	}
	function prevSlide() {
		clearInterval(timer);
		if (active.value > 0)
			active.value--;
		else
			active.value = maxIndex;
		updateTransform();
	}
	function nextSlide() {
		clearInterval(timer);
		if (active.value < maxIndex)
			active.value++;
		else
			active.value = 0;
		updateTransform();
	}

	return { prevSlide, nextSlide };
}
function startInterval() {
	timer = setInterval(() => {
		slider().nextSlide();
	}, 3000);
}

onMounted(() => {
	startInterval();
});
onUnmounted(() => {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
});
</script>
