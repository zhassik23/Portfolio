<template>
	<button class="button">
		<i v-if="second" :class="`${icon} button-icon`"></i>
		<p class="button-text">{{ text }}</p>
		<i :class="`${icon} button-icon`"></i>
	</button>
</template>

<script setup>
const props = defineProps({
	text: String,
	icon: String,
	second: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	justify-content: center;
    gap: 8px;
	width: fit-content;
    padding: 8px;
    border-radius: 8px;
	background-color: hsl(97, 67%, 61%);
	color: #FFF;
	cursor: pointer;
	transition: .3s;
	&:hover {
		background-color: hsl(97, 40%, 35%);
	}
	&-text,
	&-icon {
		font-weight: 800;
	}
}
</style>