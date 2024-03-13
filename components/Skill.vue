<template>
    <div class="skill">
        <div class="skill-data">
            <h5>{{ skill.name }}</h5>
            <p class="percentage">{{ skill.percentage }}%</p>
        </div>

        <div class="skill-bar">
            <div class="skill-bar__inner" :style="{ width: skill.percentage + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skill: Object
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_vars.sass"
@import "@/assets/sass/_mixins.sass"

.skill
    &-data
        @include aic_jcsb
        margin-bottom: 6px
        .percentage
            font-size: 14px
    &-bar
        position: relative
        width: 100%
        height: 5px
        border: 1px solid $black
        border-radius: 4px
        box-shadow: 0 2px 10px $accent
        background-color: $gray-background
        &__inner
            top: 0
            left: 0
            position: absolute
            height: 100%
            background-color: $accent-active
</style>