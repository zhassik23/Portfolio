<template>
    <div class="modal">
        <div class="modal-background btn" @click="$emit('close')"></div>
        <div class="modal-wrap">
            <div class="modal-header horizontal">
                <div>
                    <h4 class="modal-title">{{ position }}</h4>
                    <p class="modal-period">{{ date }}</p>
                </div>
                <div class="company">
                    <h4 class="company_title">{{ company }}</h4>
                    <img :src="logo" :alt="company" class="company_logo" />
                </div>
            </div>
            <i class="fa-solid fa-xmark modal-close btn" @click="$emit('close')"></i>

            <ul class="responsibility_list">
                <li :key="id" v-for="(responsibility, id) in responsibilities" class="responsibility">
                    <i class="fa-solid fa-circle responsibility_icon"></i>
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
    logo: String,
    date: String,
    responsibilities: Array
});
</script>
