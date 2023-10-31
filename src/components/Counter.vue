<template>
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
    <button @click="incr" class="py-2 px-4 bg-green-500 rounded-md text-white">
      incr
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const number = ref(1);

const props = defineProps({ minVal: Number, maxVal: Number });
function changeVal(e) {
  console.log();
  if (e.data > maxVal) {
    return (number.value = props.maxVal);
  } else if (e.data < 1) {
    return (number.value = props.minVal);
  } else if (new String(number.value).length > 1) {
    return (number.value = props.maxVal);
  } else {
    return number.value;
  }
}
const incr = () => {
  if (number.value == props.maxVal) {
    return (number.value = props.maxVal);
  } else {
    number.value++;
  }
};
const decr = () => {
  if (number.value == props.minVal) {
    return (number.value = props.minVal);
  } else {
    number.value--;
  }
};
</script>

<style lang="scss" scoped></style>
