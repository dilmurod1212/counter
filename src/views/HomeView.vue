<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import SourceData from "@/data.json";
const destinations = reactive(SourceData.destinations);
</script>

<style lang="scss" scoped></style>
