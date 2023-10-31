<template>
  <div>
    <div>
      <button @click="decr" class="py-2 px-4 bg-red-500 rounded-md text-white">
        decr
      </button>
      <input
        type="number"
        v-model="number"
        @input="(e) => changeVal(e)"
        class="border border-gray-500 py-2 rounded-md w-[50px] text-center"
      />
      <button
        @click="incr"
        class="py-2 px-4 bg-green-500 rounded-md text-white"
      >
        incr
      </button>
    </div>
    <div class="container mx-auto p-4 w-[400px]">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        list-type="image-card"
        @change="(e) => uploadImage(e)"
      />
    </div>
    <n-button>naive-ui</n-button>
    <template> </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineComponent } from "vue";

const number = ref(1);

function uploadImage(file) {
  const formData = new FormData();
  formData.append("images", file.file.file);
  console.log(file.file.file);
  // uploadFile(formData).then((res) => console.log(res.data));
}
function changeVal(e) {
  if (e.data > 6) {
    return (number.value = 6);
  } else if (e.data < 1) {
    return (number.value = 1);
  } else {
    return number.value;
  }
}
const incr = () => {
  if (number.value == 6) {
    return (number.value = 6);
  } else {
    number.value++;
  }
};
const decr = () => {
  if (number.value == 1) {
    return (number.value = 1);
  } else {
    number.value--;
  }
};
</script>

<style lang="scss" scoped></style>
