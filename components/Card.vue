<template>
    <div class="card">
        <i :class="`${icon} card-icon`"></i>
        <h3 class="card-text">{{ name }}</h3>
        <Button
            text="View More"
            icon="fa-solid fa-angle-down"
            :transparent="true"
            @click="toggleModal(id)"
        />
    </div>

    <Modal
        :id="`modal${id}`"
        :company="company"
        @close="toggleModal(id)"
    />
</template>

<script setup>
const props = defineProps({
    id: Number,
    company: Object,
});
const { name, icon } = props.company;
const isOpen = ref(false);

function toggleModal(id) {
    isOpen.value = !isOpen.value;
    let modal = document.querySelector(`#modal${id}`);

    if (isOpen.value) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    } else {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_vars.sass"
@import "@/assets/sass/_mixins.sass"

.card
    position: relative
    width: 22%
    padding: 72px 30px 90px
    border-radius: 5px
    box-shadow: 0 2px 4px $gray-dark
    background-color: $gray-background
    &:hover
        box-shadow: 0 2px 4px $gray
    &-icon
        color: $accent
        font-size: 40px
    &-text
        margin-top: 20px

@media only screen and (max-width : 480px)
.card
    @include vertical
    align-items: center
    width: 200px
    padding: 15px
    &-icon
        font-size: 20px
    &-text
        margin: 8px 0
        text-align: center
</style>
