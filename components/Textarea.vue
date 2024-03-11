<template>
    <div class="textarea vertical">
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
