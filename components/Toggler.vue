<template>
    <div class="toggler horizontal inline btn">
        <i :class="`${icon} icon`"></i>
        <h4 class="text">{{ text }}</h4>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
    icon: String
});
</script>

<style lang="scss" scoped>
.toggler {
    gap: 8px;
    &:hover,
    &.active {
        .icon,
        .text {
            color: hsl(97, 67%, 61%);
        }
    }
    .icon {
        font-size: 16px;
    }
}
</style>
