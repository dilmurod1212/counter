<template>
  <div class="container mx-auto p-4 w-[400px]">
    <n-upload
      action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
      list-type="image-card"
      @change="(e) => uploadImage(e)"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
