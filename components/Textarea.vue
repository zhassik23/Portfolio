<template>
    <div class="textarea">
        <label :for="id">{{ label }}</label>
        <textarea :id="id" cols="1" rows="16" :placeholder="placeholder" />
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    label: String,
    type: String,
    placeholder: String
});
</script>

<style lang="sass" scoped>
textarea
	height: max-content
</style>
