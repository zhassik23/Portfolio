<template>
    <section :id="id" class="section">
        <div class="section-header">
          <h3 class="title">{{ title }}</h3>
          <h5 class="subtitle">{{ subtitle }}</h5>
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
