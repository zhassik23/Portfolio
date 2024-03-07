<template>
	<Section id="experience" title="Experience" subtitle="My profesional journey">
		<div class="section-content horizontal">
			<Card
				:id="1"
				company="TOO 'КасХИМ'"
				position="Software Engineer"
				icon="fa-solid fa-laptop-code"
				:logo="logos[0]"
				date="January, 2021 - March, 2021 / Atyrau"
				:responsibilities="[
					'Preparing responsive front-end interfaces using HTML, CSS, and JavaScript.',
					'Converting design mockups into high-quality code.',
					'Developing supporting code for web apps.',
					'Participating in daily stand-up meetings and workshops.',
					'Сomputer diagnostics to investigate issues, as well as to provide technical assistance and support.'
				]"
			/>
			<Card
				:id="2"
				company="Athena Plus"
				position="Frontend Developer (React.js, Next.js)"
				icon="fa-brands fa-react"
				:logo="logos[1]"
				date="Jum, 2021 - May, 2022 / Almaty"
				:responsibilities="[
					'Creating logos and animations for websites, contributing to the overall visual branding and UX.',
					'Developing and implementing reusable code components for our clients projects, ensuring functionality and optimal performance.',
					'Utilizing JavaScript framework (React, Next) to implement user interface designs.',
					'Binding scripts to the user interface that provide visualization and animation of the site pages.',
					'Establishing smooth integration between the frontend and backend systems of the website.'
				]"
			/>
			<Card
				:id="3"
				company="A - Lux"
				position="Frontend Developer (Nuxt.js, Vue.js)"
				icon="fa-brands fa-vuejs"
				:logo="logos[2]"
				date="March, 2022 - August, 2022 / Almaty"
				:responsibilities="[
					'Led the front-end development of new projects and played a key role in the modernization of existing projects.',
					'Creating visually appealing web pages based on design layouts to optimize User Interface and Experience.',
					'Cooperation with Backend Developers for smooth merge of backend systems, facilitating seamless data exchange between two components.',
					'Implementing internationalization (i18n) tools to support customization of user interfaces and content in different languages, making it easier to localize apps.'
				]"
			/>
			<Card
				:id="4"
				company="Key Horse"
				position="Full-stack Developer (Vue.js, Django.py, PostgresSQL)"
				icon="fa-solid fa-server"
				:logo="logos[3]"
				date="June, 2022 - November, 2023 / Almaty"
				:responsibilities="[
					'Working with microservices and libraries to enhance the scalability and modularity of the service architecture.',
					'Played a pivotal role in the end-to-end development of multiple internal projects and company tools.',
					'Adding and implementing new utility features to optimize functionality and improve the overall performance of the service.',
					'Creating APIs for a diverse range of forms, catalogs and interactive components, enriching user experiences and enabling smooth data exchange.',
					'Identifying and resolving errors / bugs during the layout phase, resulting in a consistent user interface.'
				]"
			/>
		</div>
	</Section>
</template>

<script setup>
import kashim from "assets/logos/kashim_logo.png";
import athena_plus from "assets/logos/athena_plus_logo.png";
import alux from "assets/logos/alux_logo.png";
import key_horse from "assets/logos/key_horse_logo.png";

const logos = [
	kashim,
	athena_plus,
	alux,
	key_horse
]
</script>