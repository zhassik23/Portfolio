<template>
    <div class="input">
        <label :for="id">{{ label }}</label>
        <input :id="id" :type="type" :placeholder="placeholder" @input="e => $emit('input', e)" />
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    label: String,
    type: String,
    placeholder: String
});
const value = ref("");
</script>
