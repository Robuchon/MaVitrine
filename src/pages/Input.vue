<template>
  <div class="flex w-full max-w-2xl flex-col items-center">
    <h3>Ici la liste des Champs de saisi</h3>
    <p>
      J'ai crée un petit banc d'essai pour des inputs personnalisés.
      J'expérimente en mêlant mes connaissances pour pouvoir modifier facilement
      l'apparence d'un site en quelques clics. Mon objectif principal est de
      pouvoir créer rapidement des sites vitrines en quelques heures. Cette
      expérience m'a également permis de comprendre comment importer
      dynamiquement des composants et utiliser la directive ":is" pour la
      modification en temps réel d'une page.
    </p>

    <div class="grid grid-cols-1 items-center md:grid-cols-2">
      <InputsTarget
        class="w-80"
        :data="selectInput"
        :error="''"
        v-model="testData.target"
      ></InputsTarget>
      <InputsTarget
        v-if="testData.target !== ''"
        class="w-40"
        :data="switchInput"
        :error="''"
        v-model="switchInput.value"
      ></InputsTarget>
    </div>
    <h4 v-if="testData.target !== ''">
      Je vous laisse expérimenter quelques paramètres simples. L'objectif ici
      est surtout de vous montrer ce que j'ai appris à mettre en place.
    </h4>

    <div class="grid grid-cols-1 items-center md:grid-cols-2">
      <InputsTarget
        v-if="testData.target !== ''"
        class="w-80"
        :data="nameInput"
        :error="''"
        v-model="testData.label"
      ></InputsTarget>
      <InputsTarget
        v-if="testData.target !== ''"
        class="w-80"
        :data="errorTxt"
        :error="''"
        v-model="errorTxt.value.message"
      ></InputsTarget>
      <InputsTarget
        v-if="testData.target !== ''"
        class="w-80"
        :data="marginLabel"
        :error="''"
        v-model="testData.classLabel"
      ></InputsTarget>
    </div>
    <div class="mt-16 flex flex-col items-center">
      <InputsTarget
        class="w-80"
        :data="testData"
        :error="switchInput.value ? errorTxt.value : ''"
        v-model="testData.value"
      ></InputsTarget>
      <div class="mt-2 rounded-lg bg-Accent p-2 text-center">
        <p class="mt-0">Valeur Saisie</p>
        <p class="mt-2">{{ testData.value }}</p>
      </div>
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

const nameInput = ref({
  label: "Nommer l'input",
  name: "nameInput",
  type: "text",
  target: "InputText",
});

const errorTxt = ref({
  label: "Nommer l'erreur",
  name: "errorTxt",
  type: "text",
  target: "InputText",
  value: { message: "Erreur dans la saisie" },
});

const marginLabel = ref({
  label: "Margin label et l'input",
  name: "marginLabel",
  target: "InputNumber",
  type: "number",
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
  classLabel: "",
  classInput: "",
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
</script>

<style scoped></style>
