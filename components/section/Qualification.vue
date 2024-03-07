<template>
	<Section id="qualification" title="Qualification" subtitle="My knowledge and certificates">
		<div class="qualification section-content vertical">
			<div class="qualification-header horizontal">
				<div class="qualification-header__button horizontal inline btn" :class="active === 'e' ? 'active' : ''" @click="active = 'e'">
					<i class="fa-solid fa-graduation-cap icon"></i>
					<h4 class="text">Education</h4>
				</div>
				<div class="qualification-header__button horizontal inline btn" :class="active === 'a' ? 'active' : ''" @click="active = 'a'">
					<i class="fa-solid fa-briefcase icon"></i>
					<h4 class="text">Achievements</h4>
				</div>
			</div>

			<!-- Education -->
			<div class='qualification-list' :class="active === 'e' ? 'show' : ''" id='education'>
				<div
					:key="id"
					v-for="(item, id) in education"
					class="qualification-list__item"
					:class="((id + 1) % 2 === 0) ? 'right' : 'left'"
				>
					<div class="l"></div>

					<div class="shape l">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>
					
					<div class="center vertical">
						<h5 class='title'>{{ item.title }}</h5>
						<h6 class='subtitle'>{{ item.description }}</h6>
						<div class='date horizontal inline'>
							<i class='fa-solid fa-calendar-days date-icon'></i>
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
			<div class='qualification-list' :class="active === 'a' ? 'show' : ''" id='achievements'>
				<div
					:key="id"
					v-for="(item, id) in achievement"
					class="qualification-list__item"
					:class="((id + 1) % 2 === 1) ? 'right' : 'left'"
				>
					<div class="l"></div>

					<div class="shape l">
						<span class="shape-circle"></span>
						<span class="shape-line"></span>
					</div>
					
					<div class="center vertical">
						<nuxt-link to="item.link">
							<h5 class='title'>{{ item.title }}</h5>
						</nuxt-link>
						<h6 class='subtitle'>{{ item.description }}</h6>
						<div class='date horizontal inline'>
							<i class='fa-solid fa-calendar-days date-icon'></i>
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
const education = [
	{
		title: "National School-Gymnasium No. 13",
		description: "Primary School - Atyrau",
		date: "2008-2014"
	}, {
		title: "Kazakh-Turkish Lyceum",
		description: "High School - Atyrau",
		date: "2014-2019"
	}, {
		title: "Suleyman Demirel University",
		description: "Bachelor of 'Engineering and Natural Sciences' - Almaty",
		date: "2019-2023"
	}, {
		title: "HTML, CSS, and JS for Web Developers",
		description: "Coursera",
		date: "May-2021"
	}, {
		title: "Front-End Web Development with React",
		description: "Coursera",
		date: "April-2022"
	}
];
const achievement = [
	{
		title: "Olympiad in Mathematics",
		link: "https://drive.google.com/file/d/1QIK14gniw9aCTPQyj2P6_G8WOHAo9bGT",
		description: "2nd place",
		date: "2013"
	}, {
		title: "Regional Olympiad in Informatics",
		link: "https://drive.google.com/drive/folders/16WG-8UdOVlIGvyUVuViux6dRmsN0kBWw",
		description: "1st place",
		date: "2017"
	}, {
		title: "International Competition “Infomatrix”",
		link: "https://drive.google.com/file/d/1L4cqfLH6yWzUn6alOxFx8yH-sK-Ce3AY",
		description: "Silver medal",
		date: "2018"
	}, {
		title: "Euler Olympiad in Mathematics",
		link: "https://drive.google.com/drive/folders/16WG-8UdOVlIGvyUVuViux6dRmsN0kBWw",
		description: "Participation",
		date: "2018"
	}, {
		title: "Secondary Education",
		link: "https://drive.google.com/file/d/1YrOGC99EDwAo4mqZ3f9pPenBv4t5BrEu",
		description: "Red diploma",
		date: "2019"
	}, {
		title: "Film fest",
		link: "https://drive.google.com/file/d/1Rjn0puqVeO6YfC44Hpw0-zjWefFTztlj",
		description: "3rd place",
		date: "2022"
	}
];
const active = ref("e");
</script>
