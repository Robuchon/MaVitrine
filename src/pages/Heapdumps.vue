<template>
  <div class="flex w-full max-w-2xl flex-col items-center">
    <h1>Heap Dump</h1>
    <h3 class="text-center">Résolution d'une fuite de mémoire causée <span v-if="!explication.value" class="mt-8 text-2xl font-semibold text-Primary"> par un ....-..... sous NodeJS</span><span v-else class="mt-8 text-2xl font-semibold text-Primary">par un Keep-Alive sous NodeJS</span> </h3>
    <div class="flex flex-col items-center">
      <p class="mx-auto flex items-center gap-4">
        <span class="text-Error w-1/3">Problématique</span>
        <InputsTarget class="w-1/3" :data="explication" :error="''" v-model="explication.value"></InputsTarget>
        <span class="text-Success w-1/3">Résolution</span>
      </p>
    </div>
    <transition
      enter-active-class="transition ease-out delay-300 duration-200"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-0"
      >
      <div v-if="!explication.value">
        <p>
          on va commencé par un etat des lieux j'arrive sur un projet qui a une dette technique importante car le projet a etait dev avec des obligation qui on restreint a un moment les possibilité et les choix fait on pas permis de rendre le projet facilement maintenable et surtout deployer de grosse mise a jour hardware ou meme sur certain point software compliqué
        </p>
        <p>
          Symptome a mon arrivé en gros si plusieur parti sont joué d'affiler sur les raspberry il va planté la cause une utilisation a 100% de ça ram il y a un gros doute sur les audios joué mais pour le moment rien n'a pu mettre en lumierre le probleme juste c'est une des seul explication logique
        </p>
        <p>
          problématique etre sur que c'est bien les audios le probleme et trouvé un patch qui ne casse pas tout car c'est l'audio qui fait avancer tout le jeu avec des ecouteur dévénement sur les piste jouer pour avancé sur les parties et aussi c'est sur du node que le son est joué donc il faut utilisé une interface direct entre le serveur et le materielle pour jouer les musiques et c'est ici une partie du probleme a l'époque le choix a etait porté sur un framework qui n'a pas etait maintenu longtemps et donc peut etre que cela viens de ça
        </p>
        <p>
          generé le bug a volonté j'ai modifier le cycle d'une partie pour jouer plus de son si cela accéler le probleme c'est j'ai mis le doit dessus bingo si je double ou triple les sons joué j'ai bien une augmentation de la memoire
        </p>
        <p>
          je verifie le déreferencment de mes variable et objet le scope et tout pour etre sur qu'il y a pas un probleme lié a ça dans le code je ne trouve rien de cela mais je ne comprend pas pourquoi et je tombe a force de cherché comment etre sur que le garbage collector marche une chose les HeapDumps et la c'est la reponse a une bonne partie de mes doute
        </p>
        <p>
          j'en suis sur j'ai un probleme de referencement mes objects crée pour generer un player a mes audio ne sont jamais jeter a la poubelle mais pourquoi ...
        </p>
      </div>
      <div v-else>
        <p>
          pour la resolution je suis partie sur 2 grands axes 
        </p>
        <p>
          1- lecture de la documentation cela ma pas aider car le framework n'en n'a pas vraiment
        </p>
        <p>
          2- lecture du code directement et la ça a payé en gros pour interfacé le code directement avec le hardware on utilise un child_process avec le methode spawn et la le keepAlive en gros dans le code si jamais le child_process etait stopé il etait de nouveau recrée mais sans garder le referencement ( si j'ai bien tout compris a comment ça marche ).
        </p>
      </div>
    </transition>
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
  value: false,
});

</script>
