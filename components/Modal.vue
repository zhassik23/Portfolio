<template>
    <div class="modal">
        <div class="modal-background btn" @click="$emit('close')"></div>
        <div class="modal-wrap">
            <div class="modal-header horizontal">
                <div class="modal-header__left">
                    <h4>{{ position }}</h4>
                    <h6 class="period">{{ date }}</h6>
                </div>
                <img :src="logo" :alt="company" class="logo" />
            </div>
            <i class="fa-solid fa-xmark modal-close btn" @click="$emit('close')"></i>

            <ul class="modal-responsibility vertical">
                <li :key="id" v-for="(responsibility, id) in responsibilities" class="horizontal">
                    <i class="fa-solid fa-circle icon"></i>
                    <p>{{ responsibility }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: Boolean,
    company: String,
    position: String,
    logo: Object,
    date: String,
    responsibilities: Array
});
</script>
