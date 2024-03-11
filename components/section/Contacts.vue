<template>
	<Section id="contacts" title="Contact me" subtitle="Get in touch">
		<div class="horizontal space">
			<div class="vertical">
				<!-- Phone -->
				<div class="contact horizontal">
					<nuxt-link :to="info.links.phone">
						<i class="fa-solid fa-phone icon"></i>
					</nuxt-link>
					<nuxt-link :to="info.links.phone">
						<h4>Phone</h4>
						<h6 class="subtitle">{{ info.phone }}</h6>
					</nuxt-link>
				</div>

				<!-- Email -->
				<div class="contact horizontal">
					<nuxt-link :to="info.links.gmail">
						<i class="fa-solid fa-envelope icon"></i>
					</nuxt-link>
					<nuxt-link :to="info.links.gmail">
						<h4>Email</h4>
						<h6 class="subtitle">{{ info.gmail }}</h6>
					</nuxt-link>
				</div>

				<!-- Location -->
				<div class="contact horizontal">
					<i class="fa-solid fa-location-dot icon"></i>
					<div>
						<h4>Location</h4>
						<h6 class="subtitle">{{ info.location }}</h6>
					</div>
				</div>
			</div>
			
			<!-- Form -->
			<form id="form" action="mailto:serikuly.zhassulan@gmail.com" method="post" enctype="text/plain" class="form vertical">
				<div class="form-line vertical">
					<label class="label">Name - Surname</label>
					<input class="input" type="text" placeholder="Name - Surname" />
				</div>
				<div class="form-line vertical">
					<label class="label">Contacts</label>
					<input class="input" type="email" placeholder="Phone number / Email" />
				</div>

				<div class="form-line vertical">
					<label class="label">Message</label>
					<textarea class="textarea" cols="1" rows="16" placeholder="Message..."></textarea>
				</div>

				<Button
					id="btn_form"
					text="Send Message"
					icon="fa-solid fa-paper-plane" 
					type="submit"
				/>
			</form>
		</div>
	</Section>
</template>

<script setup>
import info from "@/assets/data.js";
</script>
