<template>
	<Section id="about" title="About me" subtitle="My introduction">
		<div class="section-content">
			<img src="assets/images/photo.png" alt="Zhassulan" class="image" />
			<div class="info vertical">
				<p>Experienced and versatile Web Developer adept in Vue.js (Nuxt.js), React.js (Next.js), and Django.py. Demonstrates a strong flair for creativity and an ability to deliver innovative solutions. Possesses a proven track record of making informed, independent decisions, coupled with a dedicated team-oriented approach. Committed to ongoing self-improvement and professional growth, consistently embracing new challenges to broaden horizons.</p>

				<div class="horizontal space">
					<Stat :number="23" text="Project works" />
					<Stat :number="5" text="Language profiency" />
					<Stat :number="4" text="Companies worked" />
				</div>

				<a download href="assets/files/Zhassulan_Serikuly_CV.pdf">
					<Button text="Download CV" icon="fa-solid fa-cloud-arrow-down" />
				</a>
			</div>
		</div>
	</Section>
</template>
