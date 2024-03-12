<template>
    <div class="project">
        <a :href="project.link" class="project-image">
            <img :src="project.image" :alt="project.name" class="image" />
        </a>

        <div class="project-data vertical">
            <h3>{{ project.name }}</h3>
            <h6 class="description">Tech stack: {{ project.stack }}</h6>
            <p class="text">{{ project.description }}</p>
            <a :href="project.link">
                <Button text="Watch this project" icon="fa-solid fa-angles-right" />
            </a>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: Object,
});
</script>
