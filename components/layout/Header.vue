<template>
	<header class="header">
		<div class="header-wrap box horizontal inline space">
			<img :src="info.logo" alt="Logo" class="header-logo" />

			<ul class="header-menu horizontal">
				<li :key="item.id" v-for="item in list">
					<a :href="`#${item.id}`" class="header-menu__item horizontal inline">
						<i :class="`fa-solid ${item.icon} icon`"></i>
						<p class="text">{{ item.text }}</p>
					</a>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup>
import info from "@/assets/data.js";

const list = [
	{
		id: "home",
		text: "Home",
		icon: "fa-house"
	}, {
		id: "about",
		text: "About me",
		icon: "fa-user"
	}, {
		id: "experience",
		text: "Experience",
		icon: "fa-briefcase"
	}, {
		id: "qualification",
		text: "Qualification",
		icon: "fa-graduation-cap"
	}, {
		id: "skills",
		text: "Skills",
		icon: "fa-file"
	}, {
		id: "projects",
		text: "Projects",
		icon: "fa-laptop-code"
	}, {
		id: "recomendations",
		text: "Recomendations",
		icon: "fa-note-sticky"
	}, {
		id: "contacts",
		text: "Contacts",
		icon: "fa-address-book"
	}
];
</script>
