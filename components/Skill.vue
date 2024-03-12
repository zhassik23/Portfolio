<template>
    <div class="skill">
        <div class="skill-data horizontal inline space">
            <h5>{{ skill.name }}</h5>
            <p class="percentage">{{ skill.percentage }}%</p>
        </div>
        <div :class="`skill-bar ${skill.key}`"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    skill: Object,
});
</script>
