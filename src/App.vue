<template>
  <div>
    <Counter :min-val="1" :max-val="6" />
  </div>
</template>

<script setup>
import Counter from "./components/Counter.vue";

function uploadImage(file) {
  const formData = new FormData();
  formData.append("images", file.file.file);
  console.log(file.file.file);
  // uploadFile(formData).then((res) => console.log(res.data));
}
</script>

<style lang="scss" scoped></style>
