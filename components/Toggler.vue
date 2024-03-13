<template>
    <div class="toggler btn" :class="{ 'active': (active === id) }">
        <i :class="`${icon} icon`"></i>
        <h4 class="text">{{ text }}</h4>
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    text: String,
    icon: String,
    active: String
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_vars.sass"
@import "@/assets/sass/_mixins.sass"

.toggler
    @include aic
    gap: 8px
    &:hover,
    &.active
        .icon,
        .text
            color: $accent
    .icon
        font-size: 16px
</style>
