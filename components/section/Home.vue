<template>
	<section id="home" class="home section">
		<div class="home-wrap horizontal inline space">
			<ul class="home-icons vertical">
				<li><nuxt-link :to="info.links.github">
					<i class="fa-brands fa-github icon"></i>
				</nuxt-link></li>
				<li><nuxt-link :to="info.links.linkedin">
					<i class="fa-brands fa-linkedin icon"></i>
				</nuxt-link></li>
				<li><nuxt-link :to="info.links.gmail">
					<i class="fa-solid fa-envelope icon"></i>
				</nuxt-link></li>
				<li><nuxt-link :to="info.links.telegram">
					<i class="fa-brands fa-telegram icon"></i>
				</nuxt-link></li>
				<li><nuxt-link :to="info.links.phone">
					<i class="fa-solid fa-phone icon"></i>
				</nuxt-link></li>
			</ul>

			<div class="vertical">
				<p class="text">Hello, my name is</p>
				<h1 class="text">{{ info.name }}</h1>
				<h2 class="text">
				 	<TypedText :position="info.position" />
				</h2>
				<nuxt-link :to="info.links.hh">
					<Button text="Head Hunter" icon="fa-brands fa-instagram" />
				</nuxt-link>
			</div>
		</div>
		
		<a id="btn_home" href="#about">
			<Button text="Scroll Down" icon="fa-solid fa-square-caret-down" :second="true" />
		</a>
	</section>
</template>

<script setup>
import info from "@/assets/data.js";
</script>
