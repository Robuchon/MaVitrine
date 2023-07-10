<template>
  <div class="flex w-full max-w-2xl flex-col items-center">
    <h1>Input</h1>
    <h3>Ici la liste des Champs de saisi</h3>
    <div class="flex flex-col items-center">
      <p class="mx-auto grid w-48 grid-cols-3">
        <span class="text-Error">Action</span>
        <span class="text-center font-black text-white">/</span>
        <span class="text-Success">Explication</span>
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
        <!-- <div class="grid grid-cols-1 gap-3 sm:grid-cols-4">
          <img
            src="/img/input/exempleBaseInput.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:z-10 sm:hover:translate-x-[100%] sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/import.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:z-10 sm:hover:translate-x-[50%] sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/target.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:z-10 sm:hover:-translate-x-[50%] sm:hover:scale-[300%]"
          />
          <img
            src="/img/input/exempleUse.png"
            alt=""
            class="m-auto sm:duration-300 sm:hover:z-10 sm:hover:-translate-x-[100%] sm:hover:scale-[250%]"
          />
        </div> -->
        <p>
          Ici, sur les quatre images, je vous montre un exemple de ma façon de
          développer. Gardez à l'esprit que je me forme en autodidacte, donc
          même si cela fonctionne très bien pour moi, ce n'est peut-être pas la
          meilleure façon de travailler, elles pourraient ne pas être les
          meilleures pour vous, surtout si vous êtes également développeur.
        </p>
        <div class="flex flex-col space-y-5 mt-5">
          <div class="">
          <img
            src="/img/input/exempleBaseInput.png"
            alt=""
            class="z-10 float-left m-auto mr-10 w-56 sm:duration-300 sm:hover:z-20 sm:hover:translate-x-[50%] sm:hover:scale-[200%]"
          />
          <p class="my-auto">
            A gauche, je crée un composant d'entrée de texte.
            J'apprécie particulièrement cette approche car elle garantit la
            cohérence de tous les champs de texte sur mon site. De plus, elle me
            permet de modifier le code à un seul endroit, ce qui facilite la
            maintenance. J'ai peut-être poussé l'exercice un peu plus loin pour
            expérimenter différentes approches. Chaque composant a généralement
            une utilité spécifique, et dans ce cas, il se concentre sur la mise
            en page du champ de texte sans traiter les données en elles-mêmes.
          </p>
        </div>
        <div class="">
          <img
            src="/img/input/import.png"
            alt=""
            class="float-top z-10  w-full sm:duration-300 sm:hover:z-20 sm:hover:scale-[110%]"
          />
          <div class="w-full h-full flex">
            <p class="mt-5">
            Au-dessus je représente un regroupement de composants. Elle
            permet de rassembler tous les fichiers qui fonctionnent de la même
            manière. Mes champs de texte sont regroupés ici pour faciliter la
            gestion d'import et d'export.
          </p>
          </div>
          
        </div>
        <div class="">
          <img
            src="/img/input/target.png"
            alt=""
            class="z-10 float-right m-auto ml-10 w-72 sm:duration-300 sm:hover:z-20 sm:hover:-translate-x-[50%] sm:hover:scale-[200%]"
          />
          <p class="mt-5">
            A droite je présente un composant simple chargé de gérer
            l'exportation des données de manière réactive, ainsi que la
            transition ascendante et descendante des données (props, emit).
          </p>
        </div>
        <div class="">
          <img
            src="/img/input/exempleUse.png"
            alt=""
            class="z-10 float-left m-auto mr-10 w-56 sm:duration-300 sm:hover:z-20 sm:hover:translate-x-[50%] sm:hover:-translate-y-[80%] sm:hover:scale-[200%]"
          />
          <p class="mt-10">
            Enfin, a gauche, nous avons l'importation et
            l'utilisation du composant "targetInput", comme je l'appelle. J'ai
            créé une constante en utilisant les références de Vue 3 pour assurer
            la réactivité du code. Cette page joue le rôle de centre de
            commandement qui regroupe et configure tous les autres composants.
          </p>
        </div>
        </div>
        
      </div>
      <div v-else>
        <div class="grid grid-cols-1 items-center md:grid-cols-2">
          <div>
            <section>
              <img
                class="fleche -ml-9 w-14 rotate-45 grayscale hue-rotate-180 sepia"
                src="/img/input/fleche.png"
                alt="fleche"
              />
            </section>
            <InputsTarget
              class="w-80"
              :data="selectInput"
              :error="''"
              v-model="testData.target"
            ></InputsTarget>
          </div>
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

<style scoped>
@keyframes down {
  0% {
    position: relative;
    top: 0px;
    right: 30px;
    opacity: 0;
  }
  50% {
    position: relative;
    top: 15px;
    right: 15px;
    opacity: 0.5;
  }
  100% {
    position: relative;
    top: 30px;
    right: 0px;
    opacity: 1;
  }
}

.fleche {
  animation: down 0.75s infinite linear alternate;
}
</style>
