<template>
    <div class="stat">
        <h3 class="stat-value">{{ formattedNumber }}</h3>
        <p class="stat-key">{{ text }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    number: {
        type: Number,
        default: 0
    },
    text: String
});
const formattedNumber = computed(() => {
  return (props.number < 10) ? `0${props.number}` : props.number;
});
</script>

<style lang="scss" scoped>
.stat {
    width: 30%;
    &-value,
    &-key {
        text-align: center;
    }
    &-key {
        margin-top: 6px;
    }
}
</style>
