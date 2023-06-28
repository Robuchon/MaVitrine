<template>
  <div>
    <ButtonsTarget :data="buttonData" @action="submit()">
        <!-- icon slot -->
    </ButtonsTarget>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonsTarget from "@components/ButtonsTarget.vue";

const buttonData = ref({
  text: "Test",
  //primary, secondary, ...
  type: "Primary",
  //j'imagine: xs, base, xl, square, circle ...
  target: "button",
  // left, right, all or false
  icon: false,
  disabled: false
});

function submit() {
    console.log("coucou", buttonData.value);
    if (buttonData.value.disabled === true) {
        buttonData.value.disabled = false
    } else {
        buttonData.value.disabled = true
    }
}
</script>
