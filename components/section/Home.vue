<template>
	<section id="home" class="home section">
		<div class="home-wrap horizontal inline space">
			<ul class="home-icons vertical">
				<li><nuxt-link to="https://github.com/zhassulaan">
					<i class="fa-brands fa-github icon"></i>
				</nuxt-link></li>
				<li><nuxt-link to="https://www.linkedin.com/in/serikulyzhassulan">
					<i class="fa-brands fa-linkedin icon"></i>
				</nuxt-link></li>
				<li><nuxt-link to="mailto:serikuly.zhassulan@gmail.com">
					<i class="fa-solid fa-envelope icon"></i>
				</nuxt-link></li>
				<li><nuxt-link to="https://msng.link/o/?young_flovver=tg">
					<i class="fa-brands fa-telegram icon"></i>
				</nuxt-link></li>
				<li><nuxt-link to="tel:+77759764165">
					<i class="fa-solid fa-phone icon"></i>
				</nuxt-link></li>
			</ul>

			<div class="vertical">
				<p class="text">Hello, my name is</p>
				<h1 class="text">Zhassulan Serikuly</h1>
				<h2 class="text">
				 	<TypedText />
				</h2>
				<nuxt-link to="https://hh.kz/applicant/resumes/5d166231ff0ae9aa040039ed1f4d6772377352">
					<Button text="Head Hunter" icon="fa-brands fa-instagram" />
				</nuxt-link>
			</div>
		</div>
		
		<a id="btn_home" href='#about'>
			<Button text="Scroll Down" icon="fa-solid fa-square-caret-down" :second="true" />
		</a>
	</section>
</template>
