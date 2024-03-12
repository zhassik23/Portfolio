<template>
	<button class="button" :class="{ 'green': !transparent }">
		<i v-if="second" :class="`${icon} icon`"></i>
		<p class="button-text">{{ text }}</p>
		<i :class="`${icon} icon`"></i>
	</button>
</template>

<script setup>
const props = defineProps({
	text: String,
	icon: String,
	transparent: {
		type: Boolean,
		default: false
	},
	second: {
		type: Boolean,
		default: false
	}
});
</script>

<style lang="sass" scoped>
.button
	gap: 8px
	width: fit-content
	padding: 8px
	border-radius: 8px
	cursor: pointer
	transition: .3s
	&.green
		background-color: hsl(97, 67%, 61%)
		&:hover
			background-color: hsl(97, 40%, 35%)
	&-text,
	.icon
		font-weight: 700
	&-text
		text-wrap: nowrap
	.icon
		font-size: 16px
</style>