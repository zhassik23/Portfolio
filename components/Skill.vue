<template>
    <div class="skill">
        <div class="skill-data horizontal inline space">
            <h5>{{ skill.name }}</h5>
            <p class="percentage">{{ skill.percentage }}%</p>
        </div>
        <div :class="`skill-bar ${skill.key}`">
            <div class="skill-bar__inner" :style="{ width: skill.percentage + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    skill: Object,
});
</script>

<style lang="sass" scoped>
.skill
    &-data
        margin-bottom: 6px
        .name
            text-decoration: underline
        .percentage
            font-size: 14px
    &-bar
        position: relative
        width: 100%
        height: 5px
        border: 1px solid #000
        border-radius: 4px
        box-shadow: 0 2px 10px #8CDE59
        background-color: hsla(0, 0%, 78%, .4)
        &__inner
            top: 0
            left: 0
            position: absolute
            height: 100%
            background-color: #517D36
</style>