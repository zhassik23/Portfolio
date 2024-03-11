<template>
    <div class="input vertical">
        <label :for="id" class="input-label">{{ label }}</label>
        <input :id="id" :type="type" :placeholder="placeholder" class="input-text" />
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

<style lang="scss" scoped>
.input {
    padding: 10px 15px;
    border-radius: 10px;
    background-color: hsla(97, 40%, 35%, .3);
    &-label {
        margin-bottom: 4px;
        font-weight: 600;
        font-size: 14px;
    }
    &-text {
        height: 40px;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 13px;
        background-color: hsla(97, 40%, 35%, .3);
        color: hsl(0, 0%, 78%);
        height: 40px;
        &::placeholder {
            color: hsl(0, 0%, 78%);
        }
    }
}
</style>
