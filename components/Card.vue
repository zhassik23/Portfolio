<template>
    <div class="card">
        <i :class="`${company.icon} card-icon`"></i>
        <h3 class="card-text">{{ company.name }}</h3>
        <Button text="View More" icon="fa-solid fa-angle-down button_icon" @click="toggleModal(id)" />
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
const isOpen = ref(false);

function toggleModal(id) {
    isOpen.value = !isOpen.value;
    let modal = document.querySelector(`#modal${id}`);

    if (isOpen.value) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    } else {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    }
};
</script>
