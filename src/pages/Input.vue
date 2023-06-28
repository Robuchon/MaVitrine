<template>
  <div class="flex flex-col items-center w-full">
    <h1>je vais faire un menue deroulant de fichier input</h1>
    <div class="flex items-center">
      <InputsTarget
      class=" w-80"
      :data="selectInput"
      :error="''"
      v-model="testData.target"
    ></InputsTarget>
    <InputsTarget
      class=" w-40"
      :data="switchInput"
      :error="''"
      v-model="switchInput.value"
    ></InputsTarget>
    </div>
    <div class="flex items-center">
      <InputsTarget
      class=" w-80"
      :data="testData"
      :error="switchInput.value ? testError : ''"
      v-model="testData.value"
    ></InputsTarget>
    <p>value {{ testData.value }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputsTarget from "@components/InputsTarget.vue";

const selectInput = ref({
  label: "Voir un input",
  name: "input",
  type: "select",
  target: "InputSelect",
  value: "",
  options: [
    { slot: "Faite un choix", value: "" },
    { slot: "Input Select", value: "InputSelect" },
    { slot: "Input Text", value: "InputText" },
    { slot: "Input Switch", value: "InputSwitch" },
  ],
});

const switchInput = ref({
  label: "Voir l'erreur",
  name: "switch",
  type: "switch",
  target: "InputSwitch",
  value: true,
});

const testData = ref({
  label: "Exemple",
  name: "exemple",
  type: "select",
  placeholder: "Exemple",
  target: "",
  value: "",
  options: [
    { slot: "Faite un choix", value: "" },
    { slot: "1", value: 1 },
    { slot: "2", value: 2 },
    { slot: "3", value: 3 },
    { slot: "4", value: 4 },
  ],
});
const testError = ref({ message: "Erreur dans la saisie" });
</script>

<style scoped></style>