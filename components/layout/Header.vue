<template>
	<header class="header">
		<div class="header-wrap box horizontal inline space">
			<img src="assets/logos/logo.png" alt="Logo" class="header-logo" />

			<ul class="header-menu horizontal">
				<li><nuxt-link to="#home" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-house icon"></i>
					<p class="text">Home</p>
				</nuxt-link></li>
				<li><nuxt-link to="#about" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-user icon"></i>
					<p class="text">About me</p>
				</nuxt-link></li>
				<li><nuxt-link to="#experience" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-briefcase icon"></i>
					<p class="text">Experience</p>
				</nuxt-link></li>
				<li><nuxt-link to="#qualification" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-graduation-cap icon"></i>
					<p class="text">Qualification</p>
				</nuxt-link></li>
				<li><nuxt-link to="#skills" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-file icon"></i>
					<p class="text">Skills</p>
				</nuxt-link></li>
				<li><nuxt-link to="#projects" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-laptop-code icon"></i>
					<p class="text">Projects</p>
				</nuxt-link></li>
				<li><nuxt-link to="#recomendations" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-note-sticky icon"></i>
					<p class="text">Recomendations</p>
				</nuxt-link></li>
				<li><nuxt-link to="#contacts" class="header-menu__item horizontal inline">
					<i class="fa-solid fa-address-book icon"></i>
					<p class="text">Contacts</p>
				</nuxt-link></li>
			</ul>
		</div>
	</header>
</template>
