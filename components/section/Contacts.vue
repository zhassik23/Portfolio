<template>
	<Section id="contacts" title="Contact me" subtitle="Get in touch">
		<div class="horizontal space">
			<div class="vertical">
				<!-- Phone -->
				<div :key="item.key" v-for="item in data" class="contact horizontal">
					<nuxt-link :to="item.link">
						<i :class="`fa-solid ${item.icon} icon`"></i>
					</nuxt-link>
					<nuxt-link :to="item.link">
						<h4>{{ item.key }}</h4>
						<h6 class="subtitle">{{ item.value }}</h6>
					</nuxt-link>
				</div>
			</div>
			
			<!-- Form -->
			<form id="form" action="mailto:serikuly.zhassulan@gmail.com" method="post" enctype="text/plain" class="form vertical">
				<Input id="name" label="Name - Surname" type="text" placeholder="Name - Surname" />
				<Input id="contact" label="Contacts" type="email" placeholder="Phone number / Email" />
				<Textarea id="message" label="Message" placeholder="Message..." />
				<Button text="Send Message" icon="fa-solid fa-paper-plane" type="submit" />
			</form>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";

const data = [
	{
		key: "Phone",
		value: info.phone,
		link: info.links.phone,
		icon: "fa-phone"
	}, {
		key: "Email",
		value: info.gmail,
		link: info.links.gmail,
		icon: "fa-envelope"
	}, {
		key: "Location",
		value: info.location,
		link: "#",
		icon: "fa-location-dot"
	}
];
</script>
