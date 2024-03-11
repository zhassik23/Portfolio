<template>
	<footer class="footer">
		<div class="footer-wrap box">
			<div class="footer-wrap__line">
				<div class="footer-wrap__line__cell vertical">
					<h2 class="title">{{ info.name }}</h2>
					<h4 class="subtitle">Middle Web Developer</h4>
				</div>

				<ul class="footer-wrap__line__cell vertical">
					<li><a href="#experience">
						<p class="text">Experience</p>
					</a></li>
					<li><a href="#qualification">
						<p class="text">Qualification</p>
					</a></li>
					<li><a href="#projects">
						<p class="text">Projects</p>
					</a></li>
					<li><a href="#recomendation">
						<p class="text">Recomendation</p>
					</a></li>
				</ul>

				<ul class="footer-wrap__line__cell horizontal">
					<li><nuxt-link to="https://wa.me/77759764165">
						<i class="fa-brands fa-whatsapp icon"></i>
					</nuxt-link></li>
					<li><nuxt-link to="https://www.facebook.com/young.flovver">
						<i class="fa-brands fa-facebook icon"></i>
					</nuxt-link></li>
					<li><nuxt-link to="https://instagram.com/zhassulaan__?igshid=YmMyMTA2M2Y">
						<i class="fa-brands fa-instagram icon"></i>
					</nuxt-link></li>
					<li><nuxt-link :to="info.links.telegram">
						<i class="fa-brands fa-telegram icon"></i>
					</nuxt-link></li>
					<li><nuxt-link :to="info.links.gmail">
						<i class="fa-solid fa-at icon"></i>
					</nuxt-link></li>
				</ul>
			</div>

			<p class="footer-copy text">&copy; Serikuly Zh. All rights reserved.</p>
		</div>
	</footer>
</template>

<script setup>
import info from "@/assets/data.js";
</script>
