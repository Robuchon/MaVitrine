<template>
  <div class="flex flex-col items-center w-full">
    <h1>je vais faire un menue deroulant de fichier input</h1>
    <div class="flex items-center">
      <InputsTarget
      class=" w-80"
      :target="'InputSelect'"
      :data="selectInput"
      :error="''"
      v-model="selectInput.value"
    ></InputsTarget>
    <InputsTarget
      class=" w-40"
      :target="'InputSwitch'"
      :data="switchInput"
      :error="''"
      v-model="switchInput.value"
    ></InputsTarget>
    </div>
    
    <div class="flex items-center">
      <InputsTarget
      class=" w-80"
      :target="selectInput.value"
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
  value: true,
});

const testData = ref({
  label: "Exemple",
  name: "exemple",
  type: "select",
  placeholder: "Exemple",
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