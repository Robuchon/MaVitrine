<template>
  <div class="flex w-full max-w-2xl flex-col items-center">
    <h1>Input</h1>
    <h3>Ici la liste des Champs de saisi</h3>
    <div class="flex flex-col items-center">
      <p>
        <span class="text-Success">Explication</span> /
        <span class="text-Error">Action</span>
      </p>
      <InputsTarget
        :data="explication"
        :error="''"
        v-model="explication.value"
      ></InputsTarget>
    </div>
    <transition
      enter-active-class="transition ease-out delay-300 duration-200"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-0"
      ><div v-if="explication.value">
        <p>
          J'ai crée un petit banc d'essai pour des inputs personnalisés.
          J'expérimente en mêlant mes connaissances pour pouvoir modifier
          facilement l'apparence d'un site en quelques clics. Mon objectif
          principal est de pouvoir créer rapidement des sites vitrines en
          quelques heures. Cette expérience m'a également permis de comprendre
          comment importer dynamiquement des composants et utiliser la directive
          ":is" pour la modification en temps réel d'une page.
        </p>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-4">
          <img
            src="/img/input/exempleBaseInput.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/import.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/target.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/exempleUse.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:scale-[250%]"
          />
        </div>
        <p>
          Ici, sur les quatre images, je vous montre un exemple de ma façon de
          développer. Gardez à l'esprit que je me forme en autodidacte, donc
          même si cela fonctionne très bien pour moi, ce n'est peut-être pas la
          meilleure façon de travailler, elles pourraient ne pas être les
          meilleures pour vous, surtout si vous êtes également développeur.
        </p>
        <p>
          Sur la première image, je crée un composant d'entrée de texte.
          J'apprécie particulièrement cette approche car elle garantit la
          cohérence de tous les champs de texte sur mon site. De plus, elle me
          permet de modifier le code à un seul endroit, ce qui facilite la
          maintenance. J'ai peut-être poussé l'exercice un peu plus loin pour
          expérimenter différentes approches. Chaque composant a généralement
          une utilité spécifique, et dans ce cas, il se concentre sur la mise en
          page du champ de texte sans traiter les données en elles-mêmes.
        </p>
        <p>
          La deuxième image représente un regroupement de composants. Elle
          permet de rassembler tous les fichiers qui fonctionnent de la même
          manière. Mes champs de texte sont regroupés ici pour faciliter la
          gestion d'import et d'export.
        </p>
        <p>
          La troisième image présente un composant simple chargé de gérer
          l'exportation des données de manière réactive, ainsi que la transition
          ascendante et descendante des données (props, emit).
        </p>
        <p>
          Enfin, dans la dernière image, nous avons l'importation et
          l'utilisation du composant "targetInput", comme je l'appelle. J'ai
          créé une constante en utilisant les références de Vue 3 pour assurer
          la réactivité du code. Cette page joue le rôle de centre de
          commandement qui regroupe et configure tous les autres composants.
        </p>
      </div>
      <div v-else>
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
          Je vous laisse expérimenter quelques paramètres simples. L'objectif
          ici est surtout de vous montrer ce que j'ai appris à mettre en place.
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
      </div></transition
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputsTarget from "@components/InputsTarget.vue";

const explication = ref({
  label: "",
  name: "switch",
  type: "switch",
  target: "InputSwitch",
  value: true,
});

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
    { slot: "Input Number", value: "InputNumber" },
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
