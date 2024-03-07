<template>
    <section :id="id" class="section">
        <div class="section-header">
          <h1 class="title">{{ title }}</h1>
          <h6 class="subtitle">{{ subtitle }}</h6>
        </div>

        <div class="section-content">
          <slot></slot>
        </div>
      </section>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  subtitle: String
});
</script>
